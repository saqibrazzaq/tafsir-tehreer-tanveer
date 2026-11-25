import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import * as schema from "./schema";

dotenv.config({ path: ".env.local" });

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is missing.");
}

// Disable prefetch for serverless compatibility, enable ssl if specified or in production
const client = postgres(connectionString, {
  prepare: false,
  ssl: connectionString.includes("sslmode=require") ? "require" : false,
});

export const db = drizzle(client, { schema });
