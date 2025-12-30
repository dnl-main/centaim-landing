import type { Metadata } from "next";
import "../../../app/globals.css";

export const metadata: Metadata = {
  title: "Centaim | Home",
  description: "Modern dashboard for business growth",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="home-layout">
      {children}
    </div>
  );
}