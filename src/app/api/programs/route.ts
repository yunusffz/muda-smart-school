import { NextResponse } from "next/server";
import { getActivePrograms } from "@/src/features/cms/services/programs";

export async function GET() {
  try {
    const programs = await getActivePrograms();
    return NextResponse.json(programs);
  } catch (error) {
    console.error("Error fetching programs:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data program" },
      { status: 500 },
    );
  }
}
