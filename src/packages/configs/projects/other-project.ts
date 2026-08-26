import type { Project } from "@/types/projects";
import appConfig from "../app.config";

const otherProjects = [
  {
    key: "create-react-3d",
    title: "Create 3d effects and Animated Models in React",
    description: "A collection of 3D models I've built",
    role: "software engineer",
    tags: ["Next.js", "GSAP", "Tailwind CSS", "TypeScript"],
    href: `${appConfig.social.github}/create-react-3d`,
    createdAt: "24/08/2026",
    updatedAt: "24/08/2026",
    client: "self",
    keywords: [
      "3d",
      "models",
      "3d models",
      "glb",
      "three.js",
      "react-three-fiber",
    ],
  },
  {
    key: "gsap-animations",
    title: "GSAP Animations",
    role: "software engineer",
    description: "A collection of animations using GSAP",
    tags: ["GSAP", "Swiper", "TypeScript"],
    href: "https://vivekcsein.github.io/gsap-animations",
    createdAt: "28/12/2023",
    updatedAt: "28/12/2023",
    client: "self",
    keywords: ["gsap", "swiper", "animations", "typescript"],
    screenshots: [
      "https://raw.githubusercontent.com/vivekcsein/githost/main/images/vivekcse/projects/swiper_anim.png",
    ],
  },
  {
    key: "next-design-app",
    title: "Nextjs Design App",
    role: "Next.js Developer",
    description:
      "A Next.js theme app with a custom theme, dark mode, and dark mode toggle.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://next-theme-app.vercel.app/",
    createdAt: "21/07/2026",
    updatedAt: "09/08/2026",
    client: "self",
    keywords: ["nextjs", "typescript", "tailwindcss", "dark mode", "theme"],
  },
  {
    key: "frnz-ui",
    title: "frnz-ui",
    role: "React UI Library",
    description: "A React-UI library for creating front-end development easy",
    tags: ["React", "TypeScript", "React-UI", "Library", "Rollup"],
    href: "https://www.npmjs.com/package/frnz-ui",
    createdAt: "13/00/2023",
    updatedAt: "11/02/2024",
    client: "self",
    keywords: ["react", "typescript", "react-ui", "library", "rollup"],
    screenshots: [
      "https://raw.githubusercontent.com/vivekcsein/githost/main/images/frnz/fav_icon.png",
    ],
  },
] satisfies Project[];

export default otherProjects;
