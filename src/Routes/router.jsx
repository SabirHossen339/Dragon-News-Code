import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";
import Homepage from "../Components/Pages/Homepage";
import CatagoryNews from "../Components/Pages/CatagoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "",
        Component: Homepage,
      },
      {
        path: "/category/:id",
        Component: CatagoryNews,
        loader: ()=> fetch("/news.json")
      }
    ]
  },
  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>
  },
  {
    path: "/news",
    element: <h2>News Layout</h2>
  },
  {
    path: "/*",
    element: <h2>Error-404</h2>
  },
]);

export default router; 