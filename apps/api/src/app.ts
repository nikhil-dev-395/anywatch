import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import {logger} from "../src/lib/logger"
import { ApiResponse } from "./handlers/Response.handler";
import { env } from "./env";
const app = express();

// middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: "*",
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan(env.MORGAN_LEVEL));

/**
 * api routes
 */
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ success: true, working: true });
});

/**
 * error handling middleware
 */

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  
  const statusCode =  500;
  logger.warn(err instanceof Error ? err.message : "interan server error")
  return new ApiResponse(
    statusCode,
    err instanceof Error ? err.message : "internal serve error"
  ).send(res);
});

export { app };
