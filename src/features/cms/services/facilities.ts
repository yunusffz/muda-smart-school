import { prisma } from "@/src/lib/prisma";
import type { Facility } from "@prisma/client";

export type { Facility };

export async function getFacilities() {
  return prisma.facility.findMany({
    orderBy: { order: "asc" },
  });
}

export async function getActiveFacilities() {
  return prisma.facility.findMany({
    where: { isActive: true },
    orderBy: { order: "asc" },
  });
}

export async function getFacilityById(id: string) {
  return prisma.facility.findUnique({
    where: { id },
  });
}

export interface CreateFacilityInput {
  name: string;
  description?: string | null;
  icon?: string | null;
  images?: string[];
  order?: number;
  isActive?: boolean;
}

export async function createFacility(data: CreateFacilityInput) {
  return prisma.facility.create({
    data,
  });
}

export interface UpdateFacilityInput {
  name?: string;
  description?: string | null;
  icon?: string | null;
  images?: string[];
  order?: number;
  isActive?: boolean;
}

export async function updateFacility(id: string, data: UpdateFacilityInput) {
  return prisma.facility.update({
    where: { id },
    data,
  });
}

export async function deleteFacility(id: string) {
  return prisma.facility.delete({ where: { id } });
}

export async function toggleFacilityStatus(id: string, isActive: boolean) {
  return prisma.facility.update({
    where: { id },
    data: { isActive },
  });
}
