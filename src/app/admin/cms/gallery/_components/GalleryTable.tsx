"use client";

import { DataTable } from "@/src/app/admin/_components/DataTable";
import { galleryColumns } from "./GalleryColumns";
import type { Gallery } from "@/src/features/cms/services/gallery";

interface GalleryTableProps {
  data: Gallery[];
}

export function GalleryTable({ data }: GalleryTableProps) {
  return (
    <DataTable
      columns={galleryColumns}
      data={data}
      searchPlaceholder="Cari galeri..."
      emptyMessage="Belum ada data galeri."
    />
  );
}
