import { NextResponse } from "next/server";
import { getPrograms, createProgram } from "@/src/features/cms/services/programs";
import { programSchema } from "@/src/app/admin/cms/programs/_components/ProgramSchema";

export async function GET() {
  try {
    const programs = await getPrograms();
    return NextResponse.json(programs);
  } catch (error) {
    console.error("Error fetching programs:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data program" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = programSchema.parse(body);
    const program = await createProgram(validated);
    return NextResponse.json(program, { status: 201 });
  } catch (error) {
    console.error("Error creating program:", error);
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Data tidak valid", details: error },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Gagal membuat program" },
      { status: 500 }
    );
  }
}
