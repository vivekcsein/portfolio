import type { Metadata } from "next";
import About from "@/components/features/home/sections/About";
import Journey from "@/components/features/home/sections/Journey";
import PageHero from "@/components/layouts/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full Stack Developer building clean, scalable, high-performance web applications.",
};

const AboutPage = () => {
  return (
    <PageHero
      badge="About"
      title="About Me"
      description="The short version: I build digital products end-to-end — from idea to production — and I like doing it well more than I like doing it fast."
    >
      <About />
      <Journey />
    </PageHero>
  );
};

export default AboutPage;
