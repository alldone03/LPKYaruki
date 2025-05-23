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
    },
];

export const NavbarProvider = ({ children }) => {
    return (
        <NavbarContext.Provider value={{ navbarLinks }}>
            {children}
        </NavbarContext.Provider>
    );
};
