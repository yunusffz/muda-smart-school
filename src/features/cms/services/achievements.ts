import { prisma } from "@/src/lib/prisma";
import type { Achievement, AchievementLevel, MedalType } from "@prisma/client";

export type { Achievement };

export async function getAchievements() {
  return prisma.achievement.findMany({
    orderBy: { order: "asc" },
  });
}

export async function getAchievementById(id: string) {
  return prisma.achievement.findUnique({
    where: { id },
  });
}

export interface CreateAchievementInput {
  title: string;
  event: string;
  level: AchievementLevel;
  medalType?: MedalType | null;
  year: number;
  image?: string;
  order?: number;
  isActive?: boolean;
}

export async function createAchievement(data: CreateAchievementInput) {
  return prisma.achievement.create({
    data,
  });
}

export interface UpdateAchievementInput {
  title?: string;
  event?: string;
  level?: AchievementLevel;
  medalType?: MedalType | null;
  year?: number;
  image?: string;
  order?: number;
  isActive?: boolean;
}

export async function updateAchievement(id: string, data: UpdateAchievementInput) {
  return prisma.achievement.update({
    where: { id },
    data,
  });
}

export async function deleteAchievement(id: string) {
  return prisma.achievement.delete({ where: { id } });
}

export async function toggleAchievementStatus(id: string, isActive: boolean) {
  return prisma.achievement.update({
    where: { id },
    data: { isActive },
  });
}
