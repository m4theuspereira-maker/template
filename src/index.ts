import express from "express";
import cors from "cors";
import { PORT } from "./config/environment-consts";

const app = express();
app.use(cors());

const server = app.listen(PORT, () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  console.log(`listening on port ${PORT} 🚀`);
});

export { server };
