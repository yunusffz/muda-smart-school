import { z } from "zod";

export const schoolProfileSchema = z.object({
  school_name: z.string().min(1, "Nama sekolah wajib diisi"),
  school_tagline: z.string().optional(),
  school_logo: z.string().optional(),
  accreditation_grade: z.string().optional(),
  vision_text: z.string().optional(),
  missions: z.array(z.string()).optional(),
  address_line1: z.string().optional(),
  address_line2: z.string().optional(),
  address_line3: z.string().optional(),
  postal_code: z.string().optional(),
  maps_url: z.string().optional(),
});

export type SchoolProfileFormData = z.infer<typeof schoolProfileSchema>;
