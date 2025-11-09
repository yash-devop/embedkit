import React from "react";
import { authClient } from "../../lib/better-auth/auth-client";

function Login() {
  const handleGithubAuth = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "http://localhost:5173/dashboard",
    });
  };
  return (
    <div>
      <span className="p-5 border w-fit" onClick={handleGithubAuth}>
        Github
      </span>
    </div>
  );
}

export default Login;
