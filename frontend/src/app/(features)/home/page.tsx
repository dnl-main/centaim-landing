import "./home.css";

import Hero from "./hero/Hero";
import Features from "./features/Features";
import Benefits from "./benefits/Benefits";
import About from "./about/About";
import Contact from "./contact/Contact";

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

const Home = () => {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      <main className="home">
        <section id="hero">
          <Hero />
        </section>

        <section id="features" aria-labelledby="features-title">
          <Features />
        </section>

        <section id="benefits" aria-labelledby="benefits-title">
          <Benefits />
        </section>

        <section id="about" aria-labelledby="about-title">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Home;