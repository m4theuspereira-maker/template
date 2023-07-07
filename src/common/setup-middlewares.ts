import { Express, json, urlencoded } from "express";
import cors from "cors";

export const setupMiddlewares = (app: Express): void => {
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(cors());
};
