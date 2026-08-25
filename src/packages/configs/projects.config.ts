import arApps from "./projects/ar-apps";
import backendApps from "./projects/backend-apps";
import fullStackApps from "./projects/full-stack-apps";
import otherProject from "./projects/other-project";
import webApps from "./projects/web-apps";

const projectsConfig = {
  eyebrow: "Selected Work",

  title: "Engineering through projects",

  description:
    "A collection of products, systems, experiments, and interactive experiences built with a focus on performance, scalability, and thoughtful user experience.",

  cta: {
    label: "View All Projects",
    href: "/projects",
  },

  projects: [
    {
      key: "full-stack",
      title: "Full-Stack Products",
      eyebrow: "Product Engineering",

      cta: {
        label: "View All full-stack projects",
        href: "/full-stack",
      },

      description:
        "Production-oriented applications connecting modern interfaces with secure APIs, business logic, and reliable data systems.",

      positioning: "From product idea to production-ready application.",

      capabilities: [
        "Product architecture",
        "Frontend development",
        "Backend services",
        "Authentication",
        "Database integration",
        "Performance optimization",
      ],

      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Supabase",
      ],

      icon: "layers",

      stats: [
        { label: "Focus", value: "Production" },
        { label: "Architecture", value: "Full Stack" },
      ],

      projectList: fullStackApps,
    },

    {
      key: "web",
      title: "Web Applications",
      eyebrow: "Frontend Engineering",
      cta: {
        label: "View All web projects",
        href: "/web",
      },

      description:
        "Modern web experiences designed around responsive interfaces, accessibility, performance, and maintainable frontend architecture.",

      positioning:
        "Fast, accessible interfaces that feel great on every screen.",

      capabilities: [
        "Responsive UI",
        "Component architecture",
        "Accessibility",
        "SEO",
        "Animations",
        "Performance",
      ],

      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],

      icon: "layout",

      stats: [
        { label: "Focus", value: "UX & Performance" },
        { label: "Platform", value: "Web" },
      ],

      projectList: webApps,
    },

    {
      key: "backend",
      title: "Backend & APIs",
      eyebrow: "Systems Engineering",
      cta: {
        label: "View All backend projects",
        href: "/backend",
      },

      description:
        "Backend services and APIs built around security, validation, maintainability, scalability, and reliable data flow.",

      positioning: "Reliable systems behind the interfaces people use.",

      capabilities: [
        "REST APIs",
        "Authentication",
        "Authorization",
        "Database design",
        "Validation",
        "Service architecture",
      ],

      stack: [
        "Node.js",
        "Express.js",
        "Fastify",
        "Hono",
        "PostgreSQL",
        "MySQL",
      ],

      icon: "server",

      stats: [
        { label: "Focus", value: "Reliability" },
        { label: "Architecture", value: "API & Services" },
      ],

      projectList: backendApps,
    },

    {
      key: "3d-ar",
      title: "3D & AR Experiences",
      eyebrow: "Creative Engineering",
      cta: {
        label: "View All 3D & AR projects",
        href: "/3d-ar",
      },

      description:
        "Interactive 3D and augmented-reality experiences combining engineering, visual design, real-time graphics, and interaction.",

      positioning: "Where software engineering meets immersive experiences.",

      capabilities: [
        "3D interfaces",
        "WebGL",
        "Real-time rendering",
        "3D asset pipelines",
        "AR experiences",
        "Interactive animation",
      ],

      stack: ["Three.js", "React Three Fiber", "Blender", "GLB", "Lens Studio"],

      icon: "box",

      stats: [
        { label: "Focus", value: "Interactive 3D" },
        { label: "Rendering", value: "Real Time" },
      ],

      projectList: arApps,
    },

    {
      key: "experiments",
      title: "Experiments & Tools",
      eyebrow: "Exploration",
      cta: {
        label: "View All experiments projects",
        href: "/experiments",
      },

      description:
        "Smaller experiments, developer tools, UI systems, prototypes, and ideas created to explore new technologies and improve development workflows.",

      positioning: "Small experiments that often become bigger ideas.",

      capabilities: [
        "Prototyping",
        "Developer tooling",
        "UI systems",
        "New technologies",
        "Automation",
        "Proof of concepts",
      ],

      stack: ["TypeScript", "React", "Next.js", "GSAP", "Three.js"],

      icon: "flask",

      stats: [
        { label: "Focus", value: "Experimentation" },
        { label: "Style", value: "Rapid Prototyping" },
      ],

      projectList: otherProject,
    },
  ],
} as const;

export default projectsConfig;
