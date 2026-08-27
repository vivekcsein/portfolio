"use client";

import Icon from "@/components/ui/icon/Icon";
import StylishIcon from "@/components/ui/icon/StylishIcon";
import Reveal from "@/components/ui/reveal/Reveal";
import homeConfig from "@/packages/configs/home.config";

const Metrics = () => {
  return (
    <section className="px-6">
      <Reveal
        group
        className="mx-auto grid max-w-6xl grid-cols-2 gap-6 rounded-3xl border border-border bg-card/50 px-6 py-8 sm:grid-cols-4"
      >
        {homeConfig.metrics.map((metric) => (
          <div key={metric.label} className="flex items-center gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center">
              <StylishIcon className="shrink-0 size-3" size="sm">
                <Icon name={"box"} className="size-7" />
              </StylishIcon>
            </div>

            <div>
              <p className="text-xl font-bold sm:text-2xl">{metric.value}</p>
              <p className="text-xs text-muted-foreground sm:text-sm">
                {metric.label}
              </p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
};

export default Metrics;
