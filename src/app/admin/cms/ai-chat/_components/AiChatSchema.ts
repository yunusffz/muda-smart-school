import { z } from "zod";

export const aiChatSchema = z.object({
  systemPrompt: z.string().min(1, "System prompt wajib diisi"),
  welcomeMessage: z.string().min(1, "Pesan sambutan wajib diisi"),
  suggestions: z.array(z.string()),
  isActive: z.boolean(),
});

export type AiChatFormData = z.infer<typeof aiChatSchema>;
