import { z } from "zod";

export const facilitySchema = z.object({
  name: z.string().min(1, "Nama fasilitas wajib diisi"),
  description: z.string().optional().nullable(),
  icon: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  order: z.number().int().min(0),
  isActive: z.boolean(),
});

export type FacilityFormData = z.infer<typeof facilitySchema>;
