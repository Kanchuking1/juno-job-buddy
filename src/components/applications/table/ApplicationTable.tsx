"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { StatusBadge } from "./StatusBadge";

import type { ApplicationTableProps } from "@/types";
import { applicationColumns } from "./columns";

export function ApplicationTable({ applications, isLoading }: ApplicationTableProps) {
  const table = useReactTable({
    data: applications,
    columns: applicationColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  const renderCell = (key: string, value: string) => {
    if (key === "status") {
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
