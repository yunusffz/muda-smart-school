import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { ContactsTable } from "./_components/ContactsTable";
import { getContacts } from "@/src/features/cms/services/contacts";

export default async function ContactsPage() {
  const contacts = await getContacts();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Kontak"
        description="Kelola kontak sekolah"
        action={
          <Button asChild>
            <Link href="/admin/cms/contacts/create">
              <Plus className="mr-2 h-4 w-4" />
              Tambah Kontak
            </Link>
          </Button>
        }
      />
      <ContactsTable data={contacts} />

    </div>
  );
}
