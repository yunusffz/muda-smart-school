import { notFound } from "next/navigation";
import { getNewsBySlug } from "@/src/features/cms/services/news";
import Footer from "@/src/app/(home)/_components/Footer";
import NewsDetailContent from "./_components/NewsDetailContent";

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);

  if (!news || !news.isPublished) {
    notFound();
  }

  return (
    <main className="pt-16">
      <NewsDetailContent news={news} />
      <Footer />
    </main>
  );
}
