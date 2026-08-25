import type { Project } from "@/types/projects";
import appConfig from "../app.config";

const mobileApps = [
  {
    key: "create-expo-app",
    title: "Create Expo App",
    role: "Mobile Developer",
    description:
      "A React Native/Expo starter template with NativeWind v4, Zustand, Zod, Biome, and Husky — built for shipping mobile apps fast without boilerplate setup.",
    tags: ["React Native", "Expo", "NativeWind", "Zustand"],
    href: `${appConfig.social.github}/create-expo-app`,
    createdAt: "12/06/2026",
    updatedAt: "24/08/2026",
    client: "open-source",
  },
] satisfies Project[];

export default mobileApps;
