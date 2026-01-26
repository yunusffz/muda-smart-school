import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { HeroSlideForm } from "../_components/HeroSlideForm";
import { getHeroSlideById } from "@/src/features/cms/services/hero-slides";

interface EditHeroSlidePageProps {
  params: Promise<{ id: string }>;
}

export default async function EditHeroSlidePage({
  params,
}: EditHeroSlidePageProps) {
  const { id } = await params;
  const heroSlide = await getHeroSlideById(id);

  if (!heroSlide) {
    notFound();
  }

  const defaultValues = {
    title: heroSlide.title,
    subtitle: heroSlide.subtitle,
    image: heroSlide.image,
    ctaText: heroSlide.ctaText,
    ctaLink: heroSlide.ctaLink,
    order: heroSlide.order,
    isActive: heroSlide.isActive,
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Edit Hero Slide"
        description={`Ubah data slide "${heroSlide.title}"`}
        action={
          <Button variant="outline" asChild>
            <Link href="/admin/cms/hero-slides">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali
            </Link>
          </Button>
        }
      />
      <HeroSlideForm defaultValues={defaultValues} heroSlideId={id} />
    </div>
  );
}
