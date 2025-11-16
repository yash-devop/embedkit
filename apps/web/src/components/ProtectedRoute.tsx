import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../features/auth/hooks/hooks";
import { WorkspaceLayout } from "./Layouts/WorkspaceLayout";
export const ProtectedRoute = () => {
  const { userSession } = useAuth();

  if (userSession.isPending) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-400">
        <div>Loading...</div>
      </div>
    );
  }

  if (!userSession.data?.session) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <WorkspaceLayout />
    </>
  );
};
