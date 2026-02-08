import Link from "next/link";

import HeroSection from "./_components/HeroSection";
import ContactCards from "./_components/ContactCards";
import LocationInfo from "./_components/LocationInfo";
import FAQSection from "./_components/FAQSection";
import CTABanner from "./_components/CTABanner";

export default function KontakPage() {
  return (
    <main className="pt-16">
      <HeroSection />
      <ContactCards />
      <LocationInfo />
      <FAQSection />
      <CTABanner />
    </main>
  );
}
