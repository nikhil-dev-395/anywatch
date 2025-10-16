import { app } from "./app";
import { env } from "./env";
app.listen(process.env.PORT, () => {
  console.log(`server start at http://localhost:${env.PORT}`);
});
