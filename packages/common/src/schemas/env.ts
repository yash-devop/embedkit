import z from "zod";
import { config } from "dotenv";
import path from "path";
config({
  path: path.resolve(__dirname, "../../../.env"),
});

const envSchema = z.object({
  PORT: z.string(),
  DATABASE_URL: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);
