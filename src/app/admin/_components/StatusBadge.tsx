import { cn } from "@/src/lib/utils";

interface StatusBadgeProps {
  isActive: boolean;
  activeText?: string;
  inactiveText?: string;
}

export function StatusBadge({
  isActive,
  activeText = "Aktif",
  inactiveText = "Nonaktif",
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
        isActive
          ? "bg-green-100 text-green-700"
          : "bg-gray-100 text-gray-600"
      )}
    >
      {isActive ? activeText : inactiveText}
    </span>
  );
}
