import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";
import { registrasiSchema } from "@/src/app/registrasi/_components/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate with Zod
    const validatedData = registrasiSchema.parse(body);

    // Create record in database
    const pendaftaran = await prisma.pendaftaran.create({
      data: {
        namaLengkap: validatedData.namaLengkap,
        jenisKelamin: validatedData.jenisKelamin,
        programKeahlian: validatedData.programKeahlian,
        nisn: validatedData.nisn,
        nik: validatedData.nik,
        nomorKk: validatedData.nomorKk,
        tempatLahir: validatedData.tempatLahir,
        tanggalLahir: new Date(validatedData.tanggalLahir),
        noHpMurid: validatedData.noHpMurid || null,
        noHpOrtu: validatedData.noHpOrtu,
        alamatJalan: validatedData.alamatJalan,
        rt: validatedData.rt,
        rw: validatedData.rw,
        kelurahanDesa: validatedData.kelurahanDesa,
        kecamatan: validatedData.kecamatan,
        kotaKabupaten: validatedData.kotaKabupaten,
        provinsi: validatedData.provinsi,
        namaAyah: validatedData.namaAyah,
        tahunLahirAyah: validatedData.tahunLahirAyah
          ? parseInt(validatedData.tahunLahirAyah)
          : null,
        pendidikanAyah: validatedData.pendidikanAyah,
        pekerjaanAyah: validatedData.pekerjaanAyah || null,
        namaIbu: validatedData.namaIbu,
        tahunLahirIbu: validatedData.tahunLahirIbu
          ? parseInt(validatedData.tahunLahirIbu)
          : null,
        pendidikanIbu: validatedData.pendidikanIbu,
        pekerjaanIbu: validatedData.pekerjaanIbu || null,
        namaAsalSekolah: validatedData.namaAsalSekolah,
        npsnAsalSekolah: validatedData.npsnAsalSekolah || null,
        alamatAsalSekolah: validatedData.alamatAsalSekolah,
        tahun_lulus: parseInt(validatedData.tahunLulus),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Pendaftaran berhasil disimpan",
        data: { id: pendaftaran.id },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Registration error:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          message: "Data tidak valid",
          errors: error,
        },
        { status: 400 },
      );
    }

    // Handle Prisma unique constraint errors
    if (
      error instanceof Error &&
      error.message.includes("Unique constraint failed")
    ) {
      let field = "Data";
      if (error.message.includes("nisn")) field = "NISN";
      else if (error.message.includes("nik")) field = "NIK";

      return NextResponse.json(
        {
          success: false,
          message: `${field} sudah terdaftar`,
        },
        { status: 409 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan server",
      },
      { status: 500 },
    );
  }
}
