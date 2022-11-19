import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dbConfig from "./config/db.config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: dbConfig.POSTGRES_HOST,
  port: Number(dbConfig.POSTGRES_PORT),
  username: dbConfig.POSTGRES_USER,
  password: dbConfig.POSTGRES_PASSWORD,
  database: dbConfig.POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: ["src/entity/*.ts"],
  migrations: ["./src/migrations/*.ts"],
  subscribers: [],
});
