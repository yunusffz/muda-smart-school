import { z } from "zod";

export const heroSlideSchema = z.object({
  title: z.string().min(1, "Judul slide wajib diisi"),
  subtitle: z.string().nullable().optional(),
  image: z.string().min(1, "Gambar wajib diunggah"),
  ctaText: z.string().nullable().optional(),
  ctaLink: z.string().nullable().optional(),
  order: z.number().int().min(0),
  isActive: z.boolean(),
});

export type HeroSlideFormData = z.infer<typeof heroSlideSchema>;
