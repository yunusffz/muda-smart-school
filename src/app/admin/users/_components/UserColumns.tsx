"use client";

import { ColumnDef } from "@tanstack/react-table";
import type { User } from "@prisma/client";
import { ROLE_LABELS, STATUS_LABELS } from "@/src/features/auth/types";
import { UserActions } from "./UserActions";

const roleBadgeColors: Record<string, string> = {
  SUPER_ADMIN: "bg-red-100 text-red-700",
  ADMIN: "bg-primary-100 text-primary-700",
  TEACHER: "bg-green-100 text-green-700",
  STUDENT: "bg-yellow-100 text-yellow-700",
};

const statusBadgeColors: Record<string, string> = {
  ACTIVE: "bg-green-100 text-green-700",
  INACTIVE: "bg-gray-100 text-gray-700",
  SUSPENDED: "bg-red-100 text-red-700",
};

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Nama",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-600 font-medium text-sm">
          {row.original.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)}
        </div>
        <div>
          <div className="font-medium">{row.original.name}</div>
          <div className="text-sm text-muted-foreground">
            {row.original.email}
          </div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const colors =
        roleBadgeColors[row.original.role] || "bg-gray-100 text-gray-700";
      return (
        <span
          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${colors}`}
        >
          {ROLE_LABELS[row.original.role]}
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const colors =
        statusBadgeColors[row.original.status] || "bg-gray-100 text-gray-700";
      return (
        <span
          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${colors}`}
        >
          {STATUS_LABELS[row.original.status]}
        </span>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "Telepon",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.phone || "-"}
      </span>
    ),
  },
  {
    accessorKey: "lastLoginAt",
    header: "Login Terakhir",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.lastLoginAt
          ? new Date(row.original.lastLoginAt).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })
          : "Belum pernah"}
      </span>
    ),
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => <UserActions user={row.original} />,
  },
];
