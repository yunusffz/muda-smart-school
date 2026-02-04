import { getActiveAchievements } from "@/src/features/cms/services/achievements";
import Footer from "@/src/app/(home)/_components/Footer";
import PrestasiHeroSection from "./_components/PrestasiHeroSection";
import PrestasiListSection from "./_components/PrestasiListSection";

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
