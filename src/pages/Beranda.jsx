

import bghome from "../assets/IMG-20240220-WA0005.webp";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import checklist from "../assets/checklist.png";


import { Link } from "react-router";

import GajiBiayaHidupDiJepang from "../../src/assets/magang-kenshusei/gaji-biaya-hidup-dijepang.png";

export default function Beranda() {

    return (
        <>
            {/* Kaizen SEO */}
            <title>Kerja ke Jepang | LPK Yaruki Solusi Indonesia</title>
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="LPK Yaruki Solusi Indonesia adalah lembaga pelatihan bahasa Jepang dan pengiriman tenaga kerja ke Jepang. Tersedia program Magang, SSW, Engineer, hingga Kuliah sambil Magang dengan dukungan lengkap dari awal hingga akhir." />

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
                                <Link to={"https://forms.gle/f2u29zDjyyco48bU6"} className="btn bg-white text-blue-700 hover:bg-gray-200 font-semibold px-6 py-2 rounded">
                                    Daftar
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="text-justify text-sm bg-black/50 px-4">source Img: https://i0.wp.com/jccnetwork.id/wp-content/uploads/2024/02/IMG-20240220-WA0005.jpg?resize=1068%2C601&ssl=1</div>
                </section>
                {/* Section 2 */}
                <section className="min-h-screen p-4 flex flex-col items-center justify-center  ">
                    <div className="prose md:prose-2xl text-center md:text-2xl">
                        <h2 className="text-4xl font-bold">
                            Kerja ke
                            <span className="font-bold text-red-500">&nbsp;Jepang</span>
                        </h2>
                        <p className="text-justify indent-8 ">
                            LPK Yaruki Solusi Indonesia adalah lembaga pendidikan bahasa Jepang
                            pengirim tenaga kerja ke Jepang.
                        </p>
                        <p className="text-justify indent-8">
                            Yaruki Solusi Indonesia ingin memfasilitasi anak bangsa untuk
                            dapat berkembang dan membangun pengalaman guna mencapai mimpi masa
                            depan yang lebih baik dengan progam :
                        </p>
                    </div>
                    <div className="card bg-base-100 shadow-sm text-2xl md:w-3xl w-screen  my-4 md:my-0">
                        <div className="card-body">
                            <ul className="flex flex-col gap-2 text-lg md:text-2xl font-bold text-black">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title"><img src={checklist} alt="Ikon centang untuk program magang ke Jepang" className="w-8" loading="lazy" />Magang (Kenshusei)</h2>
                                        <p className="text-justify indent-8 font-normal md:text-lg">
                                            Program pelatihan keterampilan praktis dan pemahaman budaya kerja Jepang. kontrak Program magang 1- 3 tahun.
                                        </p>
                                        <Link to={"/magang-kenshusei"} className="btn btn-primary">Pelajari Lebih Lanjut</Link>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title"><img src={checklist} alt="Ikon centang untuk program magang ke Jepang" className="w-8" loading="lazy" />Tokutei Ginou
                                        </h2>
                                        <p className="text-justify indent-8 font-normal md:text-lg">
                                            Tokutei ginou merupakan program penyaluran tenaga kerja ke Jepang dengan menggunakan visa pekerja yang memiliki keahlian khusus di bidang tertentu.
                                        </p>
                                        <Link to={'/tokutei-ginou'} className="btn btn-primary">Pelajari Lebih Lanjut</Link>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title"><img src={checklist} alt="Ikon centang untuk program magang ke Jepang" className="w-8" loading="lazy" />Engineering</h2>
                                        <p className="text-justify indent-8 font-normal md:text-lg">
                                            Program ini dirancang untuk membantu insinyur Indonesia bekerja di Jepang.

                                        </p>
                                        <Link to={"/engineering"} className="btn btn-primary">Pelajari Lebih Lanjut</Link>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title"><img src={checklist} alt="Ikon centang untuk program magang ke Jepang" className="w-8" loading="lazy" />Kuliah Sambil Magang (Nihon Go Gakkou)</h2>
                                        <p className="text-justify indent-8 font-normal md:text-lg">
                                            Program Belajar Bahasa dan budaya Jepang. Setelah lulus program,Siswa Bisa melanjutkan Kuliah kejuruan atau langsung Berkarir di Perusahaan di Jepang.
                                        </p>
                                        <Link to={"/nihon-go-gakkou"} className="btn btn-primary">Pelajari Lebih Lanjut</Link>
                                    </div>
                                </div>

                            </ul>
                            <Link to={'/lowongan-kerja'} className="btn bg-green-500 text-white text-2xl">Lowongan Kerja</Link>
                        </div>

                    </div>
                    <h2 className="text-2xl md:text-xl pt-4">Kenapa memilih LPK Yaruki?</h2>
                    <div className="card bg-base-100 md:w-3xl shadow-sm w-screen my-4 md:my-0">
                        <div className="card-body">
                            <ul className="flex flex-col gap-2 text-sm md:text-xl font-bold">
                                <li className="flex items-center gap-2">
                                    <img src={checklist} alt="Ikon centang untuk program magang ke Jepang" className="w-6" loading="lazy" />
                                    Support Dari Awal Hingga Akhir
                                </li>
                                <li className="flex items-center gap-2">
                                    <img src={checklist} alt="Ikon centang untuk program magang ke Jepang" className="w-6" loading="lazy" />
                                    Sistem Dana Talang
                                </li>
                                <li className="flex items-center gap-2">
                                    <img src={checklist} alt="Ikon centang untuk program magang ke Jepang" className="w-6" loading="lazy" />
                                    Memiliki Training Center (Group Bisnis)
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h2 className="text-2xl md:text-xl pt-4">Gaji & Biaya Hidup di Jepang                      </h2>
                    <div className="card bg-base-100 md:w-3xl shadow-sm w-screen my-4 md:my-0">
                        <div className="card-body">
                            <img src={GajiBiayaHidupDiJepang} alt="Gaji dan biaya hidup di Jepang" className="w-full h-auto" loading="lazy" />
                        </div>
                    </div>
                </section >


            </main >
            <Footer />
        </>
    );
}
