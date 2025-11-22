import { FRONTEND_URL } from "@repo/common/config";
import "@repo/common/env";
import { env } from "@repo/common/env";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "../prisma-orm/prisma.js";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    },
  },
  trustedOrigins: [FRONTEND_URL],
  databaseHooks: {
    user: {
      create: {
        after: async (userData) => {
          await prisma.githubIntegration.create({
            data: {
              userId: userData.id,
              status: "PENDING",
            },
          });
        },
      },
    },
  },
});
