import { prisma } from "@/src/lib/prisma";
import type { Gallery, GalleryCategory } from "@prisma/client";

export type { Gallery };

export async function getGallery() {
  return prisma.gallery.findMany({
    orderBy: { order: "asc" },
  });
}

export async function getActiveGallery() {
  return prisma.gallery.findMany({
    where: { isActive: true },
    orderBy: { order: "asc" },
  });
}

export async function getGalleryById(id: string) {
  return prisma.gallery.findUnique({
    where: { id },
  });
}

export interface CreateGalleryInput {
  title: string;
  description?: string | null;
  image: string;
  category: GalleryCategory;
  order?: number;
  isActive?: boolean;
}

export async function createGallery(data: CreateGalleryInput) {
  return prisma.gallery.create({
    data,
  });
}

export interface UpdateGalleryInput {
  title?: string;
  description?: string | null;
  image?: string;
  category?: GalleryCategory;
  order?: number;
  isActive?: boolean;
}

export async function updateGallery(id: string, data: UpdateGalleryInput) {
  return prisma.gallery.update({
    where: { id },
    data,
  });
}

export async function deleteGallery(id: string) {
  return prisma.gallery.delete({ where: { id } });
}

export async function toggleGalleryStatus(id: string, isActive: boolean) {
  return prisma.gallery.update({
    where: { id },
    data: { isActive },
  });
}
