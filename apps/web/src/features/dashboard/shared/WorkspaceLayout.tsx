import { Outlet } from "react-router";
import { WorkspaceNavbar } from "./WorkspaceNavbar.tsx";

export const WorkspaceLayout = () => {
  return (
    <div className="w-full bg-white h-full tracking-[-0.15px] flex flex-col">
      {/* h-[calc(100vh-93px)] means 53px of the navbar and 40px of the workspapce navbar ( please check those components classname ) */}
      <WorkspaceNavbar />
      <div className="flex-1 overflow-auto max-w-[1500px] mx-auto w-full">
        <Outlet />
      </div>
    </div>
  );
};
