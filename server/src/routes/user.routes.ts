/* eslint-disable @typescript-eslint/no-misused-promises */
import { UserController } from "@/controller/user.controller";
import express from "express";

export const userRouter = express.Router();

userRouter.get("/", UserController.getAll);
userRouter.post("/", UserController.create);
userRouter.get("/:id", UserController.findById);
