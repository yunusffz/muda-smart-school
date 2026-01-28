import { z } from "zod";

export const newsSchema = z.object({
  title: z.string().min(1, "Judul wajib diisi").max(255),
  slug: z
    .string()
    .min(1, "Slug wajib diisi")
    .regex(
      /^[a-z0-9-]+$/,
      "Slug hanya boleh mengandung huruf kecil, angka, dan tanda hubung",
    ),
  content: z.string().min(1, "Konten wajib diisi"),
  excerpt: z.string().optional(),
  image: z.string().optional(),
  category: z.string().min(1, "Kategori wajib diisi"),
  isFeatured: z.boolean(),
  isPublished: z.boolean(),
});

export type NewsFormData = z.infer<typeof newsSchema>;
