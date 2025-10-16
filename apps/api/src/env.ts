import { z } from "zod";
import dotenv from "dotenv";
dotenv.config();
const envSchema = z.object({
  NODE_ENV: z.enum(["PROD", "DEV"]).default("DEV"),
  PORT: z.coerce.number().default(3000),
  LOG_LEVEL: z.enum(["warn", "debug", "info"]).default("info"),
  MORGAN_LEVEL: z.enum(["dev"]).default("dev"),
});

const res = envSchema.safeParse(process.env);

export const env = res.data;
