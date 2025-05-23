import Beranda from "../pages/Beranda";
import NotFound from "../pages/NotFound";
import ProgramKami from "../pages/Program-kami";

import TentangKami from "../pages/Tentang-kami";

const routes = [
  {
    path: "/",
    element: <Beranda />,
    name: "Beranda",
  },
  {
    path: "/tentang-kami",
    element: <TentangKami />,
    name: "Tentang-Kami",
  },
  {
    path: "/program-kami",
    element: <ProgramKami />,
    name: "Program-Kami",
  },
  {
    path: "*",
    element: <NotFound />,
    name: "NotFound",
  },
];

export default routes;
