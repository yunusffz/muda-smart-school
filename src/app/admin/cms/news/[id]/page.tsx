import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { NewsForm } from "../_components/NewsForm";
import { getNewsById } from "@/src/features/cms/services/news";

interface EditNewsPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditNewsPage({ params }: EditNewsPageProps) {
  const { id } = await params;
  const news = await getNewsById(id);

  if (!news) {
    notFound();
  }

  const defaultValues = {
    title: news.title,
    slug: news.slug,
    content: news.content,
    excerpt: news.excerpt || "",
    image: news.image || "",
    category: news.category,
    isFeatured: news.isFeatured,
    isPublished: news.isPublished,
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Edit Berita"
        description={`Ubah data berita "${news.title}"`}
        action={
          <Button variant="outline" asChild>
            <Link href="/admin/cms/news">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali
            </Link>
          </Button>
        }
      />
      <NewsForm defaultValues={defaultValues} newsId={id} />
    </div>
  );
}
