import { NextResponse } from "next/server";
import { logout } from "@/src/features/auth/services/auth";

export async function POST() {
  try {
    const { error } = await logout();

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Logout error:", err);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
