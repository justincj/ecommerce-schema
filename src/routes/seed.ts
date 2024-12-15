import { Hono } from "hono";

const app = new Hono();

const route = app.get("/", (c) => {
  return c.json({ message: "seeded the database" });
});

export default route;
