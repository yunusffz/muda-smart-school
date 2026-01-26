import { prisma } from "@/src/lib/prisma";
import type { HeroSlide } from "@prisma/client";

export type { HeroSlide };

export async function getHeroSlides() {
  return prisma.heroSlide.findMany({
    orderBy: { order: "asc" },
  });
}

export async function getActiveHeroSlides() {
  return prisma.heroSlide.findMany({
    where: { isActive: true },
    orderBy: { order: "asc" },
  });
}

export async function getHeroSlideById(id: string) {
  return prisma.heroSlide.findUnique({
    where: { id },
  });
}

export interface CreateHeroSlideInput {
  title: string;
  subtitle?: string | null;
  image: string;
  ctaText?: string | null;
  ctaLink?: string | null;
  order?: number;
  isActive?: boolean;
}

export async function createHeroSlide(data: CreateHeroSlideInput) {
  return prisma.heroSlide.create({
    data,
  });
}

export interface UpdateHeroSlideInput {
  title?: string;
  subtitle?: string | null;
  image?: string;
  ctaText?: string | null;
  ctaLink?: string | null;
  order?: number;
  isActive?: boolean;
}

export async function updateHeroSlide(id: string, data: UpdateHeroSlideInput) {
  return prisma.heroSlide.update({
    where: { id },
    data,
  });
}

export async function deleteHeroSlide(id: string) {
  return prisma.heroSlide.delete({ where: { id } });
}

export async function toggleHeroSlideStatus(id: string, isActive: boolean) {
  return prisma.heroSlide.update({
    where: { id },
    data: { isActive },
  });
}
