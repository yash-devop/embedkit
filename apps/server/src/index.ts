import cors from "cors";
import express from "express";
import { corsConfig } from "./config/config.js";
import { AuthRouter } from "./modules/auth/auth.route.js";

import { config } from "dotenv";

config({
  path: "../../.env",
});

export const app = express();

app.use(express.json());
app.use(cors(corsConfig));
app.use("/api/v1", AuthRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started successfully on PORT ${process.env.PORT}`);
});
