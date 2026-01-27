"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Medal, Trophy } from "lucide-react";
import { StatusBadge } from "@/src/app/admin/_components/StatusBadge";
import { ContactActions } from "./ContactsActions";
import { contactTypes } from "./ContactsSchema";
import type { Contact } from "@/src/features/cms/services/contacts";


const getContactLabel = (contactType: string | null) => {
  if (!contactType) return null;
  return contactTypes.find((m) => m.value === contactType)?.label || contactType;
};

const getContactColor = (contactType: string | null) => {
  switch (contactType) {
    case "WHATSAPP":
      return "text-white bg-green-500";
    case "PHONE":
      return "text-white bg-green-700";
    case "EMAIL":
      return "text-white bg-red-500";
    default:
      return "";
  }
};


export const contactsColumns: ColumnDef<Contact>[] = [
  {
    accessorKey: "order",
    header: "No",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.original.order + 1}</span>
    ),
  },
  {
    accessorKey: "name",
    header: "Nama"
  },
  {
    accessorKey: "value",
    header: "Nomor / Email",
  },
  {
    accessorKey: "type",
    header: "Tipe",
    cell: ({ row }) => {
      const contactType = row.original.type;
      if (!contactType) {
        return <span className="text-muted-foreground">-</span>;
      }
      return (
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${getContactColor(
            contactType
          )}`}
        >
          <Medal className="h-3 w-3" />
          {getContactLabel(contactType)}
        </span>
      );
    },
  },
  {
    accessorKey: "isActive",
    header: "Status",
    cell: ({ row }) => <StatusBadge isActive={row.original.isActive} />,
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => <ContactActions contact={row.original} />,
  },
];
