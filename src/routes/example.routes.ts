import { Router } from "express";

const exampleRouter = Router();

exampleRouter.get("/", (req, res) => res.send("I'm working"));

export { exampleRouter };
