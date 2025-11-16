import { PageLayout } from "@/components/Layouts/PageLayout.tsx";
import { ProtectedRoute } from "@/components/ProtectedRoute.tsx";
import { LoginPage } from "@/features/auth/Login.tsx";
import { IntegrationPage } from "@/pages/dashboard/integrations/IntegrationPage.tsx";
import { OverviewPage } from "@/pages/dashboard/overview/OverviewPage.tsx";
import { LandingPage } from "@/pages/LandingPage.tsx";
import { createBrowserRouter } from "react-router";
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
          {
            path: "integrations",
            element: <IntegrationPage />,
          },
        ],
      },
    ],
  },
]);
