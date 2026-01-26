import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/src/components/ui/sidebar";
import { AdminSidebar } from "./_components/AdminSidebar";
import { Separator } from "@/src/components/ui/separator";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <span className="text-sm font-medium">Admin Panel</span>
        </header>
        <main className="flex-1 p-4">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
