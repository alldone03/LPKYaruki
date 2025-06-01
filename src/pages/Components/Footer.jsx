import { Link } from "react-router";
import Logo from "../../assets/logo.png";
import { useNavbar } from "../../context/NavbarContext";



export default function Footer() {

  const { navbarLinks } = useNavbar();

  return (
    <>
      {/* // floating */}
      <div className="fixed bottom-0 right-0  z-50 flex flex-col justify-center gap-2 p-4  shadow-sm md:hidden">

        <a href="mailto:admin@yarukid.com"><button className="btn bg-white text-black border-[#e5e5e5]">

          Email Admin
        </button></a>
        <a href="https://wa.me/+62811918538" target="_blank" rel="noopener noreferrer">
          <button className="btn bg-[#03C755] text-white border-[#00b544]">

            WA Admin
          </button></a>
      </div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside>
          <Link to={window.location.origin} >
            <img src={Logo} alt="Logo" className="h-24 rounded-sm" />
          </Link>
          <div >
            <div className="text-3xl font-bold">LPK Yaruki</div>
            <br />
            <div className="text-lg">

              "Share Value, Membangun Manusia, Membangun Bangsa Indonesia"
            </div>
            <br />
            <nav className="flex flex-col gap-2 mt-2">

              <h6 className="footer-title text-xl">Menu</h6>

              {navbarLinks.map((link, index) => (

                <Link
                  key={index}
                  to={link.path}
                  className="text-xl link link-hover"
                >
                  {link.name}
                </Link>

              ))}

            </nav>
            <br />
            <br />
            <div className="text-md">
              Jl Merak Raya H1 No. 134 Jababeka II, Desa Mekarmukti, Kecamatan
              Cikarang Utara, Kabupaten Bekasi, Jawa Barat
            </div>
            <br />
            <div className="text-xl flex flex-col gap-2">
              <a href="https://wa.me/+62811918538" >+62811918538 (Hasbian)</a>
              <a href="mailto:admin@yarukid.com">admin@yarukid.com</a>
              <Link
                to={window.location.origin}
                className="text-blue-500 hover:underline"
              >
                yarukid.com
              </Link>
            </div>
            <br />
            {/* jam kerja */}
            <div className="text-md">
              Senin - Sabtu : 08.00 - 17.00
              <br />
            </div>
          </div>
        </aside>

      </footer>
    </>
  );
}
