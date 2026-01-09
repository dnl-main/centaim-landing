import LandingPage from "./(features)/landing/page";

// 1. Page-specific Metadata
export const metadata = {
  title: "Centaim",
  description: "Scale your business with the most advanced analytics dashboard. Centaim helps you track, manage, and grow your revenue in real-time.",
  alternates: {
    canonical: "https://centaim.com",
  },
};

export default function Home() {
  return (
    <main>
      <LandingPage />
    </main>
  );
}