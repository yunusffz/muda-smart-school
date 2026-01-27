import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {
  getHeroSlides,
  getActiveHeroSlides,
  createHeroSlide,
} from "@/src/features/cms/services/hero-slides";
import { heroSlideSchema } from "@/src/app/admin/cms/hero-slides/_components/HeroSlideSchema";

export async function GET(request: NextRequest) {
  try {
    const active = request.nextUrl.searchParams.get("active");
    const slides =
      active === "true" ? await getActiveHeroSlides() : await getHeroSlides();
    return NextResponse.json(slides);
  } catch (error) {
    console.error("Error fetching hero slides:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data hero slide" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = heroSlideSchema.parse(body);
    const slide = await createHeroSlide(validated);
    revalidatePath("/admin/cms/hero-slides");
    revalidatePath("/");
    return NextResponse.json(slide, { status: 201 });
  } catch (error) {
    console.error("Error creating hero slide:", error);
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Data tidak valid", details: error },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { error: "Gagal membuat hero slide" },
      { status: 500 },
    );
  }
}
