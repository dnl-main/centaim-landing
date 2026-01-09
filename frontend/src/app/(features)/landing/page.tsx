import DemoComponent from "./demo/demo";
import HeroComponent from "./hero/hero";
import FeatureComponent from "./feature/feature";
import IndustryComponent from "./industry/industry";
import FooterComponent from "./footer/footer";

export default function LandingPage() {
  return (
    <>
      <header>
        <HeroComponent />
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