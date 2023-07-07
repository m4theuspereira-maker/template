import { app } from "./app";
import { PORT } from "./common/environment-consts";

app.listen(PORT, () => {
  console.log(`listening on port ${PORT} 🚀`);
});
