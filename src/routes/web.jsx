import Home from "../pages/Home";
import TentangKami from "../pages/Tentang-kami";

const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/tentang-kami",
    element: <TentangKami />,
    name: "Tentang-Kami",
  },
];

export default routes;
