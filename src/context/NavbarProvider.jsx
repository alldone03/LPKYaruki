import { NavbarContext } from "./NavbarContext";

const navbarLinks = [
    {
        path: "/",
        name: "Beranda",
    },
    {
        path: "/tentang-kami",
        name: "Tentang Kami",
    },
    {
        path: "/program-kami",
        name: "Program Kami",
        children: [
            // { path: "/program-kami", name: "Program Kami" },
            { path: "/program-kami/magang-kenshusei", name: "Magang [Kenshusei]" },
            { path: "/program-kami/tokutei-ginou", name: "Tokutei Ginou" },
            { path: "/program-kami/engineering", name: "Engineering" },
            { path: "/program-kami/nihon-go-gakkou", name: "Nihon Go Gakkou" },
        ],
    },
    {
        path: "/lowongan-kerja",
        name: "Lowongan kerja",
    },
    // {
    //     path: "/artikel",
    //     name: "Artikel",

    // },
];

export const NavbarProvider = ({ children }) => {
    return (
        <NavbarContext.Provider value={{ navbarLinks }}>
            {children}
        </NavbarContext.Provider>
    );
};
