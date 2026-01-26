import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { ProgramForm } from "../_components/ProgramForm";
import { getProgramById } from "@/src/features/cms/services/programs";

interface EditProgramPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditProgramPage({ params }: EditProgramPageProps) {
  const { id } = await params;
  const program = await getProgramById(id);

  if (!program) {
    notFound();
  }

  const defaultValues = {
    name: program.name,
    abbreviation: program.abbreviation,
    description: program.description,
    color: program.color,
    image: program.image || "",
    order: program.order,
    isActive: program.isActive,
    skills: program.skills.map((s) => s.name),
    careers: program.careers.map((c) => c.name),
    facilities: program.facilities.map((f) => f.name),
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Edit Program Keahlian"
        description={`Ubah data program ${program.name}`}
        action={
          <Button variant="outline" asChild>
            <Link href="/admin/cms/programs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali
            </Link>
          </Button>
        }
      />
      <ProgramForm defaultValues={defaultValues} programId={id} />
    </div>
  );
}
