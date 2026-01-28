import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { ContactsForm } from "../_components/ContactsForm";

export default function CreateContactPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Tambah Kontak"
        description="Buat kontak baru"
        action={
          <Button variant="outline" asChild>
            <Link href="/admin/cms/contacts">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali
            </Link>
          </Button>
        }
      />
      <ContactsForm />
    </div>
  );
}
