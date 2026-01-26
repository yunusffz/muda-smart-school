import { Navbar } from "@/src/components/navbar";

export default function JurusanLayout({
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
