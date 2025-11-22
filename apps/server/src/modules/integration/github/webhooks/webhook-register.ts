import { Express, Request, Response, NextFunction } from "express";
import express from "express";
import githubClient from "@/lib/octokit/octokit.js";
import { GitHubWebhookHandlers } from "./webhook-handlers.js";

/**
 * Extends Express Request to include rawBody.
 * This is necessary for GitHub webhook signature verification,
 * because GitHub requires the HMAC to be computed on the raw request payload.
 */
interface RawBodyRequest extends Request {
  rawBody?: Buffer;
}

/**
 * Sets up GitHub webhook endpoint and event listeners.
 * Refer: https://docs.github.com/en/apps/creating-github-apps/writing-code-for-a-github-app/building-a-github-app-that-responds-to-webhook-events
 *
 * This function does the following:
 * 1. Registers a POST route `/api/integration/webhook` to handle incoming GitHub webhooks.
 * 2. Uses a custom `express.json({ verify })` parser to capture the raw request body.
 *    - GitHub requires the raw payload for signature verification.
 * 3. Verifies the webhook payload using `githubClient.webhooks.verifyAndReceive`.
 *    - Fails if the signature doesn't match.
 * 4. Registers event handlers for specific GitHub webhook events:
 *    - `installation.created`
 *    - `installation.deleted`
 *    - `installation_repositories.added`
 *
 * @param {Express} app - The Express app instance
 *
 * @example
 * ```ts
 * import express from "express";
 * import { setupGitHubWebhooks } from "./webhooks";
 *
 * const app = express();
 * setupGitHubWebhooks(app);
 * app.listen(3000);
 * ```
 *
 * After setup:
 * - GitHub will POST webhook events to `/api/integration/webhook`.
 * - Raw request bodies are captured and verified.
 * - Registered event handlers are triggered automatically for matching events.
 */
export const setupGitHubWebhooks = (app: Express) => {
  app.post(
    "/api/integration/webhook",
    express.json({
      verify: (req: RawBodyRequest, res, buf: Buffer) => {
        // Store the raw request body for signature verification
        req.rawBody = buf;
      },
    }),
    async (req: RawBodyRequest, res: Response, next: NextFunction) => {
      if (!req.rawBody) {
        console.log("raw body missing");
        return res.status(400).send("raw body missing");
      }

      try {
        // Verify the GitHub webhook payload
        await githubClient.webhooks.verifyAndReceive({
          id: req.headers["x-github-delivery"] as string,
          name: req.headers["x-github-event"] as string,
          payload: req.rawBody.toString(),
          signature: req.headers["x-hub-signature-256"] as string,
        });

        res.status(200).send("ok");
      } catch (err) {
        console.error("Webhook verification failed:", err);
        res.status(400).send("invalid signature");
      }
    }
  );

  // Register GitHub webhook event handlers
  githubClient.webhooks.on(
    "installation.created",
    GitHubWebhookHandlers.handleInstallationCreated
  );

  githubClient.webhooks.on(
    "installation.deleted",
    GitHubWebhookHandlers.handleInstallationDeleted
  );

  githubClient.webhooks.on(
    "installation_repositories.added",
    GitHubWebhookHandlers.handleRepoAdded
  );

  console.log("🔗 GitHub Webhooks loaded");
};
