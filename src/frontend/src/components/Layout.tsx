import { Footer } from "@/components/Footer";
import { Header } from "./Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col dark bg-background text-foreground">
      <Header />
      {/* Offset for fixed header */}
      <div className="h-[88px]" />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
