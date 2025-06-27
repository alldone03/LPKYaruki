

import bghome from "../assets/IMG-20240220-WA0005.webp";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import checklist from "../assets/checklist.png";


import { Link } from "react-router";




export default function Beranda() {

    return (
        <>
            {/*  SEO */}


            <title>Kerja ke Jepang | LPK Yaruki Solusi Indonesia</title>
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta
                name="description"
                content="LPK Yaruki Indonesia berfokus terhadap training bahasa Jepang untuk penyaluran tenaga kerja Indonesia di berbagai bidang melalui program pelatihan khusus seperti mekanik mobil, body repair, manufacturing [maintenance,engineering,IT] dan lain-lain."
            />
            <meta property="og:title" content="Kerja ke Jepang | LPK Yaruki Solusi Indonesia" />
            <meta property="og:description" content="LPK Yaruki Solusi Indonesia adalah lembaga pelatihan bahasa Jepang dan pengiriman tenaga kerja ke Jepang. Tersedia program Magang, SSW, Engineer, hingga Kuliah sambil Magang dengan dukungan lengkap dari awal hingga akhir." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://yarukid.com/" />
            <link rel="canonical" href="https://yarukid.com/" />


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

                    <div className="grid gap-6 md:flex">
                        {[
                            {
                                title: "Magang [Kenshusei]",
                                desc: "Program pelatihan keterampilan praktis dan pemahaman budaya kerja Jepang. Kontrak Program magang 3- 5 tahun",
                                link: "/program-kami/magang-kenshusei",
                            },
                            {
                                title: "Tokutei Ginou",
                                desc: "Tokutei ginou merupakan program penyaluran tenaga kerja ke Jepang dengan menggunakan visa pekerja yang memiliki keahlian khusus di bidang tertentu.",
                                link: "/program-kami/tokutei-ginou",
                            },
                            {
                                title: "Engineering",
                                desc: "Program ini dirancang untuk membantu insinyur Indonesia bekerja di Jepang",
                                link: "/program-kami/engineering",
                            },
                            {
                                title: "Kuliah Sambil Magang (Nihon Go Gakkou)",
                                desc: "Program Belajar Bahasa dan budaya Jepang. Setelah lulus program,Siswa Bisa melanjutkan Kuliah kejuruan atau langsung Berkarir di Perusahaan di Jepang.",
                                link: "/program-kami/nihon-go-gakkou",
                            },
                        ].map((program, idx) => (
                            <div key={idx} className="card bg-base-100 shadow-md p-4 md:w-56 md:flex justify-between">
                                <h3 className="text-xl font-semibold flex items-center gap-2">
                                    <img loading="lazy" src={checklist} alt={`Ikon program ${program.title}`} className="w-6" />
                                    {program.title}
                                </h3>
                                <p className="mt-2 indent-8 text-justify">{program.desc}</p>
                                <Link to={program.link} className="btn btn-primary mt-4" aria-label={`Pelajari tentang ${program.title}`}>
                                    Pelajari Lebih Lanjut &gt;&gt;
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
                <section className="p-4 max-w-5xl mx-auto" id="gaji-biaya-hidup-jepang">

                    <h2 className="text-3xl font-bold">Gaji dan Biaya Hidup di Jepang</h2>
                    <p className="text-justify">Berikut perbandingan biaya hidup dan potensi penghasilan dari program <strong>magang</strong>, <strong>Tokutei Ginou</strong>, <strong>visa engineering</strong>, dan <strong>pekerjaan paruh waktu</strong> di Jepang.</p>
                    <br />
                    <section>
                        <h3>1. Program Magang</h3>
                        <ul>
                            <li><strong>Gaji:</strong> ¥80,000 – ¥120,000/bulan</li>
                            <li><strong>Biaya hidup:</strong> ¥60,000 – ¥80,000/bulan (termasuk tempat tinggal)</li>
                            <li><strong>Alokasi:</strong> makan, transportasi, hiburan</li>
                        </ul>
                    </section>
                    <br />
                    <section >
                        <h3>2. Tokutei Ginou</h3>
                        <ul>
                            <li><strong>Gaji:</strong> ¥200,000 – ¥250,000/bulan</li>
                            <li><strong>Biaya hidup:</strong> ¥80,000 – ¥120,000/bulan</li>
                            <li><strong>Catatan:</strong> Peluang menabung tinggi</li>
                        </ul>
                    </section>
                    <br />
                    <section >
                        <h3>3. Visa Engineering</h3>
                        <ul>
                            <li><strong>Gaji:</strong> ¥250,000 – ¥400,000+/bulan (tergantung pengalaman)</li>
                            <li><strong>Biaya hidup:</strong> ¥100,000 – ¥150,000/bulan</li>
                            <li><strong>Fasilitas:</strong> Asuransi &amp; tunjangan</li>
                        </ul>
                    </section>
                    <br />
                    <section >
                        <h3>4. Pekerjaan Paruh Waktu (Part-time)</h3>
                        <ul>
                            <li><strong>Upah minimum:</strong>
                                <ul>
                                    <li>Tokyo: ¥1,113/jam</li>
                                    <li>Osaka: ¥1,064/jam</li>
                                </ul>
                            </li>
                            <li><strong>Batas kerja:</strong> 28 jam/minggu (untuk pelajar asing)</li>
                        </ul>
                    </section>
                    <br />
                    <p className="text-justify"><em>Dengan perencanaan keuangan yang baik dan gaya hidup hemat, Anda dapat mengoptimalkan penghasilan dan mencapai tujuan finansial Anda di Jepang.</em></p>


                </section>
            </main >
            <Footer />
        </>
    );
}
