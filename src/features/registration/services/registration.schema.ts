import { z } from "zod";

export const jenisKelaminOptions = [
  { value: "LAKI_LAKI", label: "Laki-laki" },
  { value: "PEREMPUAN", label: "Perempuan" },
] as const;

export const programKeahlianOptions = [
  { value: "TEKNIK_OTOMOTIF", label: "Teknik Otomotif" },
  { value: "PEMROGRAMAN_PERANGKAT_LUNAK_DAN_GIM", label: "Pemrograman Perangkat Lunak dan Gim" },
  { value: "TEKNIK_JARINGAN_KOMPUTER_DAN_TELEKOMUNIKASI", label: "Teknik Jaringan Komputer dan Telekomunikasi" },
  { value: "MANAJEMEN_PERKANTORAN_DAN_LAYANAN_BISNIS", label: "Manajemen Perkantoran dan Layanan Bisnis" },
  { value: "AKUNTANSI_DAN_KEUANGAN_LEMBAGA", label: "Akuntansi dan Keuangan Lembaga" },
] as const;

export const pendidikanOptions = [
  { value: "TIDAK_SEKOLAH", label: "Tidak Sekolah" },
  { value: "SD", label: "SD/Sederajat" },
  { value: "SMP", label: "SMP/Sederajat" },
  { value: "SMA", label: "SMA/Sederajat" },
  { value: "SMK", label: "SMK" },
  { value: "D1", label: "D1" },
  { value: "D2", label: "D2" },
  { value: "D3", label: "D3" },
  { value: "D4", label: "D4" },
  { value: "S1", label: "S1" },
  { value: "S2", label: "S2" },
  { value: "S3", label: "S3" },
] as const;

export const registrasiSchema = z.object({
  // Identitas Diri
  namaLengkap: z.string().min(3, "Nama lengkap minimal 3 karakter"),
  jenisKelamin: z.enum(["LAKI_LAKI", "PEREMPUAN"], {
    message: "Pilih jenis kelamin",
  }),
  programKeahlian: z.enum(
    [
      "TEKNIK_OTOMOTIF",
      "PEMROGRAMAN_PERANGKAT_LUNAK_DAN_GIM",
      "TEKNIK_JARINGAN_KOMPUTER_DAN_TELEKOMUNIKASI",
      "MANAJEMEN_PERKANTORAN_DAN_LAYANAN_BISNIS",
      "AKUNTANSI_DAN_KEUANGAN_LEMBAGA",
    ],
    { message: "Pilih program keahlian" }
  ),
  nisn: z
    .string()
    .length(10, "NISN harus 10 digit")
    .regex(/^\d+$/, "NISN hanya boleh angka"),
  nik: z
    .string()
    .length(16, "NIK harus 16 digit")
    .regex(/^\d+$/, "NIK hanya boleh angka"),
  nomorKk: z
    .string()
    .length(16, "Nomor KK harus 16 digit")
    .regex(/^\d+$/, "Nomor KK hanya boleh angka"),
  tempatLahir: z.string().min(2, "Tempat lahir minimal 2 karakter"),
  tanggalLahir: z.string().min(1, "Tanggal lahir wajib diisi"),
  noHpMurid: z
    .string()
    .refine((val) => val === "" || /^\d+$/.test(val), "Nomor HP hanya boleh angka")
    .optional(),
  noHpOrtu: z
    .string()
    .min(10, "Nomor HP minimal 10 digit")
    .max(15, "Nomor HP maksimal 15 digit")
    .regex(/^\d+$/, "Nomor HP hanya boleh angka"),
  emailMurid: z.string().email("Email tidak valid").optional().or(z.literal("")),
  noTelpAyah: z
    .string()
    .refine((val) => val === "" || /^\d+$/.test(val), "Nomor telepon hanya boleh angka")
    .optional(),
  noTelpIbu: z
    .string()
    .refine((val) => val === "" || /^\d+$/.test(val), "Nomor telepon hanya boleh angka")
    .optional(),

  // Alamat
  alamatJalan: z.string().min(5, "Alamat minimal 5 karakter"),
  rt: z.string().min(1, "RT wajib diisi").max(3, "RT maksimal 3 digit"),
  rw: z.string().min(1, "RW wajib diisi").max(3, "RW maksimal 3 digit"),
  kelurahanDesa: z.string().min(2, "Kelurahan/Desa minimal 2 karakter"),
  kecamatan: z.string().min(2, "Kecamatan minimal 2 karakter"),
  kotaKabupaten: z.string().min(2, "Kota/Kabupaten minimal 2 karakter"),
  provinsi: z.string().min(2, "Provinsi minimal 2 karakter"),
  kodePos: z
    .string()
    .regex(/^\d+$/, "Kode pos hanya boleh angka")
    .length(5, "Kode pos harus 5 digit")
    .optional()
    .or(z.literal("")),

  // Data Ayah
  namaAyah: z.string().min(3, "Nama ayah minimal 3 karakter"),
  tahunLahirAyah: z
    .string()
    .refine((val) => val === "" || /^\d+$/.test(val), "Tahun lahir hanya boleh angka")
    .optional(),
  pendidikanAyah: z.enum(
    [
      "SD",
      "SMP",
      "SMA",
      "SMK",
      "D1",
      "D2",
      "D3",
      "D4",
      "S1",
      "S2",
      "S3",
      "TIDAK_SEKOLAH",
    ],
    { message: "Pilih pendidikan ayah" }
  ),
  pekerjaanAyah: z.string().optional(),

  // Data Ibu
  namaIbu: z.string().min(3, "Nama ibu minimal 3 karakter"),
  tahunLahirIbu: z
    .string()
    .refine((val) => val === "" || /^\d+$/.test(val), "Tahun lahir hanya boleh angka")
    .optional(),
  pendidikanIbu: z.enum(
    [
      "SD",
      "SMP",
      "SMA",
      "SMK",
      "D1",
      "D2",
      "D3",
      "D4",
      "S1",
      "S2",
      "S3",
      "TIDAK_SEKOLAH",
    ],
    { message: "Pilih pendidikan ibu" }
  ),
  pekerjaanIbu: z.string().optional(),

  // Data Wali (Opsional)
  namaWali: z.string().optional(),
  tahunLahirWali: z
    .string()
    .refine((val) => val === "" || /^\d+$/.test(val), "Tahun lahir hanya boleh angka")
    .optional(),
  pendidikanWali: z.enum(
    [
      "SD",
      "SMP",
      "SMA",
      "SMK",
      "D1",
      "D2",
      "D3",
      "D4",
      "S1",
      "S2",
      "S3",
      "TIDAK_SEKOLAH",
    ],
    { message: "Pilih pendidikan wali" }
  ).optional(),
  pekerjaanWali: z.string().optional(),
  noTelpWali: z
    .string()
    .refine((val) => val === "" || /^\d+$/.test(val), "Nomor telepon hanya boleh angka")
    .optional(),
  hubunganWali: z.string().optional(),

  // Asal Sekolah
  namaAsalSekolah: z.string().min(3, "Nama sekolah minimal 3 karakter"),
  npsnAsalSekolah: z
    .string()
    .refine((val) => val === "" || /^\d+$/.test(val), "NPSN hanya boleh angka")
    .optional(),
  alamatAsalSekolah: z.string().min(5, "Alamat sekolah minimal 5 karakter"),
  tahunLulus: z
    .string()
    .regex(/^\d+$/, "Tahun lulus hanya boleh angka")
    .length(4, "Tahun lulus harus 4 digit")
    .refine((val) => {
      const year = parseInt(val);
      const currentYear = new Date().getFullYear();
      return year >= 2022 && year <= currentYear;
    }, `Tahun lulus harus antara 2022-${new Date().getFullYear()}`),
});

export type RegistrasiFormData = z.infer<typeof registrasiSchema>;

// Fields with min/length validation (required fields)
export const requiredFields: Set<keyof RegistrasiFormData> = new Set([
  "namaLengkap",
  "jenisKelamin",
  "programKeahlian",
  "nisn",
  "nik",
  "nomorKk",
  "tempatLahir",
  "tanggalLahir",
  "noHpOrtu",
  "alamatJalan",
  "rt",
  "rw",
  "kelurahanDesa",
  "kecamatan",
  "kotaKabupaten",
  "provinsi",
  "namaAyah",
  "pendidikanAyah",
  "namaIbu",
  "pendidikanIbu",
  "namaAsalSekolah",
  "alamatAsalSekolah",
  "tahunLulus",
]);

