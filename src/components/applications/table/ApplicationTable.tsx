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
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={applicationColumns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
