import { authClient } from "../../../config/authClient";
import { FRONTEND_URL } from "@repo/common/config";

export const useAuth = () => {
  const signIn = async (provider: "github" | "google") => {
    const data = await authClient.signIn.social({
      provider,
      callbackURL: `${FRONTEND_URL}/dashboard`,
    });
    return data;
  };

  return {
    signIn,
  };
};
