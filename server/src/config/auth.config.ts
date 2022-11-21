import dotenv from "dotenv";
import { join } from "path";

const result = dotenv.config({ path: join(__dirname, "../../", ".env") });

if (result.error) {
  throw result.error;
}

export const { CLIENT_ORIGIN_URL, AUTH0_AUDIENCE, AUTH0_DOMAIN } = process.env;
