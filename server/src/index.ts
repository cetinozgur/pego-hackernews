import { notFoundHandler } from "./middleware/notFound.middleware";
import { errorHandler } from "./middleware/errorHandler.middleware";
import { validateEnv } from "@/utils/validateEnv";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import { Response } from "express";
import { AppDataSource } from "@/data-source";
import { PORT } from "@/config/port.config";
import { userRouter } from "@/routes/user.routes";
import { checkJwt } from "@/middleware/auth0.middleware";
import { CLIENT_ORIGIN_URL } from "./config/auth.config";

AppDataSource.initialize()
  // eslint-disable-next-line @typescript-eslint/require-await
  .then(async () => {
    validateEnv(); // validates env variables on start

    const app = express(); // initialize express server

    // Middlewares
    app.use(bodyParser.json());
    app.use(
      cors({
        origin: CLIENT_ORIGIN_URL,
      })
    );
    app.use(morgan("dev"));

    // Routes
    app.use("/api/users", checkJwt, userRouter);

    // Error handler middlewares
    app.all("*", notFoundHandler);
    app.use(errorHandler);

    // Health checkers
    app.get("/api/ping", (_req, res: Response) => {
      return res.status(200).send("ping");
    });

    app.listen(PORT);
    console.log(`Server has started on port ${PORT}`);
  })
  .catch((error) => console.log(error));
