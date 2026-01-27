import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { ExtracurricularForm } from "../_components/ExtracurricularForm";

export default function CreateExtracurricularPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Tambah Ekstrakurikuler"
        description="Buat ekstrakurikuler baru"
        action={
          <Button variant="outline" asChild>
            <Link href="/admin/cms/extracurriculars">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali
            </Link>
          </Button>
        }
      />
      <ExtracurricularForm />
    </div>
  );
}
