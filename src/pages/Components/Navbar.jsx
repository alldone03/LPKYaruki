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
    <nav>
      <div
        className={`navbar fixed top-0 right-0 left-0 z-50 bg-white shadow-sm transition-all duration-300 ${showNavbar ? "opacity-100 md:hidden" : "pointer-events-none opacity-0"
          }`}
      >
        <div className="flex-1">
          {/* <a className="btn btn-gho*st text-xl">LPK Yaruki</a> */}

          <Link to={window.location.origin} >

            <img src={Logo} alt="Logo" className="h-12 rounded-sm" />
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <button
              className="btn btn-square btn-ghost"
              tabIndex={0}
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>{" "}
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-2 w-72 p-2 shadow-sm md:hidden"
            >
              {navbarLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* desktop */}
      <div
        className={`${showNavbar ? "hidden" : "block"
          } fixed top-0 right-0 left-0 z-50 shadow-sm transition-all duration-300 md:block`}
      >
        <div
          className={`navbar z-50 flex h-16 min-w-screen items-center justify-between px-4 ${showNavbar ? "md:bg-white" : "backdrop-blur-sm md:shadow-sm"
            } ${showNavbar ? "md:shadow-sm" : "md:shadow-none"
            } fixed top-0 right-0 left-0 transition-all duration-300`}
        >
          <div className="ml-2 flex flex-col items-center justify-center">
            <Link to={window.location.origin} className="">
              <img src={Logo} alt="Logo" className="h-16 rounded-md" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div
              className={`flex h-full list-none items-center justify-center text-2xl ${showNavbar ? "text-black" : "text-white"
                } `}
            >
              {navbarLinks.map((item, index) => (
                <li className="" key={index}>
                  <Link
                    to={item.path}
                    className="block px-4 py-2 hover:rounded hover:bg-gray-100 hover:text-black text-center"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </div>
          </div>
          <div className="h-full w-24 px-2">

            <img src={jpnflag} alt="JPNFlag" />
          </div>
        </div>
      </div>
    </nav>
  );
}
