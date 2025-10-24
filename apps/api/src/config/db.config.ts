import mongoose from "mongoose";
import { env } from "@/env";
import { logger } from "@/lib/logger";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.MONGODB_URL);
    logger.info(`mongodb connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export { connectDB };
