"use client";

import { DataTable } from "@/src/app/admin/_components/DataTable";
import { heroSlideColumns } from "./HeroSlideColumns";
import type { HeroSlide } from "@/src/features/cms/services/hero-slides";

interface HeroSlideTableProps {
  data: HeroSlide[];
}

export function HeroSlideTable({ data }: HeroSlideTableProps) {
  return (
    <DataTable
      columns={heroSlideColumns}
      data={data}
      searchPlaceholder="Cari hero slide..."
      emptyMessage="Belum ada data hero slide."
    />
  );
}
