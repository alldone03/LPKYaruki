import { Link } from "react-router";
import Logo from "../../assets/logo.webp";
import { useNavbar } from "../../context/NavbarContext";



export default function Footer() {

  const { navbarLinks } = useNavbar();

  return (
    <>
      {/* // floating */}
      <div className="fixed bottom-0 right-0  z-50 flex flex-col justify-center items-stretch gap-2 p-4  shadow-sm md:hidden">

        <a href="mailto:yaruki.solusi.indonesia@gmail.com"><button className="btn bg-white text-black border-[#e5e5e5] w-full">

          Email Admin
        </button></a>
        <a href="https://wa.me/+62811918538" target="_blank" rel="noopener noreferrer">
          <button className="btn bg-[#03C755] text-white border-[#00b544] w-full">
            WA Admin
          </button></a>
      </div>
      <footer className="bg-base text-base-content p-10 outline outline-primary">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <Link to={window.location.origin}>
              <img src={Logo} alt="Logo LPK Yaruki" className="h-24 rounded-sm" />
            </Link>
            <h2 className="text-3xl font-bold mt-4">LPK Yaruki Indonesia</h2>
            <p className="text-lg mt-2">
              "Share Value, Membangun Manusia, Membangun Bangsa Indonesia"
            </p>
          </div>

          <nav>
            <h3 className="text-xl font-semibold mb-2">Menu</h3>
            <ul className="flex flex-col gap-2 list-none">
              {navbarLinks.map((link, index) =>
                link.children ? (
                  <li key={index}>
                    <div className="text-xl font-semibold">{link.name}</div>
                    <ul className="pl-4 flex flex-col gap-1 list-none">
                      {link.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <Link to={child.path} className="link link-hover">
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={index}>
                    <Link to={link.path} className="text-xl link link-hover">
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <address className="not-italic text-md">
            <h3 className="text-xl font-semibold mb-2">Kontak</h3>
            <p>
              Jl Merak Raya H1 No. 134, Jababeka II, Desa Mekarmukti, Kec. Cikarang Utara,
              Kab. Bekasi, Jawa Barat
            </p>
            <p className="mt-2">
              <a href="https://wa.me/+62811918538" rel="noopener noreferrer" target="_blank">
                +62811918538 (Admin LPK Yaruki)
              </a>
              <br />
              <a href="mailto:yaruki.solusi.indonesia@gmail.com">yaruki.solusi.indonesia@gmail.com</a>
              <br />
              <a href="https://yarukid.com" rel="noopener noreferrer" target="_blank">
                yarukid.com
              </a>
            </p>
            <p className="mt-2">Jam Operasional: Senin - Sabtu, 08.00 - 17.00</p>
          </address>
        </div>
      </footer>
    </>
  );
}
