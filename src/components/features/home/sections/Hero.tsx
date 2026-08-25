"use client";

import dynamic from "next/dynamic";

import Icon from "@/components/ui/icon/Icon";
import homeConfig from "@/packages/configs/home.config";
import { useScrollReveal } from "@/packages/hooks/useScrollReveal";

const HeroScene = dynamic(() => import("../HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="hero-scene hero-scene-fallback" aria-hidden="true" />
  ),
});

const Hero = () => {
  const { hero } = homeConfig;

  const textRef = useScrollReveal<HTMLDivElement>({
    direction: "up",
    distance: 28,
    duration: 0.8,
    stagger: 0.12,
    start: "top 95%",
  });

  const sceneRef = useScrollReveal<HTMLDivElement>({
    direction: "right",
    distance: 60,
    duration: 1,
    delay: 0.2,
    start: "top 95%",
  });

  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_55%)]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div ref={textRef} data-reveal-group className="flex flex-col gap-6">
          <span className="w-fit rounded-full border border-border bg-muted/60 px-4 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {hero.badge}
          </span>

          <h1 className="text-4xl leading-tight font-bold text-balance sm:text-5xl lg:text-6xl">
            {hero.heading[0]} {hero.heading[1]}{" "}
            <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
              {hero.highlights[0]}
            </span>{" "}
            {hero.heading[2]}{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 to-primary bg-clip-text text-transparent">
              {hero.highlights[1]}
            </span>
          </h1>

          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            {hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]"
            >
              {hero.primaryCta.label}
              <Icon
                name="rocket"
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-muted"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Connect with me
            </span>

            <div className="flex items-center gap-3">
              {hero.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon name={item.icon} className="size-4" />
                </a>
              ))}
            </div>

            <span className="text-sm text-muted-foreground">{hero.handle}</span>
          </div>
        </div>

        <div
          ref={sceneRef}
          className="relative h-[380px] md:h-[460px] lg:h-[520px]"
        >
          <HeroScene />
        </div>
      </div>
    </section>
  );
};

export default Hero;
