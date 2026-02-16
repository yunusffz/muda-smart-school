"use client";

import { DataTable } from "@/src/app/admin/_components/DataTable";
import { contactsColumns } from "./ContactsColumns";
import type { Contact } from "@/src/features/cms/services/contacts";

interface ContactsTableProps {
  data: Contact[];
}

export function ContactsTable({ data }: ContactsTableProps) {
  return (
    <DataTable
      columns={contactsColumns}
      data={data}
      searchPlaceholder="Cari kontak..."
      emptyMessage="Belum ada data kontak."
    />
  );
}
