

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


                {/* Hero Section */}
                <section
                    style={{ "--image-url": `url(${bghome})` }}
                    className="min-h-screen bg-[image:var(--image-url)] bg-cover bg-fixed bg-center bg-no-repeat text-white"
                >
                    <div className="h-screen bg-black/50 flex flex-col items-center justify-center px-4 text-center">
                        <h1 className="text-5xl md:text-7xl font-bold">
                            Kerja ke <span className="text-red-500">Jepang</span>
                        </h1>
                        <p className="mt-4 text-lg max-w-2xl">
                            "Share Value, Membangun Manusia, Membangun Bangsa Indonesia bersama LPK Yaruki Solusi Indonesia"
                        </p>
                        <Link
                            to="https://forms.gle/f2u29zDjyyco48bU6"
                            className="btn bg-white text-blue-700 hover:bg-gray-200 font-semibold mt-8 px-6 py-2 rounded"
                            aria-label="Daftar program kerja ke Jepang"
                        >
                            Daftar Sekarang
                        </Link>
                    </div>
                    <div className="text-xs text-white bg-black/50 px-4 py-1 text-right">
                        Source image: jccnetwork.id
                    </div>
                </section>

                {/* Program Section */}
                <section className="p-4 max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center my-6">
                        Program Unggulan LPK <span className="text-red-500">Yaruki</span>
                    </h2>
                    <p className="text-justify text-lg indent-8 mb-4">
                        LPK Yaruki Solusi Indonesia adalah lembaga resmi pengirim tenaga kerja ke Jepang yang berkomitmen membangun masa depan anak bangsa. Kami menghadirkan berbagai program unggulan seperti:
                    </p>

                    <div className="grid gap-6">
                        {[
                            {
                                title: "Magang (Kenshusei)",
                                desc: "Program pelatihan keterampilan kerja dan budaya Jepang selama 1–3 tahun.",
                                link: "/magang-kenshusei",
                            },
                            {
                                title: "Tokutei Ginou",
                                desc: "Program kerja dengan visa keahlian khusus di bidang tertentu seperti perhotelan, perawatan lansia, dan konstruksi.",
                                link: "/tokutei-ginou",
                            },
                            {
                                title: "Engineering",
                                desc: "Bekerja sebagai tenaga ahli (engineer) Indonesia di perusahaan Jepang.",
                                link: "/engineering",
                            },
                            {
                                title: "Kuliah Sambil Magang (Nihon Go Gakkou)",
                                desc: "Program belajar bahasa Jepang sambil bekerja, dengan peluang melanjutkan kuliah dan bekerja di Jepang.",
                                link: "/nihon-go-gakkou",
                            },
                        ].map((program, idx) => (
                            <div key={idx} className="card bg-base-100 shadow-md p-4">
                                <h3 className="text-xl font-semibold flex items-center gap-2">
                                    <img src={checklist} alt={`Ikon program ${program.title}`} className="w-6" loading="lazy" />
                                    {program.title}
                                </h3>
                                <p className="mt-2 indent-8 text-justify">{program.desc}</p>
                                <Link to={program.link} className="btn btn-primary mt-4" aria-label={`Pelajari tentang ${program.title}`}>
                                    Pelajari Lebih Lanjut
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link to="/lowongan-kerja" className="btn bg-green-500 text-white text-xl" aria-label="Lihat lowongan kerja ke Jepang">
                            Lihat Lowongan Kerja
                        </Link>
                    </div>
                </section>

                {/* Kenapa Memilih */}
                <section className="p-4 max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Kenapa Memilih LPK Yaruki?</h2>
                    <ul className="list-disc ml-6 text-lg space-y-2">
                        <li>Support dan pendampingan dari awal hingga akhir keberangkatan</li>
                        <li>Tersedia sistem dana talang (biaya bisa dibayar setelah bekerja)</li>
                        <li>Memiliki training center dan jaringan bisnis grup di Jepang</li>
                    </ul>
                </section>

                {/* Gaji dan Biaya Hidup */}
                <section className="p-4 max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Gaji dan Biaya Hidup di Jepang</h2>
                    <img
                        src={GajiBiayaHidupDiJepang}
                        alt="Informasi Gaji dan Biaya Hidup di Jepang"
                        className="w-full rounded shadow-md"
                        loading="lazy"
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}
