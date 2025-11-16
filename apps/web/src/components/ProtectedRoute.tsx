import { useAuth } from "@/features/auth/hooks/hooks.ts";
import { WorkspaceLayout } from "@/features/dashboard/shared/WorkspaceLayout.tsx";
import { Navigate } from "react-router";

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
