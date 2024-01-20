CREATE TABLE IF NOT EXISTS "agents" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"phone" varchar(256),
	"is_admin" boolean
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "plateForms" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "publicFiles" (
	"id" serial PRIMARY KEY NOT NULL,
	"fileName" text,
	"url" varchar(256),
	"upload_date" varchar(256),
	"last_used" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"firstName" text NOT NULL,
	"lastName" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"password" text NOT NULL,
	"bio" text NOT NULL
);
