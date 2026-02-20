import { Navbar } from "@/src/components/navbar";
import AIChatWidget from "@/src/components/common/AIChatWidget";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <AIChatWidget />
    </>
  );
}
