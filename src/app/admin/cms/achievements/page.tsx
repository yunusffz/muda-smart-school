import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { AchievementTable } from "./_components/AchievementTable";
import { getAchievements } from "@/src/features/cms/services/achievements";

export default async function AchievementsPage() {
  const achievements = await getAchievements();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Prestasi"
        description="Kelola prestasi dan penghargaan sekolah"
        action={
          <Button asChild>
            <Link href="/admin/cms/achievements/create">
              <Plus className="mr-2 h-4 w-4" />
              Tambah Prestasi
            </Link>
          </Button>
        }
      />
      <AchievementTable data={achievements} />
    </div>
  );
}
