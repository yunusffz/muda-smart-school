import { Navbar } from "@/src/components/navbar";

export default function KontakLayout({
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
