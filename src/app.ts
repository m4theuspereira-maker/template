import { setupMiddlewares } from "./common/setup-middlewares";
import { setupRoutes } from "./common/setup-routes";
import express from "express";

export const app = express();
setupMiddlewares(app);
setupRoutes(app);
