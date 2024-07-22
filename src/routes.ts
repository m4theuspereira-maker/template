import { Router } from "express";
import { controllerFactory } from "./factories/controller-factories";

const routes = Router();
const controller = controllerFactory();
routes.get("/", controller.test);

export { routes };
