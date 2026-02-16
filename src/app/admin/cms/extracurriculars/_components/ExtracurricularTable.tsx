"use client";

import { DataTable } from "@/src/app/admin/_components/DataTable";
import { extracurricularColumns } from "./ExtracurricularColumns";
import type { Extracurricular } from "@/src/features/cms/services/extracurriculars";

interface ExtracurricularTableProps {
  data: Extracurricular[];
}

export function ExtracurricularTable({ data }: ExtracurricularTableProps) {
  return (
    <DataTable
      columns={extracurricularColumns}
      data={data}
      searchPlaceholder="Cari ekstrakurikuler..."
      emptyMessage="Belum ada data ekstrakurikuler."
    />
  );
}
