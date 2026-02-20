import { prisma } from "@/src/lib/prisma";
import { SYSTEM_PROMPT } from "@/src/lib/school-info";
import type { AiChatSetting } from "@prisma/client";

export type { AiChatSetting };

export interface UpdateAiChatInput {
  systemPrompt?: string;
  welcomeMessage?: string;
  suggestions?: string[];
  isActive?: boolean;
}

export async function getAiChatSetting(): Promise<AiChatSetting> {
  const setting = await prisma.aiChatSetting.findFirst();
  if (setting) return setting;

  return prisma.aiChatSetting.create({
    data: {
      systemPrompt: SYSTEM_PROMPT,
      welcomeMessage:
        "Halo! Saya asisten virtual SMK Muhammadiyah 2 Cibiru. Ada yang bisa saya bantu? 😊",
      suggestions: ["Jurusan apa saja?", "Cara daftar?", "Ada beasiswa?"],
      isActive: true,
    },
  });
}

export async function updateAiChatSetting(
  data: UpdateAiChatInput,
): Promise<AiChatSetting> {
  const setting = await getAiChatSetting();
  return prisma.aiChatSetting.update({
    where: { id: setting.id },
    data,
  });
}
