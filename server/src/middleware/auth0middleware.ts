import { auth } from "express-oauth2-jwt-bearer";
import { AUTH0_DOMAIN, AUTH0_AUDIENCE } from "@/config/auth.config";

export const validateAccessToken = auth({
  issuerBaseURL: `https://${AUTH0_DOMAIN}`,
  audience: AUTH0_AUDIENCE,
});
