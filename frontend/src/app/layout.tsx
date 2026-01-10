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
  description: "Either Startup or Scaling Company, System is the most crucial for the most company. This gives the efficieny that boosts the company productivity for both users and clients",
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
    title: "Centaim | Team Scheduling & Business Management System",
    description: "Modern dashboard for business growth and analytics.",
    url: "https://centaim.com",
    siteName: "Centaim",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centaim",
    description: "Modern dashboard for business growth",
  },
  icons: {
    icon: "/favicon.ico", 
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