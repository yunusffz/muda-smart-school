import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/src/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muda Smart School",
  description: "Sekolah pintar untuk masa depan cerah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
