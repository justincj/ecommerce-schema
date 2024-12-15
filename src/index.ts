import { Hono } from "hono";

const app = new Hono();

import seedRoute from "./routes/seed";

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.basePath("/api").route("/seed", seedRoute);

export default app;
