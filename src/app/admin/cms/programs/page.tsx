import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { ProgramTable } from "./_components/ProgramTable";
import { getPrograms } from "@/src/features/cms/services/programs";

export default async function ProgramsPage() {
  const programs = await getPrograms();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Program Keahlian"
        description="Kelola program keahlian/jurusan yang tersedia"
        action={
          <Button asChild>
            <Link href="/admin/cms/programs/create">
              <Plus className="mr-2 h-4 w-4" />
              Tambah Program
            </Link>
          </Button>
        }
      />
      <ProgramTable data={programs} />
    </div>
  );
}
