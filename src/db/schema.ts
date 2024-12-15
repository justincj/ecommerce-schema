import { int, sqliteTable as table, text } from "drizzle-orm/sqlite-core";

export const productTable = table(
  "products",
  {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    sku: text(),
    purchasePrice: int().notNull(),
    salePrice: int().notNull(),
    mrp: int().notNull(),
    stock: int().notNull(),
  },
  (t) => []
);

export const storesTable = table(
  "stores",
  {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    address: text().notNull(),
    phone: text().notNull(),
    zone: text().notNull(),
  },
  (t) => []
);

export const ordersTable = table(
  "orders",
  {
    id: int().primaryKey({ autoIncrement: true }),
    storeId: int().notNull(),
    total: int().notNull(),
    date: text().notNull(),
    status: text().notNull().$type<"pending" | "completed">(),
  },
  (t) => []
);

export const ordersItemsTable = table(
  "orders_items",
  {
    id: int().primaryKey({ autoIncrement: true }),
    orderId: int()
      .notNull()
      .references(() => ordersTable.id),
    productId: int()
      .notNull()
      .references(() => productTable.id),
    quantity: int().notNull(),
    orderItemStatus: text().notNull().$type<"pending" | "completed">(),
    orderItemPrice: int().notNull(),
  },
  (t) => []
);

export const invoicesTable = table(
  "invoice",
  {
    id: int().primaryKey({ autoIncrement: true }),
    orderId: int()
      .notNull()
      .references(() => ordersTable.id),
    total: int().notNull(),
    date: text().notNull(),
    status: text().notNull().$type<"pending" | "completed">(),
  },
  (t) => []
);
