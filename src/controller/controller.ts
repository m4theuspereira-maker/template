import { Response, Request, NextFunction } from "express";
import { ok, serverError } from "./handlers/handlers";

export class Controller {
  test = async (req: Request, res: Response) => {
    try {
      return ok(res, "I'm working");
    } catch (error: any) {
      return serverError(res, error);
    }
  };
}
