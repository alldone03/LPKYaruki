import { createContext, useContext } from "react";

export const NavbarContext = createContext();

export const useNavbar = () => useContext(NavbarContext);