import LandingPage from "./(features)/landing/page";

// 1. Page-specific Metadata
// This overrides the 'default' title from layout.tsx specifically for the Home page.
export const metadata = {
  title: "Centaim",
  description: "Scale your business with the most advanced analytics dashboard. Centaim helps you track, manage, and grow your revenue in real-time.",
  alternates: {
    canonical: "https://centaim.com", // Points crawlers to the primary URL
  },
};

export default function Home() {
  return (
    /* 2. Semantic HTML: Wrapping in <main> helps Search Engines and Screen Readers */
    <main>
      <LandingPage />
    </main>
  );
}