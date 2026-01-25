-- CreateEnum
CREATE TYPE "JenisKelamin" AS ENUM ('LAKI_LAKI', 'PEREMPUAN');

-- CreateEnum
CREATE TYPE "ProgramKeahlian" AS ENUM ('TEKNIK_KOMPUTER_JARINGAN', 'REKAYASA_PERANGKAT_LUNAK', 'MULTIMEDIA', 'AKUNTANSI', 'ADMINISTRASI_PERKANTORAN', 'PEMASARAN');

-- CreateEnum
CREATE TYPE "Pendidikan" AS ENUM ('SD', 'SMP', 'SMA', 'SMK', 'D1', 'D2', 'D3', 'D4', 'S1', 'S2', 'S3', 'TIDAK_SEKOLAH');

-- CreateTable
CREATE TABLE "pendaftaran" (
    "id" TEXT NOT NULL,
    "nama_lengkap" TEXT NOT NULL,
    "jenis_kelamin" "JenisKelamin" NOT NULL,
    "program_keahlian" "ProgramKeahlian" NOT NULL,
    "nisn" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "nomor_kk" TEXT NOT NULL,
    "tempat_lahir" TEXT NOT NULL,
    "tanggal_lahir" TIMESTAMP(3) NOT NULL,
    "no_hp_murid" TEXT NOT NULL,
    "no_hp_ortu" TEXT NOT NULL,
    "alamat_jalan" TEXT NOT NULL,
    "rt" TEXT NOT NULL,
    "rw" TEXT NOT NULL,
    "kelurahan_desa" TEXT NOT NULL,
    "kecamatan" TEXT NOT NULL,
    "kota_kabupaten" TEXT NOT NULL,
    "provinsi" TEXT NOT NULL,
    "nama_ayah" TEXT NOT NULL,
    "tahun_lahir_ayah" INTEGER NOT NULL,
    "pendidikan_ayah" "Pendidikan" NOT NULL,
    "pekerjaan_ayah" TEXT NOT NULL,
    "nama_ibu" TEXT NOT NULL,
    "tahun_lahir_ibu" INTEGER NOT NULL,
    "pendidikan_ibu" "Pendidikan" NOT NULL,
    "pekerjaan_ibu" TEXT NOT NULL,
    "nama_asal_sekolah" TEXT NOT NULL,
    "npsn_asal_sekolah" TEXT NOT NULL,
    "alamat_asal_sekolah" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pendaftaran_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pendaftaran_nisn_key" ON "pendaftaran"("nisn");

-- CreateIndex
CREATE UNIQUE INDEX "pendaftaran_nik_key" ON "pendaftaran"("nik");
