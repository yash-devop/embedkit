import cors from "cors";
import express from "express";
import { corsConfig } from "./config/config.js";
import { AuthRouter } from "./modules/auth/auth.route.js";

import { config } from "dotenv";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/better-auth/auth.js";

config({
  path: "../../.env",
});

export const app = express();

app.use(cors(corsConfig));
app.all("/api/auth/*any", toNodeHandler(auth)); // express v5 has this catch any route pattern: /auth/*anyy and toNodeHandler from better-auth

app.use(express.json());
app.use("/api/v1", AuthRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started successfully on PORT ${process.env.PORT}`);
});
