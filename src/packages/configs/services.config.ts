export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  positioning: string;
  features: string[];
  stack: string[];
  icon: string;
};

/**
 * Slugs match `appConfig.routes.services.*` exactly — see app.config.ts.
 * Keep both in sync if a service is renamed or added.
 */
export const servicesConfig: {
  eyebrow: string;
  title: string;
  description: string;
  items: Service[];
} = {
  eyebrow: "What I Do",
  title: "Services",
  description:
    "Focused engineering services for teams and founders who need a product built right the first time — from a fast marketing site to a full production application.",

  items: [
    {
      slug: "web-development",
      title: "Web Development",
      eyebrow: "Frontend Engineering",
      description:
        "Modern, responsive websites and web applications built with React and Next.js — fast, accessible, and easy to maintain.",
      positioning: "A site that loads fast and works on every screen.",
      features: [
        "Responsive, accessible interfaces",
        "Component-driven architecture",
        "SEO-friendly by default",
        "Content-driven pages (MDX/CMS-ready)",
      ],
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      icon: "layout",
    },
    {
      slug: "performance",
      title: "Performance & Optimization",
      eyebrow: "Core Web Vitals",
      description:
        "Audits and fixes for slow load times, layout shift, and poor Lighthouse scores — the kind of performance work that directly affects conversion and SEO ranking.",
      positioning: "Make the site you already have feel instant.",
      features: [
        "Core Web Vitals audits",
        "Bundle size & code-splitting review",
        "Image and font loading strategy",
        "Render-blocking resource cleanup",
      ],
      stack: ["Lighthouse", "Next.js", "Webpack/Turbopack"],
      icon: "target",
    },
    {
      slug: "backend",
      title: "Backend & APIs",
      eyebrow: "Systems Engineering",
      description:
        "REST APIs and backend services built around validation, authentication, and reliable data flow — designed to scale with the product, not against it.",
      positioning: "Reliable systems behind the interfaces people use.",
      features: [
        "REST API design & implementation",
        "Database schema design",
        "Input validation (Zod)",
        "Service architecture & deployment",
      ],
      stack: ["Node.js", "Hono", "Express.js", "PostgreSQL"],
      icon: "server",
    },
    {
      slug: "authentication-security",
      title: "Authentication & Security",
      eyebrow: "Access Control",
      description:
        "Secure login, session, and permission systems — cookie-based JWT, silent refresh, and role-based access done the way that doesn't leak credentials in six months.",
      positioning: "Access control that doesn't cut corners.",
      features: [
        "Cookie-based JWT authentication",
        "Silent refresh with request queuing",
        "Role-based access control",
        "Security-conscious API design",
      ],
      stack: ["JWT", "OAuth2", "bcrypt", "Zod"],
      icon: "shield",
    },
    {
      slug: "seo-ad-monetization",
      title: "SEO & Ad Monetization",
      eyebrow: "Growth & Revenue",
      description:
        "Technical SEO fundamentals plus ad integration (AdSense/Media.net) done without wrecking Core Web Vitals or user experience.",
      positioning: "Get found, and get paid for the traffic that finds you.",
      features: [
        "Technical SEO audit & fixes",
        "Structured data / JSON-LD",
        "Ad network integration",
        "Analytics & search console setup",
      ],
      stack: ["Google AdSense", "Media.net", "Schema.org"],
      icon: "trophy",
    },
    {
      slug: "ar-experiences",
      title: "AR Experiences",
      eyebrow: "Creative Engineering",
      description:
        "Interactive 3D and augmented-reality experiences for the web — product configurators, brand showcases, and playful interactive moments built with React Three Fiber.",
      positioning: "Where engineering meets immersive experience.",
      features: [
        "3D product/asset viewers",
        "WebGL scenes via React Three Fiber",
        "GLB model integration pipeline",
        "Scroll-driven 3D animation",
      ],
      stack: ["Three.js", "React Three Fiber", "GLB", "GSAP"],
      icon: "box",
    },
  ],
};

export const getServiceBySlug = (slug: string): Service | undefined =>
  servicesConfig.items.find((service) => service.slug === slug);

export default servicesConfig;
