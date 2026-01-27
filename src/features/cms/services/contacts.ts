import { prisma } from "@/src/lib/prisma";
import type { Contact, ContactType } from "@prisma/client";

export type { Contact };

export async function getContacts() {
    return prisma.contact.findMany({
        orderBy: { order: "asc" },
    });
}

export async function getActiveContacts() {
    return prisma.contact.findMany({
        where: { isActive: true },
        orderBy: { order: "asc" },
    });
}

export async function getContactById(id: string) {
    return prisma.contact.findUnique({
        where: { id },
    });
}

export interface CreateContactInput {
    name: string;
    value: string;
    description?: string | undefined;
    type: ContactType;
    order?: number;
    isActive?: boolean;
}

export async function createContact(data: CreateContactInput) {
    return prisma.contact.create({
        data,
    });
}

export interface UpdateContactInput {
    name?: string;
    value?: string;
    description?: string | null;
    type?: ContactType;
    order?: number;
    isActive?: boolean;
}

export async function updateContact(id: string, data: UpdateContactInput) {
    return prisma.contact.update({
        where: { id },
        data,
    });
}

export async function deleteContact(id: string) {
    return prisma.contact.delete({ 
        where: { id } 
    });
}

export async function toggleContactStatus(id: string, isActive: boolean) {
    return prisma.contact.update({
        where: { id },
        data: { isActive },
    });
}
