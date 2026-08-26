import type { Metadata } from "next";
import TechStack from "@/components/features/home/sections/TechStack";
import PageHero from "@/components/layouts/PageHero";

export const metadata: Metadata = {
  title: "Tech Stack",
  description: "Technologies and tools I work with day to day.",
};

const TechStackPage = () => {
  return (
    <PageHero
      badge="Tech Stack"
      title="Technologies I Work With"
      description="The stack I reach for most — and the tools I actually keep using after the project ships."
    >
      <TechStack />
    </PageHero>
  );
};

export default TechStackPage;
