import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

// 1. Optimize Fonts (Prevents Layout Shift and improves LCP)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Centaim",
    template: "Centaim | %s",
  },
  description: "Centaim is a technology and business solution company that aims to deliver an efficient system to startup and scaling companies.",
  keywords: [
    "team scheduling software",
    "crew availability monitoring",
    "certification tracking tool",
    "automated meeting reminders",
    "business management dashboard",
    "operational efficiency software",
    "inventory management",
    "Centaim",
    "digital business",
    "web developer",
    "web system",
    "Centaim website",
    "project idea",
    "business idea",
    "sentaim",
    "scentaim",
    "centai",
    "cntaim",
    "centain",
    "centame",
    "sentame",
    "scentame",
    "centanim",
    "what is centaim",
  ],
  metadataBase: new URL("https://centaim.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Centaim | Business and Technology Solutions",
    description: "Centaim is a technology and business solution company that aims to deliver an efficient system to startup and scaling companies.",
    url: "https://centaim.com",
    siteName: "Centaim",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centaim",
    description: "Provides solution to businesses through building a functional and analytical system making the organization productive and efficient.",
  },
  icons: {
    icon: "/icon.png", 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${bricolage.variable} bodyAll`}>
        {children}
      </body>
    </html>
  );
}