import { prisma } from "@/src/lib/prisma";
import type { Extracurricular, EkskulCategory } from "@prisma/client";

export type { Extracurricular, EkskulCategory };

export async function getExtracurriculars() {
  return prisma.extracurricular.findMany({
    orderBy: { order: "asc" },
  });
}

export async function getActiveExtracurriculars() {
  return prisma.extracurricular.findMany({
    where: { isActive: true },
    orderBy: { order: "asc" },
  });
}

export async function getExtracurricularById(id: string) {
  return prisma.extracurricular.findUnique({
    where: { id },
  });
}

export interface CreateExtracurricularInput {
  name: string;
  description?: string | null;
  category: EkskulCategory;
  icon?: string | null;
  image?: string | null;
  order?: number;
  isActive?: boolean;
}

export async function createExtracurricular(data: CreateExtracurricularInput) {
  return prisma.extracurricular.create({
    data,
  });
}

export interface UpdateExtracurricularInput {
  name?: string;
  description?: string | null;
  category?: EkskulCategory;
  icon?: string | null;
  image?: string | null;
  order?: number;
  isActive?: boolean;
}

export async function updateExtracurricular(
  id: string,
  data: UpdateExtracurricularInput,
) {
  return prisma.extracurricular.update({
    where: { id },
    data,
  });
}

export async function deleteExtracurricular(id: string) {
  return prisma.extracurricular.delete({ where: { id } });
}

export async function toggleExtracurricularStatus(
  id: string,
  isActive: boolean,
) {
  return prisma.extracurricular.update({
    where: { id },
    data: { isActive },
  });
}
