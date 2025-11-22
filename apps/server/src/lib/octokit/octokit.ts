import { env } from "@repo/common/env";
import { App } from "octokit";

const githubClient = new App({
  appId: env.APP_ID,
  privateKey: env.PRIVATE_KEY_PATH,
  webhooks: {
    secret: env.WEBHOOK_SECRET,
  },
});

export default githubClient;
