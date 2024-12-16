import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();

app.use(logger());

import seedRoute from "./routes/seed";
import stockRoute from "./routes/stocks";

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.basePath("/api").route("/seed", seedRoute).route("/stocks", stockRoute);

export default app;
