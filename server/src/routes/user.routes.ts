import { UserController } from "@/controller/user.controller";
import express from "express";

export const userRouter = express.Router();

userRouter.get("/", UserController.all);
userRouter.get("/:id", UserController.findById);
