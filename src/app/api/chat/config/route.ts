import { NextResponse } from "next/server";
import { getAiChatSetting } from "@/src/features/cms/services/ai-chat";

export async function GET() {
  try {
    const setting = await getAiChatSetting();
    return NextResponse.json({
      isActive: setting.isActive,
      welcomeMessage: setting.welcomeMessage,
      suggestions: setting.suggestions,
    });
  } catch {
    return NextResponse.json(
      { error: "Gagal mengambil konfigurasi" },
      { status: 500 },
    );
  }
}
