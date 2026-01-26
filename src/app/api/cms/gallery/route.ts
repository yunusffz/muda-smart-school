import { NextResponse } from "next/server";
import { getGallery, createGallery } from "@/src/features/cms/services/gallery";
import { gallerySchema } from "@/src/app/admin/cms/gallery/_components/GallerySchema";

export async function GET() {
  try {
    const gallery = await getGallery();
    return NextResponse.json(gallery);
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data galeri" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = gallerySchema.parse(body);
    const gallery = await createGallery(validated);
    return NextResponse.json(gallery, { status: 201 });
  } catch (error) {
    console.error("Error creating gallery:", error);
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Data tidak valid", details: error },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { error: "Gagal membuat galeri" },
      { status: 500 },
    );
  }
}
