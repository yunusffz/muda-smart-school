import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { FacilityTable } from "./_components/FacilityTable";
import { getFacilities } from "@/src/features/cms/services/facilities";

export default async function FacilitiesPage() {
  const facilities = await getFacilities();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Fasilitas"
        description="Kelola fasilitas sekolah"
        action={
          <Button asChild>
            <Link href="/admin/cms/facilities/create">
              <Plus className="mr-2 h-4 w-4" />
              Tambah Fasilitas
            </Link>
          </Button>
        }
      />
      <FacilityTable data={facilities} />
    </div>
  );
}
