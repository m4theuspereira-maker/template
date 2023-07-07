import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => res.send("I'm working"));

export { routes };
