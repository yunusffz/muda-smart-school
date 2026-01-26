import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { ExtracurricularForm } from "../_components/ExtracurricularForm";
import { getExtracurricularById } from "@/src/features/cms/services/extracurriculars";

interface EditExtracurricularPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditExtracurricularPage({
  params,
}: EditExtracurricularPageProps) {
  const { id } = await params;
  const extracurricular = await getExtracurricularById(id);

  if (!extracurricular) {
    notFound();
  }

  const defaultValues = {
    name: extracurricular.name,
    description: extracurricular.description || "",
    category: extracurricular.category,
    icon: extracurricular.icon || "",
    image: extracurricular.image || "",
    order: extracurricular.order,
    isActive: extracurricular.isActive,
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Edit Ekstrakurikuler"
        description={`Ubah data ekstrakurikuler ${extracurricular.name}`}
        action={
          <Button variant="outline" asChild>
            <Link href="/admin/cms/extracurriculars">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali
            </Link>
          </Button>
        }
      />
      <ExtracurricularForm
        defaultValues={defaultValues}
        extracurricularId={id}
      />
    </div>
  );
}
