import React from "react";
import { createBrowserRouter } from "react-router";
import { PageLayout } from "../components/Layouts/PageLayout";
import { LandingPage } from "../pages/LandingPage";
import { LoginPage } from "../features/auth/Login";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { OverviewPage } from "../pages/OverviewPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        // path: "/",
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "dashboard",
        element: <ProtectedRoute />,
        children: [
          {
            path: "overview",
            element: <OverviewPage />,
          },
        ],
      },
    ],
  },
]);
