import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layouts/PageHero";
import Icon from "@/components/ui/icon/Icon";
import TiltCard from "@/components/ui/tilt-card/TiltCard";
import servicesConfig from "@/packages/configs/services.config";

export const metadata: Metadata = {
  title: servicesConfig.title,
  description: servicesConfig.description,
};

const ServicesPage = () => {
  return (
    <PageHero
      badge={servicesConfig.eyebrow}
      title={servicesConfig.title}
      description={servicesConfig.description}
    >
      <div className="content-grid">
        {servicesConfig.items.map((service) => (
          <TiltCard key={service.slug} maxTilt={6}>
            <Link
              href={`/services/${service.slug}`}
              className="content-card group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon name={service.icon} className="size-5" />
              </div>

              <div>
                <p className="text-xs font-medium tracking-wide text-primary uppercase">
                  {service.eyebrow}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{service.title}</h3>
              </div>

              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>

              <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
                Learn more
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          </TiltCard>
        ))}
      </div>
    </PageHero>
  );
};

export default ServicesPage;
