import React from "react";
import { useAuth } from "./hooks/hooks";
export const LoginPage = () => {
  const { signIn } = useAuth();
  return (
    <>
      <h1>Login page</h1>
      <button onClick={() => signIn("github")}>Signin with github</button>
    </>
  );
};
