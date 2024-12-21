import { Router } from "express";
import { controllerFactory } from "./factories/controller-factories";
import { ValidationMiddlewares } from "./middlewares/validation-middlewares";

const routes = Router();
const controller = controllerFactory();
routes.get("/", controller.working);
routes.post("/login", ValidationMiddlewares.login, controller.createUser)

export { routes };
