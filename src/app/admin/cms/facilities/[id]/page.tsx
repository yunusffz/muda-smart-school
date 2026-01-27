import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { FacilityForm } from "../_components/FacilityForm";
import { getFacilityById } from "@/src/features/cms/services/facilities";

interface EditFacilityPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditFacilityPage({
  params,
}: EditFacilityPageProps) {
  const { id } = await params;
  const facility = await getFacilityById(id);

  if (!facility) {
    notFound();
  }

  const defaultValues = {
    name: facility.name,
    description: facility.description || "",
    icon: facility.icon || "",
    image: facility.image || "",
    order: facility.order,
    isActive: facility.isActive,
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Edit Fasilitas"
        description={`Ubah data fasilitas ${facility.name}`}
        action={
          <Button variant="outline" asChild>
            <Link href="/admin/cms/facilities">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali
            </Link>
          </Button>
        }
      />
      <FacilityForm defaultValues={defaultValues} facilityId={id} />
    </div>
  );
}
