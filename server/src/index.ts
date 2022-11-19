import { validateEnv } from "@/utils/validateEnv";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "@/data-source";
import { PORT } from "@/config/port.config";
import { userRouter } from "@/routes/user.routes";
import AppError from "@/utils/appError.util";

AppDataSource.initialize()
  .then(async () => {
    validateEnv(); // validates env variables on start

    const app = express(); // initialize express server

    // Middlewares
    app.use(bodyParser.json());
    app.use(cors());
    app.use(morgan("dev"));

    // Routes
    app.use("/api/users", userRouter);

    // Unknown route
    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(new AppError(404, `Route ${req.originalUrl} not found`));
    });

    // Global Error handler
    app.use((error: AppError, _req: Request, res: Response, _next: NextFunction) => {
      error.status = error.status || "error";
      error.statusCode = error.statusCode || 500;

      res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
      });
    });

    // Health checkers
    app.get("/api/ping", (_req, res: Response) => {
      return res.status(200).send("ping");
    });

    app.listen(PORT);
    console.log(`Server has started on port ${PORT}`);
  })
  .catch((error) => console.log(error));
