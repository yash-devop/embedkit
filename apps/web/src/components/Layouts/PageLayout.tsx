import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "../Navbar";

export const PageLayout = () => {
  return (
    <div className="min-h-screen h-full">
      <Navbar />
      <Outlet />
    </div>
  );
};
