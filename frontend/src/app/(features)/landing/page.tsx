import DemoComponent from "./demo/demo";
import HeroComponent from "./hero/hero";
import FeatureComponent from "./feature/feature";
import IndustryComponent from "./industry/industry";
import FooterComponent from "./footer/footer";
import type { Metadata } from "next";

const jsonLD = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Centaim",
    "description": "Centaim helps businesses measure success from clicks to conversions with performance tracking, conversion analytics, and growth insights.",
    "url": "https://centaim.com/",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "featureList": [
      "Website performance tracking",
      "Conversion analytics",
      "Growth journey insights",
      "One-click meeting booking",
      "Company metrics",
      "Inventory management",
      "Appointment scheduler",
      "Productivity dashboard"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "reviewCount": "87"
    }
  };


export default function LandingPage() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
    />
      <header>
        <HeroComponent aria-label="Page Header"/>
      </header>

      <section id="demo" aria-label="Product Demo">
        <DemoComponent />
      </section>

      <section id="features" aria-label="Core Features">
        <FeatureComponent />
      </section>

      <section id="industries" aria-label="Industries we serve">
        <IndustryComponent />
      </section>

      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}