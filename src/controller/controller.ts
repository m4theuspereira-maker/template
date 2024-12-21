import { Response, Request, NextFunction } from "express";
import { ok, serverError } from "./handlers/handlers";

export class Controller {
  working = async (_req: Request, res: Response) => {
    try {
      return ok(res, "I'm working");
    } catch (error: any) {
      return serverError(res, error);
    }
  };

  createUser = (req: Request, res: Response) => {
    try {
      const userName = req.body.name
      return ok(res, `User: ${userName} created`);
    } catch (error) {
      return serverError(res, error);
    }
  };
}
