import { app } from "./app";
import { env } from "./env";
import { logger } from "./lib/logger";
app.listen(process.env.PORT, () => {
  logger.info(`server start at http://localhost:${env.PORT}`);
});
