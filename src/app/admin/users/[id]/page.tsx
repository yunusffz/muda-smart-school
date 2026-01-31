import { notFound, redirect } from "next/navigation";
import { PageHeader } from "@/src/app/admin/_components/PageHeader";
import { UserForm } from "../_components/UserForm";
import { getUserById } from "@/src/features/auth/services/users";
import { getCurrentUser } from "@/src/features/auth/services/auth";
import { canManageUsers } from "@/src/features/auth/utils/permissions";

interface EditUserPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditUserPage({ params }: EditUserPageProps) {
  const { id } = await params;
  const currentUser = await getCurrentUser();

  // Only super admin can edit users
  if (!currentUser || !canManageUsers(currentUser.role)) {
    redirect("/admin");
  }

  const user = await getUserById(id);

  if (!user) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Edit User"
        description={`Ubah data untuk ${user.name}`}
      />
      <UserForm user={user} mode="edit" />
    </div>
  );
}
