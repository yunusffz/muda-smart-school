import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { GalleryForm } from "../_components/GalleryForm";

export default function CreateGalleryPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Tambah Galeri"
        description="Tambah foto galeri baru"
        action={
          <Button variant="outline" asChild>
            <Link href="/admin/cms/gallery">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali
            </Link>
          </Button>
        }
      />
      <GalleryForm />
    </div>
  );
}
