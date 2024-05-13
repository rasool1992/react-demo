import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./components/MainLayout/MainLayout";
import Docs from "./components/Docs/Docs";
import Tutorial from "./components/Tutorial/Tutorial";
import Blog from "./components/Blog/Blog";
import MainHome from "./components/MainHome/MainHome";
import GetMore from "./components/GetMore/GetMore";

const routes = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "docs",
        element: <Docs />,
        children: [
          {
            index: true,
            element: <MainHome />,
          },
          {
            path: "get-more",
            element: <GetMore />,
          },
        ],
      },
      {
        path: "tutorial",
        element: <Tutorial />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
