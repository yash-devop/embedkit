import { BACKEND_URL } from "@repo/common/config";
import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: BACKEND_URL,
});
