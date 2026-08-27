"use client";

import dynamic from "next/dynamic";
import SocialPanel from "@/components/layouts/SocialPanel";
import { Link } from "@/components/ui";
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
            <span className="bg-linear-to-r from-primary to-primary bg-clip-text text-transparent">
              {hero.highlights[0]}
            </span>{" "}
            {hero.heading[2]}{" "}
            <span className="bg-linear-to-r from-primary to-primary bg-clip-text text-transparent">
              {hero.highlights[1]}
            </span>
          </h1>

          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            {hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href={hero.primaryCta.href} variant={"button"}>
              {hero.primaryCta.label}
              <Icon
                name="rocket"
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link variant={"button-secondary"} href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="text-sm text-muted-foreground">
              Connect with me
            </span>

            <SocialPanel />

            <span className="text-sm text-muted-foreground">{hero.handle}</span>
          </div>
        </div>

        <div ref={sceneRef} className="relative h-95 md:h-115 lg:h-130">
          <HeroScene />
        </div>
      </div>
    </section>
  );
};

export default Hero;
