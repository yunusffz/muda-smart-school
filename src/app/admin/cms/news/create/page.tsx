import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { NewsForm } from "../_components/NewsForm";

export default function CreateNewsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Tambah Berita"
        description="Buat berita baru"
        action={
          <Button variant="outline" asChild>
            <Link href="/admin/cms/news">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali
            </Link>
          </Button>
        }
      />
      <NewsForm />
    </div>
  );
}
