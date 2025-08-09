// Drizzle ORM schema (PostgreSQL) for a minimal storefront model
import { pgTable, text, varchar, integer, timestamp, jsonb } from "drizzle-orm/pg-core"

export const regions = pgTable("regions", {
  id: varchar("id", { length: 64 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  currencyCode: varchar("currency_code", { length: 3 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

export const products = pgTable("products", {
  id: varchar("id", { length: 64 }).primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  handle: varchar("handle", { length: 255 }).notNull().unique(),
  subtitle: varchar("subtitle", { length: 255 }),
  description: text("description"),
  thumbnail: text("thumbnail"),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

export const variants = pgTable("variants", {
  id: varchar("id", { length: 64 }).primaryKey(),
  productId: varchar("product_id", { length: 64 }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  sku: varchar("sku", { length: 128 }),
  calculatedAmount: integer("calculated_amount").notNull(),
  originalAmount: integer("original_amount").notNull(),
  currencyCode: varchar("currency_code", { length: 3 }).notNull(),
})

export const carts = pgTable("carts", {
  id: varchar("id", { length: 64 }).primaryKey(),
  email: varchar("email", { length: 255 }),
  regionId: varchar("region_id", { length: 64 }).notNull(),
  subtotal: integer("subtotal").default(0),
  total: integer("total").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

export const lineItems = pgTable("line_items", {
  id: varchar("id", { length: 64 }).primaryKey(),
  cartId: varchar("cart_id", { length: 64 }).notNull(),
  variantId: varchar("variant_id", { length: 64 }).notNull(),
  title: varchar("title", { length: 255 }),
  quantity: integer("quantity").notNull(),
  unitPrice: integer("unit_price").notNull(),
})

export const customers = pgTable("customers", {
  id: varchar("id", { length: 64 }).primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  firstName: varchar("first_name", { length: 255 }),
  lastName: varchar("last_name", { length: 255 }),
  phone: varchar("phone", { length: 64 }),
  metadata: jsonb("metadata"),
})

export const orders = pgTable("orders", {
  id: varchar("id", { length: 64 }).primaryKey(),
  customerId: varchar("customer_id", { length: 64 }),
  total: integer("total").notNull(),
  subtotal: integer("subtotal").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
})


