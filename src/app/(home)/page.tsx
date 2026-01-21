import HeroBanner from "./_components/HeroBanner";
import ProgramKeahlianSection from "./_components/ProgramKeahlianSection";
import AwardsSection from "./_components/AwardsSection";
import TestimonialsSection from "./_components/TestimonialsSection";
import NewsSection from "./_components/NewsSection";
import CTABanner from "./_components/CTABanner";
import Footer from "./_components/Footer";

export default function Beranda() {
  return (
    <main className="pt-16">
      <HeroBanner />
      <ProgramKeahlianSection />
      <AwardsSection />
      <TestimonialsSection />
      <NewsSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
