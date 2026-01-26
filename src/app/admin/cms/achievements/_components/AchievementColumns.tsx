"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Medal, Trophy } from "lucide-react";
import { StatusBadge } from "@/src/app/admin/_components/StatusBadge";
import { AchievementActions } from "./AchievementActions";
import { achievementLevels, medalTypes } from "./AchievementSchema";
import type { Achievement } from "@/src/features/cms/services/achievements";

const getLevelLabel = (level: string) => {
  return achievementLevels.find((l) => l.value === level)?.label || level;
};

const getMedalLabel = (medalType: string | null) => {
  if (!medalType) return null;
  return medalTypes.find((m) => m.value === medalType)?.label || medalType;
};

const getMedalColor = (medalType: string | null) => {
  switch (medalType) {
    case "GOLD":
      return "text-yellow-600 bg-yellow-100";
    case "SILVER":
      return "text-gray-600 bg-gray-100";
    case "BRONZE":
      return "text-orange-700 bg-orange-100";
    default:
      return "";
  }
};

const getLevelColor = (level: string) => {
  switch (level) {
    case "INTERNASIONAL":
      return "bg-primary-100 text-primary-700";
    case "NASIONAL":
      return "bg-green-100 text-green-700";
    case "PROVINSI":
      return "bg-blue-100 text-blue-700";
    case "KOTA":
      return "bg-purple-100 text-purple-700";
    case "KECAMATAN":
      return "bg-orange-100 text-orange-700";
    case "SEKOLAH":
      return "bg-gray-100 text-gray-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export const achievementColumns: ColumnDef<Achievement>[] = [
  {
    accessorKey: "order",
    header: "No",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.original.order + 1}</span>
    ),
  },
  {
    accessorKey: "title",
    header: "Prestasi",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Trophy className="h-4 w-4 text-yellow-500" />
        <span className="font-medium">{row.original.title}</span>
      </div>
    ),
  },
  {
    accessorKey: "event",
    header: "Event/Kompetisi",
  },
  {
    accessorKey: "level",
    header: "Tingkat",
    cell: ({ row }) => (
      <span
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getLevelColor(
          row.original.level
        )}`}
      >
        {getLevelLabel(row.original.level)}
      </span>
    ),
  },
  {
    accessorKey: "medalType",
    header: "Medali",
    cell: ({ row }) => {
      const medalType = row.original.medalType;
      if (!medalType) {
        return <span className="text-muted-foreground">-</span>;
      }
      return (
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${getMedalColor(
            medalType
          )}`}
        >
          <Medal className="h-3 w-3" />
          {getMedalLabel(medalType)}
        </span>
      );
    },
  },
  {
    accessorKey: "year",
    header: "Tahun",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.original.year}</span>
    ),
  },
  {
    accessorKey: "isActive",
    header: "Status",
    cell: ({ row }) => <StatusBadge isActive={row.original.isActive} />,
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => <AchievementActions achievement={row.original} />,
  },
];
