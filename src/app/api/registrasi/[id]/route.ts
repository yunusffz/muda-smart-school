import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {
  getRegistrationById,
  updateRegistration,
  deleteRegistration,
  updateRegistrationStatus,
  checkDuplicateNISN,
  checkDuplicateNIK,
} from "@/src/features/registration/services";

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET: Get single registration by ID
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const registration = await getRegistrationById(id);
    
    if (!registration) {
      return NextResponse.json(
        { error: "Data pendaftaran tidak ditemukan" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(registration);
  } catch (error) {
    console.error("Error fetching registration:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data pendaftaran" },
      { status: 500 }
    );
  }
}

// PUT: Update registration (full update)
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    // Check if registration exists
    const existing = await getRegistrationById(id);
    if (!existing) {
      return NextResponse.json(
        { error: "Data pendaftaran tidak ditemukan" },
        { status: 404 }
      );
    }
    
    // Check duplicates if NISN/NIK changed
    if (body.nisn && body.nisn !== existing.nisn) {
      const nisnExists = await checkDuplicateNISN(body.nisn, id);
      if (nisnExists) {
        return NextResponse.json(
          { error: "NISN sudah digunakan oleh pendaftar lain" },
          { status: 400 }
        );
      }
    }
    
    if (body.nik && body.nik !== existing.nik) {
      const nikExists = await checkDuplicateNIK(body.nik, id);
      if (nikExists) {
        return NextResponse.json(
          { error: "NIK sudah digunakan oleh pendaftar lain" },
          { status: 400 }
        );
      }
    }
    
    // Update registration
    const updated = await updateRegistration(id, body);
    
    // Revalidate cache
    revalidatePath("/admin/registrations");
    revalidatePath(`/admin/registrations/${id}`);
    
    return NextResponse.json(updated);
  } catch (error: any) {
    console.error("Error updating registration:", error);
    
    if (error.message?.includes("sudah digunakan")) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: "Gagal memperbarui data pendaftaran" },
      { status: 500 }
    );
  }
}

// PATCH: Partial update (status update)
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    // Handle status update
    if (body.status) {
      const registration = await updateRegistrationStatus(
        id,
        body.status
      );
      
      revalidatePath("/admin/registrations");
      revalidatePath(`/admin/registrations/${id}`);
      
      return NextResponse.json(registration);
    }
    
    return NextResponse.json(
      { error: "Tidak ada operasi yang valid" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Error patching registration:", error);
    return NextResponse.json(
      { error: "Gagal memperbarui status pendaftaran" },
      { status: 500 }
    );
  }
}

// DELETE: Delete registration
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    
    // Check if exists
    const existing = await getRegistrationById(id);
    if (!existing) {
      return NextResponse.json(
        { error: "Data pendaftaran tidak ditemukan" },
        { status: 404 }
      );
    }
    
    await deleteRegistration(id);
    
    // Revalidate cache
    revalidatePath("/admin/registrations");
    
    return NextResponse.json({ 
      success: true, 
      message: "Pendaftaran berhasil dihapus" 
    });
  } catch (error) {
    console.error("Error deleting registration:", error);
    return NextResponse.json(
      { error: "Gagal menghapus data pendaftaran" },
      { status: 500 }
    );
  }
}