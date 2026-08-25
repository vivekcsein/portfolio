import type { NavSection, NavTab } from "@/types/navigation";
import appConfig from "./app.config";

export const mainNav: NavTab[] = [
  {
    id: "home",
    title: "Home",
    href: appConfig.routes.home,
  },

  {
    id: "about",
    title: "About",
    href: appConfig.routes.about,
  },

  {
    id: "services",
    title: "Services",
    dropdown: [
      {
        category: "Development",
        items: [
          {
            label: "Web Development",
            href: appConfig.routes.services.webDevelopment,
          },
          {
            label: "Performance & Optimization",
            href: appConfig.routes.services.performance,
          },
          {
            label: "Backend & APIs",
            href: appConfig.routes.services.backend,
          },
          {
            label: "Authentication & Security",
            href: appConfig.routes.services.security,
          },
        ],
      },
      {
        category: "Specialized",
        items: [
          {
            label: "SEO & Ad Monetization",
            href: appConfig.routes.services.seo,
          },
          {
            label: "AR Experiences",
            href: appConfig.routes.services.ar,
          },
        ],
      },
    ],
  },

  {
    id: "projects",
    title: "Projects",
    href: appConfig.routes.projects,
  },

  {
    id: "tech-stack",
    title: "Tech Stack",
    href: appConfig.routes.techStack,
  },

  {
    id: "blog",
    title: "Blogs",
    href: appConfig.routes.blogs,
  },

  {
    id: "journey",
    title: "Journey",
    href: appConfig.routes.journey,
  },

  {
    id: "contact",
    title: "Contact",
    href: appConfig.routes.contact,
  },
];

export const footerNav: NavSection[] = [
  {
    title: "Explore",
    items: [
      { label: "Home", href: appConfig.routes.home },
      { label: "About", href: appConfig.routes.about },
      { label: "Projects", href: appConfig.routes.projects },
      { label: "Tech Stack", href: appConfig.routes.techStack },
    ],
  },

  {
    title: "Services",
    items: [
      {
        label: "Web Development",
        href: appConfig.routes.services.webDevelopment,
      },
      {
        label: "Backend & APIs",
        href: appConfig.routes.services.backend,
      },
      {
        label: "Performance",
        href: appConfig.routes.services.performance,
      },
      {
        label: "Security & Authentication",
        href: appConfig.routes.services.security,
      },
    ],
  },

  {
    title: "Connect",
    items: [
      { label: "Blogs", href: appConfig.routes.blogs },
      { label: "Journey", href: appConfig.routes.journey },
      { label: "Contact", href: appConfig.routes.contact },
    ],
  },
];
