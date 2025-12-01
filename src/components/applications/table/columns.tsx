import type { Application } from "@/types";

import { ColumnDef } from "@tanstack/react-table";

export const applicationColumns: Array<ColumnDef<Application>> = [
    {
        accessorKey: "jobTitle",
        header: "Job Title",
    },
    {
        accessorKey: "company",
        header: "Company"
    },
    {
        accessorKey: "status",
        header: "Status"
    },
    {
        accessorKey: "appliedAt",
        header: "Date Applied"
    }
]