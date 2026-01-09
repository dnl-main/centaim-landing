import "./home.css";

import Hero from "./hero/Hero";
import Features from "./features/Features";
import Benefits from "./benefits/Benefits";
import About from "./about/About";
import Contact from "./contact/Contact";

const Home = () => {
  return (
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
  );
};

export default Home;