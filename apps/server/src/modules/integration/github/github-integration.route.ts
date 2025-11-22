import { Router } from "express";
import { GithubIntegrationController } from "./github-integration.controller.js";

export const GithubIntegrationRouter = Router();

GithubIntegrationRouter.post(
  "/github/install",
  GithubIntegrationController.createInstallationLink
);

GithubIntegrationRouter.get(
  "/github/getIntegration",
  GithubIntegrationController.getIntegration
);
