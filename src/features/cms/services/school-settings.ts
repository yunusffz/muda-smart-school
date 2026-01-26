import { prisma } from "@/src/lib/prisma";
import type { SchoolSetting } from "@prisma/client";

export type { SchoolSetting };

export async function getAllSettings() {
  return prisma.schoolSetting.findMany({
    orderBy: [{ group: "asc" }, { order: "asc" }],
  });
}

export async function getSettingsByGroup(group: string) {
  return prisma.schoolSetting.findMany({
    where: { group },
    orderBy: { order: "asc" },
  });
}

export async function getSettingsByKeys(keys: string[]) {
  return prisma.schoolSetting.findMany({
    where: { key: { in: keys } },
  });
}

export async function getSettingByKey(key: string) {
  return prisma.schoolSetting.findUnique({
    where: { key },
  });
}

export async function getSettingsMap(
  keys: string[],
): Promise<Record<string, string>> {
  const settings = await prisma.schoolSetting.findMany({
    where: { key: { in: keys } },
  });
  const map: Record<string, string> = {};
  for (const setting of settings) {
    map[setting.key] = setting.value;
  }
  return map;
}

export interface UpsertSettingInput {
  key: string;
  value: string;
  type?: string;
  label?: string;
  group?: string;
  order?: number;
}

export async function upsertSetting(data: UpsertSettingInput) {
  return prisma.schoolSetting.upsert({
    where: { key: data.key },
    update: { value: data.value },
    create: {
      key: data.key,
      value: data.value,
      type:
        (data.type as
          | "TEXT"
          | "TEXTAREA"
          | "HTML"
          | "JSON"
          | "IMAGE"
          | "NUMBER"
          | "BOOLEAN") ?? "TEXT",
      label: data.label ?? data.key,
      group: data.group ?? "general",
      order: data.order ?? 0,
    },
  });
}

export async function bulkUpsertSettings(settings: UpsertSettingInput[]) {
  return prisma.$transaction(
    settings.map((setting) =>
      prisma.schoolSetting.upsert({
        where: { key: setting.key },
        update: { value: setting.value },
        create: {
          key: setting.key,
          value: setting.value,
          type:
            (setting.type as
              | "TEXT"
              | "TEXTAREA"
              | "HTML"
              | "JSON"
              | "IMAGE"
              | "NUMBER"
              | "BOOLEAN") ?? "TEXT",
          label: setting.label ?? setting.key,
          group: setting.group ?? "general",
          order: setting.order ?? 0,
        },
      }),
    ),
  );
}
