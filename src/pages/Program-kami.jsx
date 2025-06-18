import bghome from "../assets/IMG-20240220-WA0005.webp";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Picture1 from "../assets/program-kami/Picture1.png";
import Picture2 from "../assets/program-kami/Picture2.png";
import Picture3 from "../assets/program-kami/Picture3.png";
import checklist from "../assets/checklist.png";
import { Link } from "react-router";

export default function ProgramKami() {

    const bidangPekerjaan = [
        "Keperawatan",
        "Manajemen Pembersihan Gedung [Maintenance Building]",
        "Pembuatan Produk Industri",
        "Industri Konstruksi",
        "Industri Pembuatan Kapal dan Permesinan Kapal",
        "Perbaikan dan Perawatan Mobil[Otomotif]",
        "Industri Penerbangan",
        "Industri Perhotelan",
        "Bisnis Transportasi Mobil",
        "Kereta Api",
        "Pertanian",
        "Perikanan & Akuakultur",
        "Pembuatan Makanan dan Minuman",
        "Industri Jasa Makanan",
        "Kehutanan",
        "Industri Kayu",
    ];

    const PersyaratanMagang = [
        "Laki-Laki atau Perempuan berusia 18-28 tahun (usia >28 tahun sesuai kebijakan perusahaan)",
        "Lulusan D3/S1 atau SMA/SMK Sederajat",
        "Tinggi badan min. 160 cm (pria) dan 150 cm (wanita)",
        "Sehat jasmani dan rohani",
        "Tidak memiliki tato, tidak memiliki alergi, tidak buta warna",
        "Memiliki SKCK (Surat Keterangan Catatan Kepolisian)",
        "Mendapat izin orang tua",
        "Lulus JLPT N5 & Interview User",
    ]
    const FasilitasMagang = [
        "Gaji mulai 160.000 Yen atau Rp 17 juta/bln",
        "Asrama/tempat tinggal",
        "Asuransi Kesehatan & keselamatan kerja",
        "Kontrak mulai dari 1-3 tahun dan bisa diperpanjang",
    ];
    return (
        <>
            <title>Program Kami | LPK Yaruki Solusi Indonesia</title>
            {/* SEO */}
            <meta name="description" content="Program pelatihan dan penempatan kerja ke Jepang oleh LPK Yaruki Solusi Indonesia. Fasilitas lengkap, tahapan pelatihan, pilihan program kerja, dan bidang pekerjaan tersedia." />
            <meta name="keywords" content="LPK Yaruki, pelatihan Jepang, magang Jepang, kerja di Jepang, program kerja Jepang, SSW, Tokutei Ginou, engineering, Nihon Go Gakkou, bidang pekerjaan Jepang" />
            <meta name="author" content="LPK Yaruki Solusi Indonesia" />
            <link rel="canonical" href="https://yaruki.co.id/program-kami" />
            {/* END SEO */}
            <Navbar />
            {/* Section 1 */}
            <main>
                {/* Hero Section */}
                <section
                    style={{ "--image-url": `url(${bghome})` }}
                    className="min-h-screen bg-[image:var(--image-url)] bg-cover bg-fixed bg-center bg-no-repeat text-center"
                >
                    <div className="h-screen bg-black/50">
                        <div className="px-4 pt-72 md:flex md:flex-col md:items-center md:justify-center">
                            <article className="prose lg:prose-xl text-white text-center">
                                <h1 className="text-5xl font-bold md:text-8xl text-white">
                                    Program Pelatihan dan Penempatan Kerja Jepang
                                </h1>
                                <p className="indent-8">
                                    Share Value, Membangun Manusia, Membangun Bangsa Indonesia.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Fasilitas Section */}
                <section className="bg-white">
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-gray-900">Fasilitas Pelatihan</h2>
                        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 p-6">
                            <img src={Picture1} alt="Ruang kelas pelatihan bahasa Jepang" />
                            <img src={Picture2} alt="Fasilitas pelatihan teknis seperti pengelasan" />
                            <img src={Picture3} alt="Asrama siswa program ke Jepang" />
                        </div>
                        <p className="mt-4 text-lg text-gray-500 text-justify indent-8">
                            Kami menyediakan fasilitas lengkap dan representatif bagi siswa dalam mengikuti pelatihan bahasa Jepang, budaya kerja, serta keterampilan teknis dari awal hingga proses keberangkatan ke Jepang.
                        </p>
                    </div>
                </section>

                {/* Proses Tahapan */}
                <section>
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-gray-900">Tahapan Proses Pelatihan</h2>
                        <ul className="steps steps-vertical mt-4">
                            <li className="step step-primary card pr-4 text-accent-content shadow-sm py-2">
                                <div className="flex flex-col gap-2">
                                    <div className="font-bold text-lg text-center">Kursus Bahasa Jepang</div>
                                    <div className="text-justify indent-8">
                                        Lembaga kami memberikan program kursus bahasa Jepang dengan target lulus JLPT N5 [150 jam] atau N4 / JFT A2 [300 jam] setara 3-4 bulan pembelajaran.
                                    </div>
                                </div>
                            </li>
                            <li className="step step-primary card pr-4 text-accent-content shadow-sm py-2">
                                <div className="flex flex-col gap-2">
                                    <div className="font-bold text-lg text-center">Pelatihan Skill</div>
                                    <div className="text-justify indent-8">
                                        Dalam naungan PT Yaruki Solusi Indonesia, kami memberikan pelatihan keterampilan seperti pengelasan, perawatan mesin, sistem ERP dan ketrampilan lainnya bagi pemula untuk meningkatkan skill.
                                    </div>
                                </div>
                            </li>
                            <li className="step step-primary card pr-4 text-accent-content shadow-sm py-2">
                                <div className="flex flex-col gap-2">
                                    <div className="font-bold text-lg text-center">Penempatan Kerja</div>
                                    <div className="text-justify indent-8">
                                        Siswa yang memiliki sertifikat keahlian khusus dan sertifikat bahasa Jepang dapat kami salurkan sebagai karyawan di Perusahaan yang berada di Indonesia dan Jepang dengan menggunakan visa khusus pekerja asing (Magang,SSW/Tokutei Ginou & Engineer).

                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Program dan Pekerjaan */}
                <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="card w-full bg-info text-info-content shadow-sm">
                            <div className="card-body">
                                <h2 className="text-3xl font-bold">Pilihan Program Kerja di Jepang</h2>
                                <ul className="mt-6 flex flex-col gap-2 text-lg">
                                    <div className="grid gap-6 md:grid-cols-2 ">
                                        {[
                                            {
                                                title: "Magang (Kenshusei)",
                                                desc: "Program pelatihan keterampilan kerja dan budaya Jepang selama 1–3 tahun.",
                                                link: "/program-kami/magang-kenshusei",
                                            },
                                            {
                                                title: "Tokutei Ginou",
                                                desc: "Program kerja dengan visa keahlian khusus di bidang tertentu seperti perhotelan, perawatan lansia, dan konstruksi.",
                                                link: "/program-kami/tokutei-ginou",
                                            },
                                            {
                                                title: "Engineering",
                                                desc: "Bekerja sebagai tenaga ahli (engineer) Indonesia di perusahaan Jepang.",
                                                link: "/program-kami/engineering",
                                            },
                                            {
                                                title: "Kuliah Sambil Magang (Nihon Go Gakkou)",
                                                desc: "Program belajar bahasa Jepang sambil bekerja, dengan peluang melanjutkan kuliah dan bekerja di Jepang.",
                                                link: "/program-kami/nihon-go-gakkou",
                                            },
                                        ].map((program, idx) => (
                                            <div key={idx} className="card bg-base-100 shadow-md p-4 md:w-56 md:flex justify-between">
                                                <h3 className="text-xl font-semibold flex items-center gap-2">
                                                    <img src={checklist} alt={`Ikon program ${program.title}`} className="w-6" loading="lazy" />
                                                    {program.title}
                                                </h3>
                                                <p className="mt-2 indent-8 text-justify">{program.desc}</p>
                                                <Link to={program.link} className="btn btn-primary mt-4" aria-label={`Pelajari tentang ${program.title}`}>
                                                    Pelajari Lebih Lanjut &gt;&gt;
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="card w-full bg-info text-info-content shadow-sm">
                            <div className="card-body">
                                <h2 className="text-3xl font-bold">16 Bidang Pekerjaan Tersedia</h2>
                                <ul className="mt-6 flex flex-col gap-2 text-lg">
                                    {bidangPekerjaan.map((bidang, index) => (
                                        <li key={index}>{index + 1}. {bidang}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Informasi Magang
                // <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                //     <div className="card w-full bg-info text-info-content shadow-sm">
                //         <div className="card-body">
                //             <h2 className="text-3xl font-bold">Informasi Magang (Kenshusei)</h2>
                //             <p className="mt-6 text-lg">
                //                 Program pelatihan kerja praktis di Jepang dengan durasi kontrak 1-3 tahun. Fokus pada pengembangan keterampilan teknis dan pemahaman budaya kerja Jepang.
                //             </p>

                //             <h3 className="font-bold text-2xl mt-6">Persyaratan Peserta Magang</h3>
                //             <ul className="mt-2 flex flex-col gap-2 text-lg">
                //                 {PersyaratanMagang.map((item, index) => (
                //                     <li key={index}>{index + 1}. {item}</li>
                //                 ))}
                //             </ul>

                //             <h3 className="font-bold text-2xl mt-6">Fasilitas dari Perusahaan</h3>
                //             <ul className="mt-2 flex flex-col gap-2 text-lg">
                //                 {FasilitasMagang.map((item, index) => (
                //                     <li key={index}>{index + 1}. {item}</li>
                //                 ))}
                //             </ul>
                //         </div>
                //     </div>
                // </section> */}
            </main>



            <Footer />
        </>
    );
}