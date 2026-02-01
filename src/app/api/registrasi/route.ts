import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {
  getAllRegistrations,
  createRegistration,
  convertZodToPrisma,
  checkDuplicateNISN,
  checkDuplicateNIK,
} from "@/src/features/registration/services";
import { registrasiSchema } from "@/src/features/registration/services/registration.schema";

// GET: Get all registrations
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get("status");
    
    let registrations;
    
    if (status) {
      // Filter by status
      const { getRegistrationsByStatus } = await import("@/src/features/registration/services");
      registrations = await getRegistrationsByStatus(status as any);
    } else {
      // Get all
      registrations = await getAllRegistrations();
    }
    
    return NextResponse.json(registrations);
  } catch (error) {
    
    return NextResponse.json(
      { error: "Gagal mengambil data pendaftaran" },
      { status: 500 }
    );
  }
}

// POST: Create new registration
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // 1. Validate with Zod
    const validatedData = registrasiSchema.parse(body);
    
    // 2. Check duplicates
    const [nisnExists, nikExists] = await Promise.all([
      checkDuplicateNISN(validatedData.nisn),
      checkDuplicateNIK(validatedData.nik),
    ]);
    
    if (nisnExists) {
      return NextResponse.json(
        { error: "NISN sudah terdaftar" },
        { status: 400 }
      );
    }
    
    if (nikExists) {
      return NextResponse.json(
        { error: "NIK sudah terdaftar" },
        { status: 400 }
      );
    }
    
    // 3. Convert Zod to Prisma format
    const prismaData = convertZodToPrisma(validatedData);
    
    // 4. Create in database
    const registration = await createRegistration(prismaData);
    
    // 5. Revalidate cache
    revalidatePath("/admin/registrations");
    revalidatePath("/api/registrations");
    
    return NextResponse.json(registration, { status: 201 });
  } catch (error: any) {
    
    // Zod validation error
    if (error.name === "ZodError") {
      return NextResponse.json(
        { 
          error: "Data tidak valid", 
          details: error.errors 
        },
        { status: 400 }
      );
    }
    
    // Custom error dari service
    if (error.message?.includes("sudah terdaftar")) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: "Gagal membuat pendaftaran" },
      { status: 500 }
    );
  }
}