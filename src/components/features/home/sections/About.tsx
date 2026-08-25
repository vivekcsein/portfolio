"use client";

import Icon from "@/components/ui/icon/Icon";
import Reveal from "@/components/ui/reveal/Reveal";
import TiltCard from "@/components/ui/tilt-card/TiltCard";
import homeConfig from "@/packages/configs/home.config";

const About = () => {
  const { about } = homeConfig;

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal direction="left" className="flex justify-center">
          <TiltCard maxTilt={8} className="w-full max-w-sm">
            <div className="relative flex aspect-square items-center justify-center rounded-3xl border border-border bg-gradient-to-br from-primary/15 via-transparent to-fuchsia-400/10 p-8">
              <div className="absolute top-6 left-6 flex size-10 items-center justify-center rounded-xl border border-border bg-card">
                <Icon name="code" className="size-4 text-primary" />
              </div>

              <div className="flex size-40 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-5xl">
                🧑‍💻
              </div>
            </div>
          </TiltCard>
        </Reveal>

        <Reveal direction="right" group className="flex flex-col gap-6">
          <span className="text-xs font-medium tracking-wide text-primary uppercase">
            {about.eyebrow}
          </span>

          <h2 className="text-3xl leading-tight font-bold text-balance sm:text-4xl">
            {about.heading[0]}{" "}
            <span className="text-primary">{about.heading[1]}</span>
          </h2>

          <p className="text-muted-foreground">{about.description}</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card/50 p-4"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon name={stat.icon} className="size-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="truncate text-sm font-medium">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={about.cta.href}
            className="w-fit rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            {about.cta.label} →
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
