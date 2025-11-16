import React from "react";
import { RouterProvider } from "react-router";
import { Router } from "./router/RouterBase.tsx";
function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
