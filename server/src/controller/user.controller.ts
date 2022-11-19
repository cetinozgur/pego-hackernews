import { NextFunction, Request, Response } from "express";
import { User } from "@/entity/user.entity";
import { AppDataSource } from "@/data-source";

const userRepository = AppDataSource.getRepository(User);

export class UserController {
  static async all(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userRepository.find();
      return res.status(200).json({ status: "success", users });
    } catch (err) {
      next(err);
    }
  }

  static async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.id;
      const user = await userRepository.findOneByOrFail({ id: Number(userId) });
      return res.status(200).json({ status: "sucesss", user });
    } catch (err) {
      next(err);
    }
  }
}
