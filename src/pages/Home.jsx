import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";



export default function Home() {
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

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            {/* // center phone */}
            <div className={`navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 transition-all duration-300 z-50  ${showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}>
                <div className="flex-1">
                    <a className="btn btn-gho*st text-xl">LPK Seiyroku</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <button className="btn btn-square btn-ghost" tabIndex={0} role="button" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                        </button>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-2 w-52 p-2 shadow-sm">
                            <li><a>Home</a></li>
                            <li><a>Tentang Kami</a></li>
                            <li><a>Keunggulan</a></li>
                            <li><a>Hubungi</a></li>
                            <li><a>Artikel</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Section 1 */}
            <div className="min-h-screen bg-amber-300 ">
                <div className="min-w-screen bg-transparent flex justify-between">


                    <div className="flex flex-col justify-center items-center">
                        <a className="btn btn-ghost text-xl">LPK Seiyroku</a>
                    </div>

                    <div className="h-full w-24 p-2">

                        <img src="https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg" alt="Japan Flag" />
                    </div>
                </div>
                <div className="px-2 pt-72">
                    <article class="prose lg:prose-xl text-center">
                        <h1>
                            Kerja
                            ke Jepang</h1>
                        <p>
                            "Share Value, Membangun Manusia, Membangun Bangsa Indonesia"
                        </p>
                    </article>
                    <button className="btn ">Daftar</button>
                </div>
            </div>
            {/* Section 2 */}
            <div className=" min-h-screen bg-red-300 px-4 pt-20 ">

                <article class="prose lg:prose-xl text-center ">
                    <h1>
                        Kerja
                        ke Jepang</h1>
                    <p className="text-justify indent-8">
                        RPK Seiyoku Solusi Indonesia adalah lemabaga pendidikan bahasa Jepang pengirim tenaga kerja ke Jepang.
                    </p>
                    <p className="text-justify indent-8">
                        PT. Seiyoku Solusi Indonesia ingin memfasilitasi anak bangsa untuk dapat berkembang dan membangun pengalaman guna mencapai mimpi masa depan yang lebih baik dengan progam :
                    </p>
                </article>
                <div className="card w-96 bg-base-100 shadow-sm my-4">
                    <div className="card-body">
                        <ul className=" flex flex-col gap-2 text-sm font-bold">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Magang (Jishusei)
                                </span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>SSW/TG (Spesified Skill Worker/ Tokutei Ginou)

                                </span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Enginerr
                                </span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Kuliah Sambil Magang (Nihongo Gakkau)
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    kenapa memilih LPK Seiyoku?
                </div>
                <div className="card w-96 bg-base-100 shadow-sm my-4">
                    <div className="card-body">
                        <ul className=" flex flex-col gap-2 text-sm font-bold">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Support Dari Awal Hingga Akhir</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Sistem Dana Talang</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Memiliki Training Center (Group Bisnis)</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <aside>
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current">
                        <path
                            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <p>
                        <div className="text-2xl font-bold">
                            LPK Seiyoku
                        </div>
                        <br />
                        "Share Value, Membangun Manusia, Membangun Bangsa Indonesia"
                        <br />
                        <br />
                        <div className="text-sm">
                            Jl. Merak Raya Blok H1 No. 134, Jababeka, Cikarang, Bekasi, Jawa Barat 17530
                        </div>
                        <br />
                        <div className="text-sm">
                            0812-1234-5678
                            <br />
                            seiyoku@gmail.com
                            <br />
                            <a href="https://www.seiyoku.co.id" className="text-blue-500 hover:underline">www.seiyoku.co.id</a>
                        </div>
                        <br />
                        {/* jam kerja */}
                        <div className="text-sm">
                            Senin - Minggu : 08.00 - 19.00
                            <br />

                        </div>


                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>
        </div >
    )
}