"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Building2 } from "lucide-react";
import { SortableHeader } from "@/src/app/admin/_components/SortableHeader";
import { StatusBadge } from "@/src/app/admin/_components/StatusBadge";
import { FacilityActions } from "./FacilityActions";
import type { Facility } from "@/src/features/cms/services/facilities";

export const facilityColumns: ColumnDef<Facility>[] = [
  {
    id: "no",
    header: "No",
    cell: ({ row, table }) => {
      const { pageIndex, pageSize } = table.getState().pagination;
      const pageRows = table.getRowModel().rows;
      const visualIndex = pageRows.findIndex((r) => r.id === row.id);
      return (
        <span className="text-muted-foreground">
          {pageIndex * pageSize + visualIndex + 1}
        </span>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <SortableHeader column={column} label="Fasilitas" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        {row.original.icon ? (
          <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
            <svg
              className="w-4 h-4 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={row.original.icon}
              />
            </svg>
          </div>
        ) : (
          <Building2 className="h-4 w-4 text-green-500" />
        )}
        <span className="font-medium">{row.original.name}</span>
      </div>
    ),
  },
  {
    accessorKey: "description",
    header: "Deskripsi",
    cell: ({ row }) => (
      <span className="text-muted-foreground text-sm line-clamp-1">
        {row.original.description || "-"}
      </span>
    ),
  },
  {
    accessorKey: "isActive",
    header: "Status",
    cell: ({ row }) => <StatusBadge isActive={row.original.isActive} />,
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => <FacilityActions facility={row.original} />,
  },
];
