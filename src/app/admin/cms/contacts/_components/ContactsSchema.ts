import { z } from "zod";

export const contactTypes = [
  { value: "WHATSAPP", label: "Whatsapp" },
  { value: "PHONE", label: "No Telepon" },
  { value: "EMAIL", label: "Email" },
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
