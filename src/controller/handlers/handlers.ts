import { type Response } from "express";

export const serverError = <T>(res: Response, error: T): Response<T> => {
  return res.status(500).json({ error });
};

export const ok = <T>(res: Response, data?: T): Response<T> => {
  if (Array.isArray(data)) {
    return res.status(200).json({ count: data.length, data });
  }

  return res.status(200).json({ data });
};

export const badRequest = (res: Response, message: string): Response => {
  return res.status(400).send(message);
}
