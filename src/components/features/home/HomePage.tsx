import { Container } from "@/components/ui";
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
    <main className="relative flex flex-col items-center justify-center overflow-hidden">
      <Hero />
      <About />

      <Container
        direction="horizontal"
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <TechStack />
      </Container>
      <Projects />
      <Metrics />
      <Journey />
      <Showcase />
      <CtaSection />
    </main>
  );
};

export default HomePage;
