import { prisma } from "@/lib/prisma-orm/prisma.js";
import { type EmitterWebhookEvent } from "@octokit/webhooks";

type InstallationCreatedEvent = EmitterWebhookEvent<"installation.created">;

export const GitHubWebhookHandlers = {
  handleInstallationCreated: async ({ payload }: InstallationCreatedEvent) => {
    const accountId = payload.sender.id.toString();
    const installationId = payload.installation.id.toString();

    const account = await prisma.account.findFirst({
      where: {
        accountId,
      },
    });
    if (!account) {
      console.warn("Webhook response: No user account found !");
      return;
    }
    await prisma.githubIntegration.updateMany({
      data: {
        installationId,
        status: "ACTIVE",
      },
      where: {
        userId: account.userId,
      },
    });
  },

  handleInstallationDeleted: async () => {
    console.log("Installation deleted:");

    // Delete from DB
  },

  handleRepoAdded: async () => {
    console.log("Repo added:");
  },
};

// https://chatgpt.com/c/6919df6b-d218-8320-8ae0-fcfc48ec0c26

/**
 * use STATUS for the user installation storage.
 */
