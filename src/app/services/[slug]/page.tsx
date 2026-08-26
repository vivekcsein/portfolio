import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/layouts/PageHero";
import Icon from "@/components/ui/icon/Icon";
import servicesConfig, {
  getServiceBySlug,
} from "@/packages/configs/services.config";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return servicesConfig.items.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  return {
    title: service?.title ?? "Service",
    description: service?.description,
  };
}

const ServiceDetailPage = async ({ params }: ServiceDetailPageProps) => {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <PageHero
      badge={service.eyebrow}
      title={service.title}
      description={service.positioning}
      backHref="/services"
      backLabel="Back to Services"
    >
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 pt-4 md:grid-cols-[1.3fr_1fr]">
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Overview</h2>
          <p className="text-muted-foreground">{service.description}</p>

          <h2 className="mt-4 text-lg font-semibold">What's included</h2>
          <ul className="flex flex-col gap-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <Icon
                  name="check"
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card/50 p-6">
          <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {service.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-muted px-3 py-1 text-xs text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href="/contact"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Discuss this project →
          </a>
        </div>
      </div>
    </PageHero>
  );
};

export default ServiceDetailPage;
