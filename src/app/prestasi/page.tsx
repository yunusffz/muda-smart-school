import type { Metadata } from "next";
import { getActiveAchievements } from "@/src/features/cms/services/achievements";
import Footer from "@/src/app/(home)/_components/Footer";
import PrestasiHeroSection from "./_components/PrestasiHeroSection";
import PrestasiListSection from "./_components/PrestasiListSection";

export const metadata: Metadata = {
  title: "Prestasi Siswa",
  description:
    "Prestasi dan penghargaan siswa SMK Muhammadiyah 2 Cibiru di berbagai kompetisi tingkat kota, provinsi, dan nasional.",
};

export default async function PrestasiPage() {
  const achievements = await getActiveAchievements();

  return (
    <main className="pt-16">
      <PrestasiHeroSection />
      <PrestasiListSection achievements={achievements} />
      <Footer />
    </main>
  );
}
