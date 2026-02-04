import type { Metadata } from "next";
import HeroSection from "./_components/HeroSection";
import VisionMissionSection from "./_components/VisionMissionSection";
import ProgramKeahlianSection from "./_components/ProgramKeahlianSection";
import GallerySection from "./_components/GallerySection";
import FacilitiesSection from "./_components/FacilitiesSection";
import ExtracurricularSection from "./_components/ExtracurricularSection";
import ContactLocationSection from "./_components/ContactLocationSection";

export const metadata: Metadata = {
  title: "Profil Sekolah",
  description:
    "Profil SMK Muhammadiyah 2 Cibiru Bandung: visi misi, fasilitas, program keahlian, ekstrakurikuler, dan galeri sekolah. Sekolah kejuruan unggulan berbasis Muhammadiyah.",
};

export default function Profil() {
  return (
    <main className="pt-16">
      <HeroSection />
      <VisionMissionSection />
      <ProgramKeahlianSection />
      <GallerySection />
      <FacilitiesSection />
      <ExtracurricularSection />
      <ContactLocationSection />
    </main>
  );
}
