import { Navbar } from "@/src/components/navbar";

export default function PendaftaranLayout({
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
