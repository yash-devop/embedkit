import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "../Navbar.tsx";

export const PageLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};
