import type { Metadata } from "next";
import Journey from "@/components/features/home/sections/Journey";
import PageHero from "@/components/layouts/PageHero";

export const metadata: Metadata = {
  title: "Journey",
  description: "The path from first line of code to full stack developer.",
};

const JourneyPage = () => {
  return (
    <PageHero
      badge="Journey"
      title="The Path That Shaped Me"
      description="A quick timeline of how I got here — and where I'm headed next."
    >
      <Journey />
    </PageHero>
  );
};

export default JourneyPage;
