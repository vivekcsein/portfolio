import { envPublicConfig } from "../env/public.env";

export const homeConfig = {
  hero: {
    badge: "Full Stack Developer",
    heading: ["I build digital products", "that are", "and"],
    highlights: ["fast, scalable", "built to last."],
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js and modern web technologies. I help startups and businesses turn ideas into production-ready products.",
    primaryCta: { label: "View My Work", href: "#projects" },
    secondaryCta: { label: "Download Resume", href: "/resume.pdf" },
    social: [
      {
        label: "GitHub",
        href: envPublicConfig.GITHUB,
        icon: "github",
      },
      {
        label: "LinkedIn",
        href: envPublicConfig.LINKEDIN,
        icon: "linkedin",
      },
      { label: "Twitter", href: envPublicConfig.TWITTER, icon: "twitter" },
      {
        label: "Email",
        href: `mailto:${envPublicConfig.AUTHOR_EMAIL}`,
        icon: "mail",
      },
    ],
    handle: envPublicConfig.AUTHOR_NAME,
    floatingIcons: [
      "react",
      "typescript",
      "nextjs",
      "nodejs",
      "database",
      "code",
    ],
  },

  about: {
    eyebrow: "About Me",
    heading: ["Building solutions that solve", "real problems."],
    description:
      "I'm a Full Stack Developer who loves creating clean, scalable and high-performance web applications. I enjoy turning complex requirements into simple and delightful experiences.",
    stats: [
      { label: "Experience", value: "2+ Years", icon: "calendar" },
      {
        label: "Availability",
        value: "Open to freelance & full-time",
        icon: "check",
      },
      { label: "Location", value: "India", icon: "pin" },
      { label: "Email", value: envPublicConfig.AUTHOR_EMAIL, icon: "mail" },
      { label: "Focus", value: "Full Stack Development", icon: "target" },
      { label: "Handle", value: envPublicConfig.AUTHOR_NAME, icon: "at" },
    ],
    cta: { label: "More About Me", href: "/docs" },
  },

  techStack: {
    eyebrow: "Tech Stack",
    heading: "Technologies I work with",
    categories: [
      "All",
      "Frontend",
      "Backend",
      "Database & Tools",
      "Others",
    ] as const,
    items: [
      { name: "React", icon: "react", category: "Frontend" },
      { name: "Next.js", icon: "nextjs", category: "Frontend" },
      { name: "TypeScript", icon: "typescript", category: "Frontend" },
      { name: "Node.js", icon: "nodejs", category: "Backend" },
      { name: "Express.js", icon: "express", category: "Backend" },
      { name: "Fastify", icon: "fastify", category: "Backend" },
      { name: "Hono", icon: "hono", category: "Backend" },
      { name: "PostgreSQL", icon: "postgresql", category: "Database & Tools" },
      { name: "MySQL", icon: "mysql", category: "Database & Tools" },
      { name: "Supabase", icon: "supabase", category: "Database & Tools" },
      { name: "Tailwind CSS", icon: "tailwind", category: "Frontend" },
      { name: "Shadcn UI", icon: "shadcn", category: "Frontend" },
      { name: "Redux Toolkit", icon: "redux", category: "Frontend" },
      { name: "Zod", icon: "zod", category: "Others" },
      { name: "Linux", icon: "linux", category: "Others" },
    ],
  },

  projects: {
    eyebrow: "Featured Projects",
    heading: "Some things I've built",
    cta: { label: "View All Projects", href: "/docs/development" },
    items: [
      {
        title: "Content Editor Platform",
        description:
          "A modern editor platform with theme, font customization and real-time writing experience.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
        href: `${envPublicConfig.GITHUB}/content-editor-platform`,
      },
      {
        title: "Gaming Community Website",
        description:
          "Gaming community website with events, tournaments and team management.",
        tags: ["Next.js", "GSAP", "Tailwind CSS", "Framer Motion"],
        href: `${envPublicConfig.GITHUB}/gaming-community-website`,
      },
      {
        title: "Portfolio Template",
        description:
          "Modern portfolio template for developers with dark mode and blog integration.",
        tags: ["Next.js", "TypeScript", "MDX", "Tailwind CSS"],
        href: `${envPublicConfig.GITHUB}/portfolio-template`,
      },
    ],
  },

  metrics: [
    { label: "Years Experience", value: "2+", icon: "calendar" },
    { label: "Projects Completed", value: "30+", icon: "grid" },
    { label: "Client Satisfaction", value: "100%", icon: "shield" },
    { label: "On TopDev & GitHub", value: "Top 1%", icon: "trophy" },
  ],

  journey: {
    eyebrow: "My Journey",
    heading: "The path that shaped me",
    steps: [
      {
        title: "Learning & Exploring",
        description:
          "Started my journey with HTML, CSS & JS and discovered the joy of building on the web.",
        icon: "book",
      },
      {
        title: "Frontend Developer",
        description:
          "Deep dived into React, Next.js and modern frontend ecosystem.",
        icon: "layout",
      },
      {
        title: "Backend Developer",
        description:
          "Explored Node.js, databases, APIs and authentication systems.",
        icon: "server",
      },
      {
        title: "Full Stack Developer",
        description:
          "Building scalable full stack applications and helping businesses grow.",
        icon: "layers",
      },
      {
        title: "Building & Sharing",
        description:
          "Contributing to open source, writing blogs and sharing knowledge.",
        icon: "share",
      },
      {
        title: "Future Goals",
        description:
          "Continuously learning and building impactful products that make a difference.",
        icon: "flag",
      },
    ],
  },

  showcase: {
    eyebrow: "Interactive 3D Showcase",
    heading: "Explore what I build",
    description:
      "Interactive 3D models of the tools and systems and experiences I work with.",
    cta: { label: "View 3D Showcase", href: "#showcase" },
    items: [
      { title: "Web Apps", icon: "laptop" },
      { title: "APIs & Backend", icon: "server" },
      { title: "Databases", icon: "database" },
      { title: "AR Experiences", icon: "sparkles" },
    ],
  },

  cta: {
    heading: ["Let's build something", "amazing together"],
    description:
      "I'm open to freelance projects, full-time opportunities and exciting collaborations.",
    button: { label: "Let's Connect", href: "#contact" },
    quote: {
      text: "Vivek is an exceptional developer who delivers high-quality work on time. His expertise in Next.js and backend architecture is top-notch.",
      author: "Satisfied Client",
      role: "Founder, Startup",
    },
    subtext: "Building Global Digital Experiences",
  },
} as const;

export default homeConfig;
