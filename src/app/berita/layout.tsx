import { Navbar } from "@/src/components/navbar";

export default function BeritaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
