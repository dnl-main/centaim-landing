import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Explore the Centaim dashboard features designed for rapid business scaling.",
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