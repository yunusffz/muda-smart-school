import { prisma } from "@/src/lib/prisma";

export async function getNews() {
  return prisma.news.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getPublishedNews(limit?: number) {
  return prisma.news.findMany({
    where: { isPublished: true },
    orderBy: { publishedAt: "desc" },
    ...(limit ? { take: limit } : {}),
  });
}

export async function getFeaturedNews() {
  return prisma.news.findMany({
    where: { isPublished: true, isFeatured: true },
    orderBy: { publishedAt: "desc" },
  });
}

export async function getNewsBySlug(slug: string) {
  return prisma.news.findUnique({
    where: { slug },
  });
}

export async function getNewsById(id: string) {
  return prisma.news.findUnique({
    where: { id },
  });
}

export interface CreateNewsInput {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  image?: string;
  category: string;
  isFeatured: boolean;
  isPublished: boolean;
}

export async function createNews(data: CreateNewsInput) {
  return prisma.news.create({
    data: {
      ...data,
      publishedAt: data.isPublished ? new Date() : null,
    },
  });
}

export interface UpdateNewsInput {
  title?: string;
  slug?: string;
  content?: string;
  excerpt?: string;
  image?: string;
  category?: string;
  isFeatured?: boolean;
  isPublished?: boolean;
}

export async function updateNews(id: string, data: UpdateNewsInput) {
  const existing = await prisma.news.findUnique({ where: { id } });

  const publishedAt =
    data.isPublished && !existing?.isPublished
      ? new Date()
      : data.isPublished === false
        ? null
        : undefined;

  return prisma.news.update({
    where: { id },
    data: {
      ...data,
      ...(publishedAt !== undefined ? { publishedAt } : {}),
    },
  });
}

export async function deleteNews(id: string) {
  return prisma.news.delete({ where: { id } });
}

export async function toggleNewsPublished(id: string, isPublished: boolean) {
  return prisma.news.update({
    where: { id },
    data: {
      isPublished,
      publishedAt: isPublished ? new Date() : null,
    },
  });
}
