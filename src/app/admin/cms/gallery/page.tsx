import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { GalleryTable } from "./_components/GalleryTable";
import { getGallery } from "@/src/features/cms/services/gallery";

export default async function GalleryPage() {
  const gallery = await getGallery();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Galeri"
        description="Kelola galeri foto sekolah"
        action={
          <Button asChild>
            <Link href="/admin/cms/gallery/create">
              <Plus className="mr-2 h-4 w-4" />
              Tambah Galeri
            </Link>
          </Button>
        }
      />
      <GalleryTable data={gallery} />
    </div>
  );
}
