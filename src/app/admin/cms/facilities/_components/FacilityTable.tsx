"use client";

import { DataTable } from "@/src/app/admin/_components/DataTable";
import { facilityColumns } from "./FacilityColumns";
import type { Facility } from "@/src/features/cms/services/facilities";

interface FacilityTableProps {
  data: Facility[];
}

export function FacilityTable({ data }: FacilityTableProps) {
  return (
    <DataTable
      columns={facilityColumns}
      data={data}
      searchPlaceholder="Cari fasilitas..."
      emptyMessage="Belum ada data fasilitas."
    />
  );
}
