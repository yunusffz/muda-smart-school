import { Navbar } from "@/src/components/navbar";

export default function GaleriLayout({
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
