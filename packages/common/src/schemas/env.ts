import { config } from "dotenv";
import { findUpSync } from "find-up";
import z from "zod";
config({
  path: findUpSync(".env"),
});

const envSchema = z.object({
  PORT: z.string(),
  DATABASE_URL: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),

  APP_ID: z.string(),
  WEBHOOK_SECRET: z.string(),
  PRIVATE_KEY_PATH: z.string(),
});

export const env = envSchema.parse(process.env);
