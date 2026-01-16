"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "TENTANG", href: "/" },
    { label: "FASILITAS", href: "/fasilitas" },
    { label: "KONTAK", href: "/kontak" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="Muda Smart School"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="font-semibold text-lg text-primary">
              SMK MUHAMMADIYAH 2 CIBIRU 
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium p-2 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300",
                    isActive
                      ? "text-primary after:w-full"
                      : "text-muted-foreground after:w-0 hover:after:w-full hover:text-primary"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Enquire Now Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white rounded-lg"
            >
              <Link href="/hubungi">Daftar Sekarang</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative text-sm font-medium ",
                      isActive
                        ? "text-primary after:w-full"
                        : "text-muted-foreground after:w-0 hover:after:w-full hover:text-primary"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white w-full "
              >
                <Link href="/hubungi">Daftar Sekarang</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
