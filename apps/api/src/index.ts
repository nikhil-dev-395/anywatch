import { app } from "./app";
import { connectDB } from "./config/db.config";
import { env } from "./env";
import { logger } from "./lib/logger";
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      logger.info(`server start at http://localhost:${env.PORT}`);
    });
  })
  .catch((err) => {
    logger.error(err);
    process.exit(0);
  });
