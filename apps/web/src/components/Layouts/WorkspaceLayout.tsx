import React from "react";
import { Outlet } from "react-router";
import { WorkspaceNavbar } from "../WorkspaceNavbar";

export const WorkspaceLayout = () => {
  return (
    <div className="w-full bg-white h-full">
      {/* h-[calc(100vh-93px)] means 53px of the navbar and 40px of the workspapce navbar ( please check those components classname ) */}
      <WorkspaceNavbar />
      <div className="max-w-[1500px] mx-auto w-full h-[calc(100vh-93px)]">
        <Outlet />
      </div>
    </div>
  );
};
