import { prisma } from "@/lib/prisma-orm/prisma.js";

interface IServiceResponse {
  data: any;
  error?: Error | null;
  message?: string;
}

export const GithubIntegrationService = {
  createInstallationLink: async (): Promise<IServiceResponse> => {
    const url = `https://github.com/apps/embedkit/installations/new`;
    return {
      data: {
        url,
      },
    };
  },
  getIntegration: async (userId: string): Promise<IServiceResponse> => {
    console.log("userId", userId);
    const integrationData = await prisma.githubIntegration.findFirst({
      where: {
        userId,
      },
    });

    if (!integrationData) {
      return {
        data: null,
        error: null,
        message: "No Integration found",
      };
    }

    return {
      data: integrationData,
      error: null,
      message: "Integration data fetched successfully",
    };
  },
};
