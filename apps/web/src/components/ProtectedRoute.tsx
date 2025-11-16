import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../features/auth/hooks/hooks";
export const ProtectedRoute = () => {
  const { userSession } = useAuth();

  if (userSession.isPending) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-400">
        <div>Loading...</div>
      </div>
    );
  }

  return userSession.data?.session ? <Outlet /> : <Navigate to={"/login"} />;
};
