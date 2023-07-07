import { Express } from "express";
import { exampleRouter } from "../routes/example.routes";

export const setupRoutes = (app: Express): void => {
  app.use("/", exampleRouter);
};
