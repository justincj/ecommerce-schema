import { productTable } from "./db/schema";
import { db } from "./db";
async function seedProducts() {
  await db.insert(productTable).values({
    name: "avera mineral water 2L 20MRP",
    stock: 100,
    mrp: 20,
    purchasePrice: 15,
    salePrice: 18,
    sku: "avera-mineral-water-2L-20MRP",
  });
}

seedProducts();
