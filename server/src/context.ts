import { PrismaClient } from "@prisma/client";
import { HackernewsAPI } from "./datasources/hackernews-api";

export const prisma = new PrismaClient();
export const hackernewsApi = new HackernewsAPI();

export interface Context {
  prisma: PrismaClient;
  hackernewsApi: HackernewsAPI;
}

export const context: Context = {
  prisma,
  hackernewsApi,
};
