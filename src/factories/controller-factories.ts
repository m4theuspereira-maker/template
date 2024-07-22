import { Controller } from "../controller/controller";

export function controllerFactory (): Controller{
  return new Controller()
}
