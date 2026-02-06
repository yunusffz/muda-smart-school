/*
  Warnings:

  - You are about to drop the column `no_hp_ortu` on the `pendaftaran` table. All the data in the column will be lost.
  - Made the column `no_hp_murid` on table `pendaftaran` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tahun_lahir_ayah` on table `pendaftaran` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pekerjaan_ayah` on table `pendaftaran` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tahun_lahir_ibu` on table `pendaftaran` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pekerjaan_ibu` on table `pendaftaran` required. This step will fail if there are existing NULL values in that column.
  - Made the column `npsn_asal_sekolah` on table `pendaftaran` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nomor_pendaftaran` on table `pendaftaran` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "pendaftaran" DROP COLUMN "no_hp_ortu",
ALTER COLUMN "no_hp_murid" SET NOT NULL,
ALTER COLUMN "tahun_lahir_ayah" SET NOT NULL,
ALTER COLUMN "pekerjaan_ayah" SET NOT NULL,
ALTER COLUMN "tahun_lahir_ibu" SET NOT NULL,
ALTER COLUMN "pekerjaan_ibu" SET NOT NULL,
ALTER COLUMN "npsn_asal_sekolah" SET NOT NULL,
ALTER COLUMN "nomor_pendaftaran" SET NOT NULL;
