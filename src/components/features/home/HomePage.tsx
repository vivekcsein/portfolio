import About from "./sections/About";
import CtaSection from "./sections/CtaSection";
import Hero from "./sections/Hero";
import Journey from "./sections/Journey";
import Metrics from "./sections/Metrics";
import Projects from "./sections/Projects";
import Showcase from "./sections/Showcase";
import TechStack from "./sections/TechStack";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Metrics />
      <Journey />
      <Showcase />
      <CtaSection />
    </div>
  );
};

export default HomePage;
