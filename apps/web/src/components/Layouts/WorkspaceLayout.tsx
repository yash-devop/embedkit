import React from "react";
import { Outlet } from "react-router";

export const WorkspaceLayout = () => {
  return (
    <div className="w-full bg-neutral-800 min-h-[calc(100vh-53px)]">
      <div className="max-w-[1500px] mx-auto w-full h-full bg-purple-500">
        <Outlet />
      </div>
    </div>
  );
};
