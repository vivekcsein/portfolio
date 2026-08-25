"use client";

import Icon from "@/components/ui/icon/Icon";
import Reveal from "@/components/ui/reveal/Reveal";
import TiltCard from "@/components/ui/tilt-card/TiltCard";
import homeConfig from "@/packages/configs/home.config";

const Showcase = () => {
  const { showcase } = homeConfig;

  return (
    <section id="showcase" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-4 max-w-xl">
          <span className="text-xs font-medium tracking-wide text-primary uppercase">
            {showcase.eyebrow}
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            {showcase.heading}
          </h2>
          <p className="mt-3 text-muted-foreground">{showcase.description}</p>
        </Reveal>

        <Reveal
          group
          direction="up"
          className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4"
        >
          {showcase.items.map((item) => (
            <TiltCard key={item.title} maxTilt={16}>
              <div className="flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-border bg-gradient-to-br from-primary/15 via-card to-fuchsia-400/10 p-6 text-center">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Icon name={item.icon} className="size-6" />
                </div>
                <p className="text-sm font-medium">{item.title}</p>
              </div>
            </TiltCard>
          ))}
        </Reveal>

        <div className="mt-8 flex justify-center">
          <a
            href={showcase.cta.href}
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]"
          >
            {showcase.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
