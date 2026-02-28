import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  footerVariant?: "home" | "internal";
}

export default function Layout({ children, footerVariant = "internal" }: LayoutProps) {
  return (
    <div className="min-h-screen bg-ritual">
      <Header />
      <main className="pt-20">{children}</main>
      <Footer variant={footerVariant} />
    </div>
  );
}
