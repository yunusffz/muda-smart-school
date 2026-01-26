import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { HeroSlideTable } from "./_components/HeroSlideTable";
import { getHeroSlides } from "@/src/features/cms/services/hero-slides";

export default async function HeroSlidesPage() {
  const slides = await getHeroSlides();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Hero Slider"
        description="Kelola slide hero banner homepage"
        action={
          <Button asChild>
            <Link href="/admin/cms/hero-slides/create">
              <Plus className="mr-2 h-4 w-4" />
              Tambah Slide
            </Link>
          </Button>
        }
      />
      <HeroSlideTable data={slides} />
    </div>
  );
}
