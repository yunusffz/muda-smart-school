import type { User, UserRole, UserStatus } from "@prisma/client";

// Re-export Prisma types
export type { User, UserRole, UserStatus };

// Auth types
export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  status: UserStatus;
  avatar: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface CreateUserInput {
  email: string;
  password: string;
  name: string;
  role: UserRole;
  phone?: string;
  avatar?: string;
}

export interface UpdateUserInput {
  name?: string;
  role?: UserRole;
  status?: UserStatus;
  phone?: string;
  avatar?: string;
}

export interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  status: UserStatus;
  avatar: string | null;
}

// Role hierarchy for permission checks
export const ROLE_HIERARCHY: Record<UserRole, number> = {
  SUPER_ADMIN: 4,
  ADMIN: 3,
  TEACHER: 2,
  STUDENT: 1,
};

// Human-readable role labels
export const ROLE_LABELS: Record<UserRole, string> = {
  SUPER_ADMIN: "Super Admin",
  ADMIN: "Admin",
  TEACHER: "Guru",
  STUDENT: "Siswa",
};

// Status labels
export const STATUS_LABELS: Record<UserStatus, string> = {
  ACTIVE: "Aktif",
  INACTIVE: "Tidak Aktif",
  SUSPENDED: "Dibekukan",
};
