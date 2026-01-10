import LandingPage from "./(features)/landing/page";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Centaim",
  description: "Scale your business with the most advanced analytics dashboard. Centaim helps you track, manage, and grow your revenue in real-time.",
  alternates: {
    canonical: "https://centaim.com",
  },
  openGraph: {
    title: "Work is efficient with a clear system | Centaim",
    description: "Scale your business with the most advanced analytics dashboard. Centaim helps you track, manage, and grow your revenue in real-time.",
    url: "https://centaim.com/",
    siteName: "Centaim",
    images: [
      {
        url: "/_assets/logo/centaimLogo.png",
        width: 1200,
        height: 630,
        alt: "Centaim Thumbnail"
      } 
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work is efficient with a clear system | Centaim",
    description: "Scale your business with the most advanced analytics dashboard. Centaim helps you track, manage, and grow your revenue in real-time.",
    images: ["/_assets/logo/centaimLogo.png"],
  },
};

export default function Home() {
  return (
    <main>
      <LandingPage />
    </main>
  );
}