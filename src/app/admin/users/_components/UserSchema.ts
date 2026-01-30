import { z } from "zod";

export const createUserSchema = z.object({
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),
  password: z
    .string()
    .min(8, "Password minimal 8 karakter")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password harus mengandung huruf besar, huruf kecil, dan angka",
    ),
  name: z.string().min(1, "Nama wajib diisi").max(100, "Nama terlalu panjang"),
  role: z.enum(["SUPER_ADMIN", "ADMIN", "TEACHER", "STUDENT"], {
    message: "Role wajib dipilih",
  }),
  phone: z.string().optional(),
});

export const updateUserSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi").max(100, "Nama terlalu panjang"),
  role: z.enum(["SUPER_ADMIN", "ADMIN", "TEACHER", "STUDENT"], {
    message: "Role wajib dipilih",
  }),
  status: z.enum(["ACTIVE", "INACTIVE", "SUSPENDED"], {
    message: "Status wajib dipilih",
  }),
  phone: z.string().optional(),
});

export const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, "Password minimal 8 karakter")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password harus mengandung huruf besar, huruf kecil, dan angka",
    ),
});

export type CreateUserFormData = z.infer<typeof createUserSchema>;
export type UpdateUserFormData = z.infer<typeof updateUserSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
