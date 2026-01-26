import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { ProgramForm } from "../_components/ProgramForm";

export default function CreateProgramPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Tambah Program Keahlian"
        description="Buat program keahlian baru"
        action={
          <Button variant="outline" asChild>
            <Link href="/admin/cms/programs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali
            </Link>
          </Button>
        }
      />
      <ProgramForm />
    </div>
  );
}
