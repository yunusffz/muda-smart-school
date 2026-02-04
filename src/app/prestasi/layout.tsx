import { Navbar } from "@/src/components/navbar";

export default function PrestasiLayout({
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
