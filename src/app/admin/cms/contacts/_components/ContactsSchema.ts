import { z } from "zod";
import { MessageCircle, Phone, Mail } from "lucide-react";

export const contactTypes = [
  { value: "WHATSAPP", label: "WhatsApp", icon: MessageCircle },
  { value: "PHONE", label: "No Telepon", icon: Phone },
  { value: "EMAIL", label: "Email", icon: Mail },
] as const;

export const contactSchema = z.object({
  name: z.string().min(1, "Nama Kontak wajib diisi"),
  value: z.string().min(1, "Nomer / Email wajib diisi"),
  type: z.enum(["WHATSAPP", "PHONE", "EMAIL"]),
  description: z.string().optional(),
  order: z.number().int().min(0),
  isActive: z.boolean(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
