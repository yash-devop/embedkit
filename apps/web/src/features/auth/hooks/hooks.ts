import { FRONTEND_URL } from "@repo/common/config";
import { authClient } from "../../../config/authClient";

export const useAuth = () => {
  const signIn = async (provider: "github" | "google") => {
    const data = await authClient.signIn.social({
      provider,
      callbackURL: `${FRONTEND_URL}/dashboard`,
    });
    return data;
  };
  const userSession = authClient.useSession();

  return {
    signIn,
    signOut: authClient.signOut,
    userSession,
  };
};
