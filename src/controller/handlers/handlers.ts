import { Response } from "express";

export const serverError = (res: Response, error: any): Response => {
  return res.status(500).json({ body: error.message });
};

export const ok = (res: Response, data?: any): Response => {
  if (Array.isArray(data)) {
    return res.status(200).json({ body: { count: data.length, data } });
  }

  if (!data) {
    return res.status(200);
  }

  return res.status(200).json({ data });
};

export const badRequest = (res: Response, message: string): Response =>{
  return res.status(400).send(message);
}
