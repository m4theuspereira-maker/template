import { type Response, type Request } from "express";
import { ok, serverError } from "./handlers/handlers";

export class Controller {
  working = async (_req: Request, res: Response): Promise<Response<string>> => {
    try {
      return ok(res, "I'm working");
    } catch (error) {
      return serverError<unknown>(res, error);
    }
  };

  createUser = async (req: Request, res: Response): Promise<Response<string>> => {
    try {
      const userName = req.body.name as string
      return ok(res, `User: ${userName} created`);
    } catch (error) {
      return serverError<unknown>(res, error);
    }
  };
}
