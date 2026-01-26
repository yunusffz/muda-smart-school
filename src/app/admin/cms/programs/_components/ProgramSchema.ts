import { z } from "zod";

export const programSchema = z.object({
  name: z.string().min(1, "Nama program wajib diisi"),
  abbreviation: z.string().min(1, "Singkatan wajib diisi").max(10, "Singkatan maksimal 10 karakter"),
  description: z.string().min(1, "Deskripsi wajib diisi"),
  color: z.string().min(1, "Warna wajib diisi").regex(/^#[0-9A-Fa-f]{6}$/, "Format warna harus hex (contoh: #32368C)"),
  image: z.string().optional(),
  order: z.number().int().min(0),
  isActive: z.boolean(),
  skills: z.array(z.string()),
  careers: z.array(z.string()),
  facilities: z.array(z.string()),
});

export type ProgramFormData = z.infer<typeof programSchema>;
