import Beranda from "../pages/Beranda";
import Engineering from "../pages/program/engineering";
import MagangKenshusei from "../pages/program/magang-kenshusei";
import NihonGoGakkou from "../pages/program/nihon-go-gakkou";
import TokuteiGinou from "../pages/program/tokutei-ginou";
import LowonganKerja from "../pages/lowongan-kerja";
import NotFound from "../pages/NotFound";
import ProgramKami from "../pages/Program-kami";

import TentangKami from "../pages/Tentang-kami";
import Artikel from "../pages/artikel";

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
    path: "/lowongan-kerja",
    element: <LowonganKerja />,
    name: "Lowongan-Kerja",
  },
  {
    path: "/program-kami/magang-kenshusei",
    element: <MagangKenshusei />,
    name: "Magang-Kenshusei",
  },
  {
    path: "/program-kami/tokutei-ginou",
    element: <TokuteiGinou />,
    name: "Tokutei-Ginou",
  },
  {
    path: "/program-kami/engineering",
    element: <Engineering />,
    name: "Engineering",
  },
  {
    path: "/program-kami/nihon-go-gakkou",
    element: <NihonGoGakkou />,
    name: "Nihon Go Gakkou",
  },
  // {
  //   path: "/artikel",
  //   element: <Artikel />,
  //   name: "Nihon Go Gakkou",
  // },
  {
    path: "*",
    element: <NotFound />,
    name: "NotFound",
  },
];

export default routes;
