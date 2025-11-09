import React from "react";
import { createBrowserRouter } from "react-router";
import { PageLayout } from "../components/Layouts/PageLayout";
import Login from "../components/login/Login";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Login />
          </>
        ),
      },
    ],
  },
]);
