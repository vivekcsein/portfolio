import { z } from "zod";

const serverEnvSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  PORT: z.coerce.number().int().positive().default(3000),
});

const parsedServerEnv = serverEnvSchema.safeParse(process.env);

if (!parsedServerEnv.success) {
  console.error("❌ Invalid server environment variables:");

  for (const issue of parsedServerEnv.error.issues) {
    console.error(`- ${issue.path.join(".")}: ${issue.message}`);
  }

  throw new Error("Server environment validation failed");
}

export const envAppConfig = Object.freeze({
  NODE_ENV: parsedServerEnv.data.NODE_ENV,
  PORT: parsedServerEnv.data.PORT,
});

export type EnvAppConfig = typeof envAppConfig;
