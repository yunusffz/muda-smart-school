import { prisma } from "@/src/lib/prisma";
import { createAdminClient } from "@/src/lib/supabase/admin";
import type { User, UserRole, UserStatus } from "@prisma/client";
import type { CreateUserInput, UpdateUserInput } from "../types";

/**
 * Get all users
 */
export async function getUsers(): Promise<User[]> {
  return prisma.user.findMany({
    orderBy: [{ role: "asc" }, { createdAt: "desc" }],
  });
}

/**
 * Get user by ID
 */
export async function getUserById(id: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { id },
  });
}

/**
 * Get user by email
 */
export async function getUserByEmail(email: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { email },
  });
}

/**
 * Create a new user (creates in Supabase Auth and Prisma)
 */
export async function createUser(
  input: CreateUserInput,
  createdById?: string,
): Promise<{ user: User | null; error: string | null }> {
  try {
    const supabaseAdmin = createAdminClient();

    // Check if email already exists
    const existingUser = await getUserByEmail(input.email);
    if (existingUser) {
      return { user: null, error: "Email sudah terdaftar" };
    }

    // Create user in Supabase Auth
    const { data: authData, error: authError } =
      await supabaseAdmin.auth.admin.createUser({
        email: input.email,
        password: input.password,
        email_confirm: true, // Auto-confirm email since admin creates users
      });

    if (authError) {
      return { user: null, error: authError.message };
    }

    if (!authData.user) {
      return { user: null, error: "Failed to create auth user" };
    }

    // Create user in database
    const dbUser = await prisma.user.create({
      data: {
        id: authData.user.id,
        email: input.email,
        name: input.name,
        role: input.role,
        phone: input.phone,
        avatar: input.avatar,
        createdById,
      },
    });

    return { user: dbUser, error: null };
  } catch (err) {
    const message = err instanceof Error ? err.message : "An error occurred";
    return { user: null, error: message };
  }
}

/**
 * Update user
 */
export async function updateUser(
  id: string,
  input: UpdateUserInput,
): Promise<{ user: User | null; error: string | null }> {
  try {
    const user = await prisma.user.update({
      where: { id },
      data: input,
    });

    return { user, error: null };
  } catch (err) {
    const message = err instanceof Error ? err.message : "An error occurred";
    return { user: null, error: message };
  }
}

/**
 * Update user status
 */
export async function updateUserStatus(
  id: string,
  status: UserStatus,
): Promise<{ user: User | null; error: string | null }> {
  return updateUser(id, { status });
}

/**
 * Update user role
 */
export async function updateUserRole(
  id: string,
  role: UserRole,
): Promise<{ user: User | null; error: string | null }> {
  return updateUser(id, { role });
}

/**
 * Delete user (removes from both Supabase Auth and Prisma)
 * Note: This is a hard delete. Consider using updateUserStatus for soft delete.
 */
export async function deleteUser(
  id: string,
): Promise<{ success: boolean; error: string | null }> {
  try {
    const supabaseAdmin = createAdminClient();

    // Delete from Supabase Auth
    const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(id);

    if (authError) {
      return { success: false, error: authError.message };
    }

    // Delete from database
    await prisma.user.delete({
      where: { id },
    });

    return { success: true, error: null };
  } catch (err) {
    const message = err instanceof Error ? err.message : "An error occurred";
    return { success: false, error: message };
  }
}

/**
 * Reset user password
 */
export async function resetUserPassword(
  id: string,
  newPassword: string,
): Promise<{ success: boolean; error: string | null }> {
  try {
    const supabaseAdmin = createAdminClient();

    const { error } = await supabaseAdmin.auth.admin.updateUserById(id, {
      password: newPassword,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, error: null };
  } catch (err) {
    const message = err instanceof Error ? err.message : "An error occurred";
    return { success: false, error: message };
  }
}

/**
 * Get users by role
 */
export async function getUsersByRole(role: UserRole): Promise<User[]> {
  return prisma.user.findMany({
    where: { role },
    orderBy: { createdAt: "desc" },
  });
}

/**
 * Get users count by role
 */
export async function getUsersCountByRole(): Promise<Record<UserRole, number>> {
  const counts = await prisma.user.groupBy({
    by: ["role"],
    _count: true,
  });

  const result: Record<UserRole, number> = {
    SUPER_ADMIN: 0,
    ADMIN: 0,
    TEACHER: 0,
    STUDENT: 0,
  };

  for (const count of counts) {
    result[count.role] = count._count;
  }

  return result;
}
