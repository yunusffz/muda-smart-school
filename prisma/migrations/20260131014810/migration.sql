/*
  Warnings:

  - The values [TEKNIK_KOMPUTER_JARINGAN,REKAYASA_PERANGKAT_LUNAK,MULTIMEDIA,AKUNTANSI,ADMINISTRASI_PERKANTORAN,PEMASARAN] on the enum `ProgramKeahlian` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[nomor_pendaftaran]` on the table `pendaftaran` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tahun_lulus` to the `pendaftaran` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('SUPER_ADMIN', 'ADMIN', 'TEACHER', 'STUDENT');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "StatusPendaftaran" AS ENUM ('PENDING', 'DIVERIFIKASI', 'DITOLAK', 'DITERIMA');

-- AlterEnum
BEGIN;
CREATE TYPE "ProgramKeahlian_new" AS ENUM ('TEKNIK_OTOMOTIF', 'PEMROGRAMAN_PERANGKAT_LUNAK_DAN_GIM', 'TEKNIK_JARINGAN_KOMPUTER_DAN_TELEKOMUNIKASI', 'MANAJEMEN_PERKANTORAN_DAN_LAYANAN_BISNIS', 'AKUNTANSI_DAN_KEUANGAN_LEMBAGA');
ALTER TABLE "pendaftaran" ALTER COLUMN "program_keahlian" TYPE "ProgramKeahlian_new" USING ("program_keahlian"::text::"ProgramKeahlian_new");
ALTER TYPE "ProgramKeahlian" RENAME TO "ProgramKeahlian_old";
ALTER TYPE "ProgramKeahlian_new" RENAME TO "ProgramKeahlian";
DROP TYPE "public"."ProgramKeahlian_old";
COMMIT;

-- AlterTable
ALTER TABLE "pendaftaran" ADD COLUMN     "email_murid" TEXT,
ADD COLUMN     "hubungan_wali" TEXT,
ADD COLUMN     "kode_pos" TEXT,
ADD COLUMN     "nama_wali" TEXT,
ADD COLUMN     "no_telp_ayah" TEXT,
ADD COLUMN     "no_telp_ibu" TEXT,
ADD COLUMN     "no_telp_wali" TEXT,
ADD COLUMN     "nomor_pendaftaran" TEXT,
ADD COLUMN     "pekerjaan_wali" TEXT,
ADD COLUMN     "pendidikan_wali" "Pendidikan",
ADD COLUMN     "status" "StatusPendaftaran" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "tahun_lahir_wali" INTEGER,
ADD COLUMN     "tahun_lulus" INTEGER NOT NULL,
ADD COLUMN     "tanggal_pendaftaran" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'STUDENT',
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "avatar" TEXT,
    "phone" TEXT,
    "last_login_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by_id" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "pendaftaran_nomor_pendaftaran_key" ON "pendaftaran"("nomor_pendaftaran");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
