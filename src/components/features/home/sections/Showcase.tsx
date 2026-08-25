"use client";

import ModelSlot from "@/components/ui/models/ModelSlot";
import Reveal from "@/components/ui/reveal/Reveal";
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
            <div key={item.title} className="flex flex-col gap-3">
              <ModelSlot
                reservedFor={item.title}
                label={item.title}
                className="aspect-square"
              />
              <p className="text-center text-sm font-medium">{item.title}</p>
            </div>
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
