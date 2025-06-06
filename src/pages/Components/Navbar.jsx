
import Logo from "../../assets/logo.png";
import { Link } from "react-router";
import jpnflag from "../../assets/japan-flag.png";
import { useNavbar } from "../../context/NavbarContext";



export default function Navbar() {

  const { navbarLinks } = useNavbar();

  return (
    <div class="navbar bg-base-100 shadow-sm">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-xl dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
            {navbarLinks.map((link, index) =>
              link.children ? (
                <li key={index} >
                  <details>
                    <summary>{link.name}</summary>
                    <ul className="p-2">
                      {link.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <Link to={child.path}>{child.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              )
            )}
          </ul>
        </div>
        <Link to={window.location.origin}>
          <img src={Logo} alt="Logo LPK Yaruki" className="h-12 rounded-sm" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal menu-xl px-1 ">
          {navbarLinks.map((link, index) =>
            link.children ? (
              <li key={index}>
                <details>
                  <summary>{link.name}</summary>
                  <ul className="p-2">
                    {link.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <Link to={child.path}>{child.name}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={index}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            )
          )}
        </ul>
      </div>
      <div class="navbar-end">
        <img src={jpnflag} alt="Bendera Jepang" className="w-32" />
      </div>
    </div>
  )
}