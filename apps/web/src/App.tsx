import React from "react";
import { PageLayout } from "./components/Layouts/PageLayout";
import { Router } from "./router/RouterBase";
import { RouterProvider } from "react-router";
function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
