"use client";

import { DataTable } from "@/src/app/admin/_components/DataTable";
import { newsColumns } from "./NewsColumns";
import type { News } from "@prisma/client";

interface NewsTableProps {
  data: News[];
}

export function NewsTable({ data }: NewsTableProps) {
  return (
    <DataTable
      columns={newsColumns}
      data={data}
      searchPlaceholder="Cari berita..."
      emptyMessage="Belum ada data berita."
    />
  );
}
