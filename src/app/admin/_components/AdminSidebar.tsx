"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  FileText,
  Settings,
  Bell,
  Calendar,
  BookOpen,
  Globe,
  Image,
  MessageSquareQuote,
  Newspaper,
  Trophy,
  HelpCircle,
  Building2,
  Phone,
  Layers,
  School,
  Activity,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarRail,
} from "@/src/components/ui/sidebar";

// Menu Utama
const mainMenuItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Pendaftaran",
    url: "/admin/pendaftaran",
    icon: FileText,
  },
];

// CMS - Konten Website
const cmsMenuItems = [
  {
    title: "Hero Slider",
    url: "/admin/cms/hero-slides",
    icon: Layers,
  },
  {
    title: "Program Keahlian",
    url: "/admin/cms/programs",
    icon: School,
  },
  {
    title: "Berita",
    url: "/admin/cms/news",
    icon: Newspaper,
  },
  {
    title: "Testimoni",
    url: "/admin/cms/testimonials",
    icon: MessageSquareQuote,
  },
  {
    title: "Prestasi",
    url: "/admin/cms/achievements",
    icon: Trophy,
  },
  {
    title: "Galeri",
    url: "/admin/cms/gallery",
    icon: Image,
  },
  {
    title: "Fasilitas",
    url: "/admin/cms/facilities",
    icon: Building2,
  },
  {
    title: "Ekstrakurikuler",
    url: "/admin/cms/extracurriculars",
    icon: Activity,
  },
  {
    title: "FAQ",
    url: "/admin/cms/faqs",
    icon: HelpCircle,
  },
  {
    title: "Kontak & Sosmed",
    url: "/admin/cms/contacts",
    icon: Phone,
  },
  {
    title: "Profil Sekolah",
    url: "/admin/cms/school-profile",
    icon: Globe,
  },
];

// Manajemen Sekolah
const managementMenuItems = [
  {
    title: "Siswa",
    url: "/admin/siswa",
    icon: Users,
  },
  {
    title: "Guru",
    url: "/admin/guru",
    icon: GraduationCap,
  },
  {
    title: "Jadwal",
    url: "/admin/jadwal",
    icon: Calendar,
  },
  {
    title: "Mata Pelajaran",
    url: "/admin/mapel",
    icon: BookOpen,
  },
];

// Pengaturan
const settingsMenuItems = [
  {
    title: "Notifikasi",
    url: "/admin/notifikasi",
    icon: Bell,
  },
  {
    title: "Pengaturan",
    url: "/admin/pengaturan",
    icon: Settings,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white font-bold">
            M
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Muda Smart School</span>
            <span className="text-xs text-muted-foreground">Admin Panel</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Menu Utama */}
        <SidebarGroup>
          <SidebarGroupLabel>Menu Utama</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    tooltip={item.title}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* CMS - Konten Website */}
        <SidebarGroup>
          <SidebarGroupLabel>CMS - Website</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {cmsMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      pathname === item.url ||
                      pathname.startsWith(item.url + "/")
                    }
                    tooltip={item.title}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Manajemen Sekolah */}
        <SidebarGroup>
          <SidebarGroupLabel>Manajemen</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      pathname === item.url ||
                      pathname.startsWith(item.url + "/")
                    }
                    tooltip={item.title}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Pengaturan */}
        <SidebarGroup>
          <SidebarGroupLabel>Pengaturan</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      pathname === item.url ||
                      pathname.startsWith(item.url + "/")
                    }
                    tooltip={item.title}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-600 font-medium">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Admin</span>
            <span className="text-xs text-muted-foreground">
              admin@muda.sch.id
            </span>
          </div>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
