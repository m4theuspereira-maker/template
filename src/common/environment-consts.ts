import { resolve } from "path";
import { config } from "dotenv";

config({ path: resolve(__dirname, "../../.env") });

export const PORT = (Number(process.env.PORT) !== 0) || 3000;
