import { useRoutes } from "react-router-dom";
import FormsWrapper from "../../wrappers/FormsWrapper";
import AboutRoutes from "./AboutRoutes";
import Home from "../../../views/Home";
import Blog from "../../../views/Blog";
import Contact from "../../../views/Contact";
import Survey from "../../../views/Survey";
import NotFound from "../../../views/NotFound";

function MainRoutes() {
  const myRoutes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blog",
      element: <Blog />,
      children: [
        {
          path: ":id",
          element: <Blog />,
        },
      ],
    },

    {
      path: "/about/*",
      element: <AboutRoutes />,
    },
    {
      element: <FormsWrapper />,
      children: [
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/survey",
          element: <Survey />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return myRoutes;
}

export default MainRoutes;
