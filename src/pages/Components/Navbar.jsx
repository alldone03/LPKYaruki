import { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router";
import jpnflag from "../../assets/japan-flag.png";
import { useNavbar } from "../../context/NavbarContext";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Kalau scrollY > 50, berarti sudah scroll ke bawah
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const { navbarLinks } = useNavbar();

  return (
    <nav role="navigation" aria-label="Navigasi Utama" className="fixed top-0 left-0 right-0 z-50 bg-black/50 shadow-md">
      {/* Mobile Navbar */}
      <div
        className={`navbar fixed top-0 left-0 right-0 bg-black/50 shadow-sm transition-all duration-300 md:hidden ${showNavbar ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
      >
        <div className="flex-1">
          <Link to={window.location.origin}>
            <img src={Logo} alt="Logo LPK Yaruki" className="h-12 rounded-sm" />
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <button
              className="btn btn-square btn-ghost"
              tabIndex={0}
              role="button"
              aria-label="Menu Navigasi"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-2 w-72 p-2 shadow-sm">
              {navbarLinks.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="block px-4 py-2 hover:bg-gray-100">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div
        className={`fixed top-0 left-0 right-0 transition-all duration-300 hidden md:block ${showNavbar ? "bg-white text-black shadow-sm" : "backdrop-blur-sm bg-black/50 text-white"}`}
      >
        <div className="navbar flex items-center justify-between px-4 h-16">
          <Link to={window.location.origin}>
            <img src={Logo} alt="Logo LPK Yaruki" className="h-16 rounded-md" />
          </Link>

          <ul className={`flex space-x-4 text-2xl transition-colors duration-300 ${showNavbar ? "text-black" : "text-white"}`}>
            {navbarLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="block px-4 py-2 hover:rounded hover:bg-gray-100 hover:text-black"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-full w-24 px-2">
            <img src={jpnflag} alt="Bendera Jepang" />
          </div>
        </div>
      </div>
    </nav>
  );
}
