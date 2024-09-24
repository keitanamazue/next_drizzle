import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
export const users = pgTable("users", {
  id: uuid("id").defaultRandom().notNull().primaryKey(),
  name: text("name").notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const posts = pgTable("posts", {
  id: uuid("id").defaultRandom().notNull().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  title: text("title").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

// export const users = pgTable("users", {
//   id: uuid("id").defaultRandom().notNull().primaryKey(),
//   name: text("name").notNull(),
//   discriminator: varchar("discriminator", { length: 255 }).notNull().unique(),
//   email: varchar("email", { length: 255 }).notNull().unique(),
//   note: text("note").default("").notNull(),
//   createdAt: timestamp("created_at", { withTimezone: true })
//     .defaultNow()
//     .notNull(),
//   updatedAt: timestamp("updated_at", { withTimezone: true })
//     .defaultNow()
//     .notNull(),
// });
