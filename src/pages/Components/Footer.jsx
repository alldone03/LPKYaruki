import { Link } from "react-router";
import Logo from "../../assets/logo.png";
import { useNavbar } from "../../context/NavbarContext";



export default function Footer() {
  const homepage = import.meta.env.VITE_REACT_APP_HOMEPAGE || process.env.REACT_APP_HOMEPAGE;
  const { navbarLinks } = useNavbar();

  return (
    <>
      {/* // floating */}
      <div className="fixed bottom-0 right-0  z-50 flex flex-col justify-center gap-2 p-4  shadow-sm md:hidden">

        <a href="mailto:admin@yarukid.com"><button className="btn bg-white text-black border-[#e5e5e5]">
          <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
          Email Admin
        </button></a>
        <a href="https://wa.me/+62811918538" target="_blank" rel="noopener noreferrer">
          <button className="btn bg-[#03C755] text-white border-[#00b544]">
            <svg aria-label="Line logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fillRule="evenodd" strokeLinejoin="round" fill="white"><path fillRule="nonzero" d="M12.91 6.57c.232 0 .42.19.42.42 0 .23-.188.42-.42.42h-1.17v.75h1.17a.42.42 0 1 1 0 .84h-1.59a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42h1.59a.42.42 0 0 1-.002.84h-1.17v.75h1.17zm-2.57 2.01a.421.421 0 0 1-.757.251l-1.63-2.217V8.58a.42.42 0 0 1-.42.42.42.42 0 0 1-.418-.42V5.4a.418.418 0 0 1 .755-.249L9.5 7.366V5.4c0-.23.188-.42.42-.42.23 0 .42.19.42.42v3.18zm-3.828 0c0 .23-.188.42-.42.42a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42.23 0 .418.19.418.42v3.18zM4.868 9h-1.59c-.23 0-.42-.19-.42-.42V5.4c0-.23.19-.42.42-.42.232 0 .42.19.42.42v2.76h1.17a.42.42 0 1 1 0 .84M16 6.87C16 3.29 12.41.376 8 .376S0 3.29 0 6.87c0 3.208 2.846 5.896 6.69 6.405.26.056.615.172.705.394.08.2.053.518.026.722 0 0-.092.565-.113.685-.035.203-.16.79.693.432.854-.36 4.607-2.714 6.285-4.646C15.445 9.594 16 8.302 16 6.87"></path></g></svg>
            WA Admin
          </button></a>
      </div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside>
          <img src={Logo} alt="Logo" className="h-24 rounded-sm" />
          <p >
            <div className="text-3xl font-bold">LPK Yaruki</div>
            <br />
            <div className="text-lg">

              "Share Value, Membangun Manusia, Membangun Bangsa Indonesia"
            </div>
            <br />
            <div className="flex flex-col gap-2 mt-2">
              <ul className="list-outside list-disc">


                {navbarLinks.map((link, index) => (
                  <li>
                    <Link
                      key={index}
                      to={link.path}
                      className="text-sm text-blue-500 hover:underline"
                    >
                      {link.name}
                    </Link></li>
                ))}
              </ul>
            </div>
            <br />
            <div className="text-sm">
              Jl Merak Raya H1 No. 134 Jababeka II, Desa Mekarmukti, Kecamatan
              Cikarang Utara, Kabupaten Bekasi, Jawa Barat
            </div>
            <br />
            <div className="text-sm">
              <a href="https://wa.me/+62811918538" > Whatsapp (Hasbian)</a>
              <br />
              <a href="mailto:admin@yarukid.com">admin@yarukid.com</a>
              <br />
              <Link
                href={homepage}
                className="text-blue-500 hover:underline"
              >
                {homepage}
              </Link>
            </div>
            <br />
            {/* jam kerja */}
            <div className="text-sm">
              Senin - Minggu : 08.00 - 19.00
              <br />
            </div>
          </p>
        </aside>

      </footer>
    </>
  );
}
