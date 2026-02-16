"use client";

import { DataTable } from "@/src/app/admin/_components/DataTable";
import { programColumns } from "./ProgramColumns";
import type { ProgramWithRelations } from "@/src/features/cms/services/programs";

interface ProgramTableProps {
  data: ProgramWithRelations[];
}

export function ProgramTable({ data }: ProgramTableProps) {
  return (
    <DataTable
      columns={programColumns}
      data={data}
      searchPlaceholder="Cari program..."
      emptyMessage="Belum ada data program."
    />
  );
}
