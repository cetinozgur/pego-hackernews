import dotenv from "dotenv";
import { join } from "path";

const result = dotenv.config({ path: join(__dirname, "../../", ".env") });

if (result.error) {
  throw result.error;
}

export const { POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USER, POSTGRES_HOST, POSTGRES_PORT } =
  process.env;
