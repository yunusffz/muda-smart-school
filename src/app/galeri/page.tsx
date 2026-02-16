import type { Metadata } from "next";
import { getActiveGallery } from "@/src/features/cms/services/gallery";
import Footer from "@/src/app/(home)/_components/Footer";
import GaleriHeroSection from "./_components/GaleriHeroSection";
import GaleriGallerySection from "./_components/GaleriGallerySection";

export const metadata: Metadata = {
  title: "Galeri Sekolah",
  description:
    "Galeri foto kegiatan, fasilitas, prestasi, dan kehidupan sehari-hari di SMK Muhammadiyah 2 Cibiru.",
};

export default async function GaleriPage() {
  const galleries = await getActiveGallery();

  const categoryCount = new Set(galleries.map((g) => g.category)).size;

  return (
    <main className="pt-16">
      <GaleriHeroSection
        totalPhotos={galleries.length}
        categoryCount={categoryCount}
      />
      <GaleriGallerySection galleries={galleries} />
      <Footer />
    </main>
  );
}
