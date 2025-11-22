import cors from "cors";
import express from "express";
import { corsConfig } from "./config/config.js";

import "@repo/common/env";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/better-auth/auth.js";
import { setupGitHubWebhooks } from "./modules/integration/github/webhooks/webhook-register.js";
import { GithubIntegrationRouter } from "./modules/integration/github/github-integration.route.js";

export const app = express();

app.use(cors(corsConfig));
app.all("/api/auth/*any", toNodeHandler(auth)); // express v5 has this catch any route pattern: /auth/*anyy and toNodeHandler from `better-auth`

setupGitHubWebhooks(app);
app.use(express.json());

app.use("/api/integration", GithubIntegrationRouter);

app.listen(process.env.PORT, async () => {
  console.log(`Server started successfully on PORT ${process.env.PORT}`);
});
