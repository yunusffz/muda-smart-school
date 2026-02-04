import type { Metadata } from "next";
import HeroBanner from "./_components/HeroBanner";
import ProgramKeahlianSection from "./_components/ProgramKeahlianSection";
import AwardsSection from "./_components/AwardsSection";
import TestimonialsSection from "./_components/TestimonialsSection";
import NewsSection from "./_components/NewsSection";
import CTABanner from "./_components/CTABanner";
import Footer from "./_components/Footer";
import { getActiveHeroSlides } from "@/src/features/cms/services/hero-slides";

export const metadata: Metadata = {
  title: {
    absolute: "SMK Muhammadiyah 2 Cibiru | SMK Unggulan Bandung",
  },
  description:
    "SMK Muhammadiyah 2 Cibiru adalah sekolah kejuruan unggulan di Bandung dengan 5 program keahlian: PPLG, TJKT, Otomotif, MPLB, dan AKL. Daftar sekarang dan raih masa depan cerah bersama kami!",
};

export default async function Beranda() {
  const slides = await getActiveHeroSlides();

  return (
    <main className="pt-16">
      <h1 className="sr-only">
        SMK Muhammadiyah 2 Cibiru - Sekolah Kejuruan Unggulan di Bandung
      </h1>
      <HeroBanner slides={slides} />
      <ProgramKeahlianSection />
      <AwardsSection />
      <TestimonialsSection />
      <NewsSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
