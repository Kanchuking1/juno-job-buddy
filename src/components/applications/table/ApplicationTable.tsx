"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { StatusBadge } from "./StatusBadge";
import { applicationColumns } from "./columns";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

import { Application, isApplicationStatus } from "@/types/application";

import { useState, useEffect } from "react";

const fetchApplications = async () => {
  const res = await fetch("/api/applications", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    return await res.json();
  } else {
    return { data: [] };
  }
}

const deleteApplication = async (id: string) => {
  const res = await fetch(`/api/applications/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.ok;
}

export function ApplicationTable() {
  const [applications, setApplications] = useState<Application[]>([]);
  
  const table = useReactTable({
    data: applications,
    columns: applicationColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    fetchApplications().then((data) => {
      setApplications(data.data || []);
    });
  }, [])

  // Listen for application creations and refresh the table when a new one is created
  useEffect(() => {
    const createdHandler = (e: Event) => {
      try {
        const ce = e as CustomEvent;
        const created = ce?.detail?.application;
        if (created) {
          setApplications((prev) => [created, ...prev]);
        }
      } catch (err) {
        console.error("Failed to handle applications:created event", err);
      }
    };

    const deletedHandler = (e: Event) => {
      try {
        const ce = e as CustomEvent;
        const id = ce?.detail?.id;
        if (id) {
          setApplications((prev) => prev.filter((a) => a.id !== id));
        }
      } catch (err) {
        console.error("Failed to handle applications:deleted event", err);
      }
    };

    window.addEventListener("applications:created", createdHandler as EventListener);
    window.addEventListener("applications:deleted", deletedHandler as EventListener);
    return () => {
      window.removeEventListener("applications:created", createdHandler as EventListener);
      window.removeEventListener("applications:deleted", deletedHandler as EventListener);
    };
  }, []);

  const renderCell = (key: string, value: string) => {
    if (key === "status" && isApplicationStatus(value)) {
      return <StatusBadge status={value} />;
    }

    if (key === "appliedAt") {
      return new Date(value).toLocaleDateString();
    }
    return value;
  }
  
  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {
                    header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                      )
                  }
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {renderCell(cell.column.id, String(cell.getValue()))}
                    </TableCell>
                  ))}
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={async () => {
                        const id = String((row.original as Application).id);
                        try {
                          const ok = await deleteApplication(id);
                          if (ok) {
                            // let the event handler update local state
                            window.dispatchEvent(new CustomEvent("applications:deleted", { detail: { id } }));
                          } else {
                            console.error("Failed to delete application", id);
                          }
                        } catch (err) {
                          console.error("Error deleting application", err);
                        }
                      }}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
          ) : (
            <TableRow>
              <TableCell colSpan={applicationColumns.length + 1} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
