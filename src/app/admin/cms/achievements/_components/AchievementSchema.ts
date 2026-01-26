import { z } from "zod";

export const achievementLevels = [
  { value: "INTERNASIONAL", label: "Internasional" },
  { value: "NASIONAL", label: "Nasional" },
  { value: "PROVINSI", label: "Provinsi" },
  { value: "KOTA", label: "Kota/Kabupaten" },
  { value: "KECAMATAN", label: "Kecamatan" },
  { value: "SEKOLAH", label: "Sekolah" },
] as const;

export const medalTypes = [
  { value: "GOLD", label: "Emas" },
  { value: "SILVER", label: "Perak" },
  { value: "BRONZE", label: "Perunggu" },
] as const;

export const achievementSchema = z.object({
  title: z.string().min(1, "Judul prestasi wajib diisi"),
  event: z.string().min(1, "Nama event/kompetisi wajib diisi"),
  level: z.enum(["INTERNASIONAL", "NASIONAL", "PROVINSI", "KOTA", "KECAMATAN", "SEKOLAH"], {
    message: "Tingkat wajib dipilih",
  }),
  medalType: z.enum(["GOLD", "SILVER", "BRONZE"]).nullable().optional(),
  year: z
    .number()
    .int()
    .min(2000, "Tahun minimal 2000")
    .max(new Date().getFullYear(), "Tahun tidak boleh melebihi tahun ini"),
  image: z.string().optional(),
  order: z.number().int().min(0),
  isActive: z.boolean(),
});

export type AchievementFormData = z.infer<typeof achievementSchema>;
