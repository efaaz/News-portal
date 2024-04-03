import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
        {
            path: "/App",
            element: <App></App>,
        },
    ],
  },
]);

export default router;
