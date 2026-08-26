import type { Metadata } from "next";
import ContactForm from "@/components/features/contact/ContactForm";
import PageHero from "@/components/layouts/PageHero";
import Icon from "@/components/ui/icon/Icon";
import appConfig from "@/packages/configs/app.config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — open to freelance projects and full-time roles.",
};

const contactMethods = [
  {
    label: "Email",
    value: appConfig.author.email,
    href: `mailto:${appConfig.author.email}`,
    icon: "mail",
  },
  {
    label: "GitHub",
    value: `@${appConfig.social.github.split("/").pop()}`,
    href: appConfig.social.github,
    icon: "github",
  },
  {
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: appConfig.social.linkedin,
    icon: "linkedin",
  },
  {
    label: "Twitter",
    value: `@${appConfig.social.twitter.split("/").pop()}`,
    href: appConfig.social.twitter,
    icon: "twitter",
  },
];

const ContactPage = () => {
  return (
    <PageHero
      badge="Contact"
      title="Let's Build Something"
      description="Open to freelance projects, full-time roles, and interesting collaborations. The fastest way to reach me is email."
    >
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 pt-4 md:grid-cols-2">
        <ContactForm />

        <div className="flex flex-col gap-3">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card/50 p-4 transition-colors hover:border-primary/40"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon name={method.icon} className="size-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{method.label}</p>
                <p className="truncate text-sm font-medium">{method.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </PageHero>
  );
};

export default ContactPage;
