import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {
  getContacts,
  createContact,
} from "@/src/features/cms/services/contacts";
import { contactSchema } from "@/src/app/admin/cms/contacts/_components/ContactsSchema";

export async function GET() {
  try {
    const contacts = await getContacts(); 
    return NextResponse.json(contacts); 
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data kontak" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);
    const contact = await createContact(validated);
    
    revalidatePath("/admin/cms/contacts");
    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    console.error("Error creating contact:", error); // [PERUBAHAN 6]
    
    if (error instanceof Error && "errors" in error) { // [PERUBAHAN 7]
      return NextResponse.json(
        { 
          error: "Data tidak valid", 
          details: error.errors // [PERUBAHAN 7]
        },
        { status: 400 },
      );
    }
    
    return NextResponse.json(
      { error: "Gagal membuat kontak" }, // [PERUBAHAN 8]
      { status: 500 },
    );
  }
}