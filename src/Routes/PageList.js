import Home from "../Pages/Home";
import Printing from "../Pages/Printing";
import Support from "../Pages/Support";
import History from "../Pages/History";
import Login from "../Pages/Login";
import Error from "../Pages/Error";

// no login
const publicRoutes = [
  {
    path: "/",
    component: Home,
    layout: "default",
  },
  {
    path: "/Home",
    component: Home,
    layout: "default",
  },
  {
    path: "/SPS-SYSTEM-FE",
    component: Home,
    layout: "default",
  },
  {
    path: "/Printing",
    component: Printing,
    layout: "default",
  },
  {
    path: "/History",
    component: History,
    layout: "default",
  },
  {
    path: "/Support",
    component: Support,
    layout: "default",
  },
  {
    path: "/Login",
    component: Login,
  },
  {
    path: "*",
    component: Error,
  },
];

// required login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
