import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsBySlug } from "@/src/features/cms/services/news";
import Footer from "@/src/app/(home)/_components/Footer";
import NewsDetailContent from "./_components/NewsDetailContent";

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);

  if (!news) {
    return {
      title: "Berita Tidak Ditemukan",
    };
  }

  return {
    title: news.title,
    description:
      news.excerpt || `Baca berita: ${news.title} - SMK Muhammadiyah 2 Cibiru`,
    openGraph: {
      title: news.title,
      description: news.excerpt || `Baca berita: ${news.title}`,
      type: "article",
      ...(news.image ? { images: [{ url: news.image, alt: news.title }] } : {}),
    },
  };
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
