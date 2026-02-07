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

// src/features/cms/services/gallery.ts (tambahkan fungsi ini)

export async function getGalleryByCategory(category: GalleryCategory) {
  return prisma.gallery.findMany({
    where: {
      category,
      isActive: true,
    },
    orderBy: { order: "asc" },
  });
}

export async function getGalleryByCategories(categories: GalleryCategory[]) {
  return prisma.gallery.findMany({
    where: {
      category: { in: categories },
      isActive: true,
    },
    orderBy: { order: "asc" },
  });
}

export async function getGroupedGallery() {
  const galleries = await getActiveGallery();

  return galleries.reduce(
    (acc, gallery) => {
      if (!acc[gallery.category]) {
        acc[gallery.category] = [];
      }
      acc[gallery.category].push(gallery);
      return acc;
    },
    {} as Record<GalleryCategory, Gallery[]>,
  );
}
