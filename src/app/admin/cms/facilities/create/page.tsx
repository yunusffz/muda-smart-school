import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { FacilityForm } from "../_components/FacilityForm";

export default function CreateFacilityPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Tambah Fasilitas"
        description="Buat fasilitas baru"
        action={
          <Button variant="outline" asChild>
            <Link href="/admin/cms/facilities">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali
            </Link>
          </Button>
        }
      />
      <FacilityForm />
    </div>
  );
}
