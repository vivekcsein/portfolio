"use client";

import { useMemo, useState } from "react";

import Reveal from "@/components/ui/reveal/Reveal";
import TiltCard from "@/components/ui/tilt-card/TiltCard";
import homeConfig from "@/packages/configs/home.config";

const TechStack = () => {
  const { techStack } = homeConfig;
  const [active, setActive] =
    useState<(typeof techStack.categories)[number]>("All");

  const items = useMemo(
    () =>
      active === "All"
        ? techStack.items
        : techStack.items.filter((item) => item.category === active),
    [active],
  );

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Reveal>
            <span className="text-xs font-medium tracking-wide text-primary uppercase">
              {techStack.eyebrow}
            </span>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              {techStack.heading}
            </h2>
          </Reveal>

          <div className="flex flex-wrap gap-2">
            {techStack.categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  active === category
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <Reveal
          group
          className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
        >
          {items.map((item) => (
            <TiltCard key={item.name} maxTilt={14} glare={false}>
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card/50 p-4 text-center transition-colors hover:border-primary/40">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-semibold text-primary">
                  {item.name.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-xs text-muted-foreground">
                  {item.name}
                </span>
              </div>
            </TiltCard>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default TechStack;
