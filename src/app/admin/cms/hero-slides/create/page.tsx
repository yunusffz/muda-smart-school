import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { HeroSlideForm } from "../_components/HeroSlideForm";

export default function CreateHeroSlidePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Tambah Hero Slide"
        description="Tambah slide hero banner baru"
        action={
          <Button variant="outline" asChild>
            <Link href="/admin/cms/hero-slides">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali
            </Link>
          </Button>
        }
      />
      <HeroSlideForm />
    </div>
  );
}
