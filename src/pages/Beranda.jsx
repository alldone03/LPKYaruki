

import bghome from "../assets/IMG-20240220-WA0005.webp";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import checklist from "../assets/checklist.png";


export default function Beranda() {
    return (
        <>



            {/* Kaizen SEO */}
            <title>kerja ke Jepang | LPK Yaruki Solusi Indonesia</title>
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="RPK Yaruki Solusi Indonesia adalah lembaga pelatihan bahasa Jepang dan pengiriman tenaga kerja ke Jepang. Tersedia program Magang, SSW, Engineer, hingga Kuliah sambil Magang dengan dukungan lengkap dari awal hingga akhir." />

            {/* // center phone */}
            <Navbar />
            <main>

                {/* Section 1 */}
                <section
                    style={{ "--image-url": `url(${bghome})` }}
                    className="min-h-screen bg-[image:var(--image-url)] bg-cover bg-fixed bg-center bg-no-repeat text-center"
                >
                    <div className=" h-screen backdrop-blur-none bg-black/50">
                        <div className="px-4 pt-72  md:flex md:flex-col md:items-center md:justify-center md:bg-opacity-50">
                            <article className="prose lg:prose-xl text-center text-white">
                                <h1 className="text-5xl font-bold text-white md:text-8xl">
                                    Kerja ke
                                    <span className="text-red-500">&nbsp;Jepang</span>
                                </h1>
                                <p className="indent-8">
                                    "Share Value, Membangun Manusia, Membangun Bangsa Indonesia"
                                </p>
                            </article>

                            <div className="mt-8 flex justify-center">
                                <button className="btn bg-white text-blue-700 hover:bg-gray-200 font-semibold px-6 py-2 rounded">
                                    Daftar
                                </button>
                            </div>
                        </div>

                    </div>

                </section>
                {/* Section 2 */}
                <section className="min-h-screen px-4 flex flex-col items-center justify-center  ">
                    <p class="prose md:prose-2xl text-center md:text-2xl">
                        <h2 className="text-4xl font-bold">
                            Kerja ke
                            <span className="font-bold text-red-500">&nbsp;Jepang</span>
                        </h2>
                        <p className="text-justify indent-8 ">
                            RPK Yaruki Solusi Indonesia adalah lemabaga pendidikan bahasa Jepang
                            pengirim tenaga kerja ke Jepang.
                        </p>
                        <p className="text-justify indent-8">
                            PT. Yaruki Solusi Indonesia ingin memfasilitasi anak bangsa untuk
                            dapat berkembang dan membangun pengalaman guna mencapai mimpi masa
                            depan yang lebih baik dengan progam :
                        </p>
                    </p>
                    <div className="card bg-base-100 shadow-sm text-2xl md:w-3xl w-screen  my-4 md:my-0">
                        <div className="card-body">
                            <ul className="flex flex-col gap-2 text-lg md:text-xl font-bold">
                                <li className="flex items-center gap-2">
                                    <img src={checklist} alt="Ikon centang untuk program magang ke Jepang" className="w-8" loading="lazy" />
                                    Magang (Jishusei)
                                </li>
                                <li className="flex items-center gap-2">
                                    <img src={checklist} alt="Ikon centang untuk program magang ke Jepang" className="w-8" loading="lazy" />
                                    SSW/TG (Spesified Skill Worker/ Tokutei Ginou)
                                </li>
                                <li className="flex items-center gap-2">
                                    <img src={checklist} alt="Ikon centang untuk program magang ke Jepang" className="w-8" loading="lazy" />
                                    Engineer
                                </li>
                                <li className="flex items-center gap-2">
                                    <img src={checklist} alt="Ikon centang untuk program magang ke Jepang" className="w-8" loading="lazy" />
                                    Kuliah Sambil Magang (Nihongo Gakkau)
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h2 className=" md:text-2xl pt-4">Kenapa memilih LPK Yaruki?</h2>
                    <div className="card bg-base-100 md:w-3xl shadow-sm w-screen my-4 md:my-0">
                        <div className="card-body">
                            <ul className="flex flex-col gap-2 text-lg md:text-xl font-bold">
                                <li className="flex items-center gap-2">
                                    <img src={checklist} alt="Ikon centang untuk program magang ke Jepang" className="w-8" loading="lazy" />
                                    Support Dari Awal Hingga Akhir
                                </li>
                                <li className="flex items-center gap-2">
                                    <img src={checklist} alt="Ikon centang untuk program magang ke Jepang" className="w-8" loading="lazy" />
                                    Sistem Dana Talang
                                </li>
                                <li className="flex items-center gap-2">
                                    <img src={checklist} alt="Ikon centang untuk program magang ke Jepang" className="w-8" loading="lazy" />
                                    Memiliki Training Center (Group Bisnis)
                                </li>
                            </ul>
                        </div>
                    </div>
                </section >
                <section className="min-h-screen px-4 flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold">
                        <span className="font-bold text-red-500">&nbsp;Lowongan Kerja</span>
                    </h2>
                    

                    <div className="mt-8 flex justify-center">

                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
