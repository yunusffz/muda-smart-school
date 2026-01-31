import { NextResponse } from "next/server";
import { getCurrentUser } from "@/src/features/auth/services/auth";

export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Tidak terautentikasi" },
        { status: 401 },
      );
    }

    return NextResponse.json({ user });
  } catch (err) {
    console.error("Get current user error:", err);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
