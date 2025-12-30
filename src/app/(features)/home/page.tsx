import "./home.css";

import Hero from "./hero/Hero";
import Features from "./features/Features";
import Benefits from "./benefits/Benefits";
import About from "./about/About";
import Contact from "./contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Benefits />
      <About />
      <Contact />
    </div>
  );
};

export default Home;