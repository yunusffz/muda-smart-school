"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { SortableHeader } from "@/src/app/admin/_components/SortableHeader";
import { StatusBadge } from "@/src/app/admin/_components/StatusBadge";
import { NewsActions } from "./NewsActions";
import type { News } from "@prisma/client";

const categoryBadgeColors: Record<string, string> = {
  PENGUMUMAN: "bg-green-100 text-green-700",
  KEGIATAN: "bg-primary-100 text-primary-700",
  PRESTASI: "bg-yellow-100 text-yellow-700",
  BERITA: "bg-gray-100 text-gray-700",
};

export const newsColumns: ColumnDef<News>[] = [
  {
    accessorKey: "image",
    header: "Gambar",
    cell: ({ row }) => (
      <div className="relative h-12 w-16 overflow-hidden rounded">
        {row.original.image ? (
          <Image
            src={row.original.image}
            alt={row.original.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 text-xs text-gray-400">
            -
          </div>
        )}
      </div>
    ),
  },
  {
    accessorKey: "title",
    header: ({ column }) => <SortableHeader column={column} label="Judul" />,
    cell: ({ row }) => (
      <div className="max-w-xs truncate font-medium">{row.original.title}</div>
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => <SortableHeader column={column} label="Kategori" />,
    cell: ({ row }) => {
      const colors =
        categoryBadgeColors[row.original.category] ||
        "bg-gray-100 text-gray-700";
      return (
        <span
          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${colors}`}
        >
          {row.original.category}
        </span>
      );
    },
  },
  {
    accessorKey: "isFeatured",
    header: "Unggulan",
    cell: ({ row }) =>
      row.original.isFeatured ? (
        <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">
          Ya
        </span>
      ) : (
        <span className="text-xs text-muted-foreground">-</span>
      ),
  },
  {
    accessorKey: "isPublished",
    header: "Status",
    cell: ({ row }) => (
      <StatusBadge
        isActive={row.original.isPublished}
        activeText="Dipublikasikan"
        inactiveText="Draft"
      />
    ),
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => <SortableHeader column={column} label="Dibuat" />,
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {new Date(row.original.createdAt).toLocaleDateString("id-ID")}
      </span>
    ),
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => <NewsActions news={row.original} />,
  },
];
