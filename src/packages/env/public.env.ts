import { z } from "zod";

const publicEnvSchema = z.object({
  // App
  NEXT_PUBLIC_APP_NAME: z.string().trim().min(1).default("vivekcsein"),

  NEXT_PUBLIC_APP_VERSION: z.string().trim().default("1.0.0"),

  NEXT_PUBLIC_APP_DESCRIPTION: z
    .string()
    .trim()
    .min(1)
    .default(
      "A top 1% full stack developer with a passion for building scalable and high-performance web applications.",
    ),

  // Site
  NEXT_PUBLIC_SITE_URL: z.url().trim().default("http://localhost:3000"),

  NEXT_PUBLIC_SITE_TITLE: z.string().trim().min(1).default("Vivek's Portfolio"),

  NEXT_PUBLIC_LOGO_URL: z.string().trim().default("/logo.png"),

  NEXT_PUBLIC_OG_IMAGE_URL: z.string().trim().optional(),

  // Theme

  NEXT_PUBLIC_ACTIVE_THEME: z
    .enum(["system", "light", "dark"])
    .default("system"),

  // Social
  NEXT_PUBLIC_TWITTER: z
    .string()
    .trim()
    .default("https://twitter.com/vivekcsein"),

  NEXT_PUBLIC_LINKEDIN: z
    .string()
    .trim()
    .default("https://www.linkedin.com/showcase/vivekcsein"),

  NEXT_PUBLIC_GITHUB: z
    .string()
    .trim()
    .default("https://github.com/vivekcsein"),

  NEXT_PUBLIC_AUTHOR_NAME: z.string().trim().default("@vivekcsein"),

  NEXT_PUBLIC_AUTHOR_EMAIL: z.string().trim().default("ivivekcse@gmail.com"),
});

const parsedPublicEnv = publicEnvSchema.safeParse(process.env);

if (!parsedPublicEnv.success) {
  console.error("❌ Invalid public environment variables:");

  for (const issue of parsedPublicEnv.error.issues) {
    console.error(`- ${issue.path.join(".")}: ${issue.message}`);
  }

  throw new Error("Public environment validation failed");
}

export const envPublicConfig = Object.freeze({
  APP_NAME: parsedPublicEnv.data.NEXT_PUBLIC_APP_NAME,
  APP_VERSION: parsedPublicEnv.data.NEXT_PUBLIC_APP_VERSION,
  APP_DESCRIPTION: parsedPublicEnv.data.NEXT_PUBLIC_APP_DESCRIPTION,

  SITE_URL: parsedPublicEnv.data.NEXT_PUBLIC_SITE_URL,
  SITE_TITLE: parsedPublicEnv.data.NEXT_PUBLIC_SITE_TITLE,

  LOGO_URL: parsedPublicEnv.data.NEXT_PUBLIC_LOGO_URL,
  OG_IMAGE_URL: parsedPublicEnv.data.NEXT_PUBLIC_OG_IMAGE_URL,

  ACTIVE_THEME: parsedPublicEnv.data.NEXT_PUBLIC_ACTIVE_THEME,

  TWITTER: parsedPublicEnv.data.NEXT_PUBLIC_TWITTER,
  LINKEDIN: parsedPublicEnv.data.NEXT_PUBLIC_LINKEDIN,
  GITHUB: parsedPublicEnv.data.NEXT_PUBLIC_GITHUB,

  AUTHOR_NAME: parsedPublicEnv.data.NEXT_PUBLIC_AUTHOR_NAME,
  AUTHOR_EMAIL: parsedPublicEnv.data.NEXT_PUBLIC_AUTHOR_EMAIL,
});

export type EnvPublicConfig = typeof envPublicConfig;
