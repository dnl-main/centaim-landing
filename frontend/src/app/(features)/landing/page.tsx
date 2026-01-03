import DemoComponent from "./demo/demo";
import HeroComponent from "./hero/hero";
import FeatureComponent from "./feature/feature";
import IndustryComponent from "./industry/industry";
import FooterComponent from "./footer/footer";
export default function LandingPage () {
  return (
    <>
        <HeroComponent/>
        <DemoComponent/>
        <FeatureComponent/>
        <IndustryComponent/>
        <FooterComponent/>
    </>
  );
}