import AppError from "@/utils/appError.util";
import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  return next(new AppError(404, `Route ${req.originalUrl} not found`));
};
