import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { ApiResponse } from "./handlers/Response.handler";
const app = express();

// middleware
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use(helmet());
app.use(morgan("dev"));

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
  return new ApiResponse(
    500,
    err instanceof Error ? err.message : "internal serve error"
  ).send(res);
});

export { app };
