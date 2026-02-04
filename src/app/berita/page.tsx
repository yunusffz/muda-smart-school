import type { Metadata } from "next";
import { getPublishedNews } from "@/src/features/cms/services/news";
import Footer from "@/src/app/(home)/_components/Footer";
import NewsHeroSection from "./_components/NewsHeroSection";
import NewsListSection from "./_components/NewsListSection";

export const metadata: Metadata = {
  title: "Berita & Pengumuman",
  description:
    "Berita terbaru, pengumuman, dan informasi kegiatan SMK Muhammadiyah 2 Cibiru Bandung. Ikuti perkembangan sekolah kami.",
};

export default async function BeritaPage() {
  const news = await getPublishedNews();

  return (
    <main className="pt-16">
      <NewsHeroSection />
      <NewsListSection news={news} />
      <Footer />
    </main>
  );
}
