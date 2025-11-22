import { auth } from "@/lib/better-auth/auth.js";
import { fromNodeHeaders } from "better-auth/node";
import { Request, Response } from "express";
import { GithubIntegrationService } from "./github-integration.service.js";

const GithubIntegrationController = {
  createInstallationLink: async (req: Request, res: Response) => {
    const response = await GithubIntegrationService.createInstallationLink();

    return res.status(200).json({
      ...response,
      error: null,
      status: true,
    });
  },
  getIntegration: async (req: Request, res: Response) => {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });

    const response = await GithubIntegrationService.getIntegration(
      session?.user.id || ""
    );

    if (!response.data) {
      return res.status(404).json({
        data: null,
        error: null,
        message: response.message,
      });
    }

    return res.status(200).json({
      data: response.data,
      error: null,
      message: response.message,
    });
  },
};

export { GithubIntegrationController };
