import { Hono } from "hono";
import { db } from "../db";
import { productTable } from "../db/schema";

const app = new Hono();

app.get("/", async (c) => {
  const stocks = await db.select().from(productTable).all();
  return c.json({ socks: stocks });
});

app.post("/", async (c) => {
  const req = await c.req.json();
  console.log(req);
  let value;
  try {
    value = await db.insert(productTable).values(req);
    console.log(value);
  } catch (e) {
    console.log(e);
    return c.json({ error: "failed" });
  }
  return c.json({ value: value });
});

export default app;
