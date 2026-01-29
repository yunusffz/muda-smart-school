import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { NewsTable } from "./_components/NewsTable";
import { getNews } from "@/src/features/cms/services/news";

export default async function NewsPage() {
  const news = await getNews();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Berita"
        description="Kelola berita dan pengumuman"
        action={
          <Button asChild>
            <Link href="/admin/cms/news/create">
              <Plus className="mr-2 h-4 w-4" />
              Tambah Berita
            </Link>
          </Button>
        }
      />
      <NewsTable data={news} />
    </div>
  );
}
