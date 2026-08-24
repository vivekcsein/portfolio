import { z } from "zod";

const clientEnvSchema = z.object({
  NEXT_PUBLIC_CLIENT_ORIGIN: z.url().trim().default("http://localhost:7164"),

  NEXT_PUBLIC_CLIENT_PREFIX: z.string().trim().default("/app"),
});

const parsedClientEnv = clientEnvSchema.safeParse(process.env);

if (!parsedClientEnv.success) {
  console.error("❌ Invalid client environment variables:");

  for (const issue of parsedClientEnv.error.issues) {
    console.error(`- ${issue.path.join(".")}: ${issue.message}`);
  }

  throw new Error("Client environment validation failed");
}

export const envClientConfig = Object.freeze({
  CLIENT_ORIGIN: parsedClientEnv.data.NEXT_PUBLIC_CLIENT_ORIGIN,
  CLIENT_PREFIX: parsedClientEnv.data.NEXT_PUBLIC_CLIENT_PREFIX,
});

export type EnvClientConfig = typeof envClientConfig;
