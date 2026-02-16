"use client";

import { DataTable } from "@/src/app/admin/_components/DataTable";
import { achievementColumns } from "./AchievementColumns";
import type { Achievement } from "@/src/features/cms/services/achievements";

interface AchievementTableProps {
  data: Achievement[];
}

export function AchievementTable({ data }: AchievementTableProps) {
  return (
    <DataTable
      columns={achievementColumns}
      data={data}
      searchPlaceholder="Cari prestasi..."
      emptyMessage="Belum ada data prestasi."
    />
  );
}
