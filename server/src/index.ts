import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import { Response } from "express";
import { AppDataSource } from "@/data-source";
import { PORT } from "@/config/port.config";
import { userRouter } from "@/routes/user.routes";

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    // Middlewares
    app.use(bodyParser.json());
    app.use(cors());
    app.use(morgan("dev"));

    // Routes
    app.use("/api/users", userRouter);

    // Health checkers
    app.get("/api/ping", async (_req, res: Response) => {
      res.status(200).send("ping");
    });

    app.listen(PORT);
    console.log(`Server has started on port ${PORT}`);
  })
  .catch((error) => console.log(error));
