import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { ExtracurricularTable } from "./_components/ExtracurricularTable";
import { getExtracurriculars } from "@/src/features/cms/services/extracurriculars";

export default async function ExtracurricularsPage() {
  const extracurriculars = await getExtracurriculars();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Ekstrakurikuler"
        description="Kelola kegiatan ekstrakurikuler sekolah"
        action={
          <Button asChild>
            <Link href="/admin/cms/extracurriculars/create">
              <Plus className="mr-2 h-4 w-4" />
              Tambah Ekstrakurikuler
            </Link>
          </Button>
        }
      />
      <ExtracurricularTable data={extracurriculars} />
    </div>
  );
}
