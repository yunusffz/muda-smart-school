import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { GalleryForm } from "../_components/GalleryForm";
import { getGalleryById } from "@/src/features/cms/services/gallery";

interface EditGalleryPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditGalleryPage({
  params,
}: EditGalleryPageProps) {
  const { id } = await params;
  const gallery = await getGalleryById(id);

  if (!gallery) {
    notFound();
  }

  const defaultValues = {
    title: gallery.title,
    description: gallery.description,
    image: gallery.image,
    category: gallery.category,
    order: gallery.order,
    isActive: gallery.isActive,
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Edit Galeri"
        description={`Ubah data galeri ${gallery.title}`}
        action={
          <Button variant="outline" asChild>
            <Link href="/admin/cms/gallery">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali
            </Link>
          </Button>
        }
      />
      <GalleryForm defaultValues={defaultValues} galleryId={id} />
    </div>
  );
}
