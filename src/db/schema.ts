import { relations } from "drizzle-orm";
import {
  bigint,
  bigserial,
  boolean,
  char,
  date,
  decimal,
  doublePrecision,
  integer,
  interval,
  json,
  jsonb,
  numeric,
  pgEnum,
  pgTable,
  primaryKey,
  real,
  serial,
  smallserial,
  text,
  time,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

// export const users = pgTable('users', {
//     id: serial('id').primaryKey(),
//     username: text('username').notNull(),
//     email: text('email').notNull(),
//     password: text('password').notNull(),
//     salt: text('salt'),
//     sessiontoken: text('sessiontoken'),
// });
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  firstName: text('firstName').notNull(),
  lastName: text('lastName').notNull(),
  email: text('email').notNull(),
  phone:text('phone').notNull(),
  password: text('password').notNull(),
  bio:text('bio').notNull(),
});
export const plateForm=pgTable('plateForms',{
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
})
export const publicFile = pgTable("publicFiles", {
    id: serial("id").primaryKey(),
    fileName: text("fileName"),
    url: varchar("url", { length: 256 }),
    uploadDate: varchar("upload_date", { length: 256 }),
    lastUsed: varchar("last_used", { length: 256 }),
  });

export const agents=pgTable("agents",{
    id: serial("id").primaryKey(),
    name:text("name"),
    email:text("email"),
    phone: varchar("phone", { length: 256 }),
    is_admin:boolean("is_admin")
})  



