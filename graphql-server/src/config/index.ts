import dotenv from "dotenv";
import { join } from "path";

const result = dotenv.config({ path: join(__dirname, "../../", ".env") });

if (result.error) {
  throw result.error;
}

export const { PORT } = process.env;
