import bghome from "../assets/IMG-20240220-WA0005.webp";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Picture1 from "../assets/program-kami/Picture1.png";
import Picture2 from "../assets/program-kami/Picture2.png";
import Picture3 from "../assets/program-kami/Picture3.png";

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
            <Navbar />
            {/* Section 1 */}
            <main>

                <section
                    style={{ "--image-url": `url(${bghome})` }}
                    className="min-h-screen bg-[image:var(--image-url)] bg-cover bg-fixed bg-center bg-no-repeat text-center"
                >
                    <div className="h-screen bg-black/50 backdrop-blur-none">
                        <div className="md:bg-opacity-50 px-4 pt-72 md:flex md:flex-col md:items-center md:justify-center">
                            <article className="prose lg:prose-xl text-center text-white">
                                <h1 className="text-5xl font-bold text-white md:text-8xl">
                                    Program Kami
                                </h1>
                                <p className="indent-8">
                                    "Share Value, Membangun Manusia, Membangun Bangsa Indonesia"
                                </p>
                            </article>


                        </div>
                    </div>
                </section>

                {/* Section 2 */}

                <section className="bg-white">
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-gray-900">Fasilitas</h2>
                        <div className=" grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 p-6">

                            <img src={Picture1} alt="kelas" />
                            <img src={Picture2} alt="kelas" />
                            <img src={Picture3} alt="kelas" />

                        </div>
                        <p className="mt-4 text-lg text-gray-500 text-justify indent-8">
                            Kami menyediakan fasilitas yang memadai untuk siswa yang mengikuti program pelatihan Bahasa,budaya & ketrampilan dari awal hingga berangkat ke Jepang.
                        </p>
                    </div>
                </section>
                {/* section 3 */}
                <section>
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-gray-900">Tahapan Proses</h2>
                        <ul className="steps steps-vertical mt-4">
                            <li className="step step-primary card pr-4 text-accent-content shadow-sm py-2">
                                <div className="flex flex-col gap-2">
                                    <div className="font-bold text-lg text-center ">
                                        Kursus Bahasa Jepang
                                    </div>
                                    <div className="text-justify indent-8">Lembaga kami memberikan program kursus bahasa Jepang dengan target lulus JLPT N5 [150 jam] atau N4 [300 jam] setara 3-4 bulan pembelajaran.
                                    </div>
                                </div>
                            </li>
                            <li className="step step-primary card pr-4 text-accent-content shadow-sm py-2">
                                <div className="flex flex-col gap-2">
                                    <div className="font-bold text-lg text-center ">
                                        Pelatihan Skill
                                    </div>
                                    <div className="text-justify indent-8">Dalam naungan PT Yaruki Solusi Indonesia, kami memberikan pelatihan keterampilan seperti pengelasan, perawatan mesin, sistem ERP dan ketrampilan lainnya bagi pemula untuk meningkatkan skill.
                                    </div>
                                </div>
                            </li>
                            <li className="step step-primary card pr-4 text-accent-content shadow-sm py-2">
                                <div className="flex flex-col gap-2">
                                    <div className="font-bold text-lg text-center ">
                                        Penempatan Kerja
                                    </div>
                                    <div className="text-justify indent-8">Siswa yang memiliki sertifikat keahlian khusus dan sertifikat bahasa Jepang dapat kami salurkan sebagai karyawan di Perusahaan yang berada di Indonesia dan Jepang dengan menggunakan visa khusus pekerja asing (Magang,SSW/Tokutei Ginou & Engineer).

                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section >
                {/* section 4 */}
                <div className="bg-white"></div>
                <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="card w-96 bg-info text-info-content shadow-sm">
                        <div className="card-body">

                            <div className="flex justify-between">
                                <h2 className="text-3xl font-bold">Pilihan Program kerja</h2>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-lg">
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Magang [Jishusei]                                </span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>SSW/TG [Tokutei Ginou]                                </span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Engineering</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className=" ">Nihon Go Gakkou [Kuliah sambil kerja/part time]                                </span>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className=" mt-4 card w-96 bg-info text-info-content shadow-sm">

                        <div className="card-body">

                            <div className="flex justify-between">
                                <h2 className="text-3xl font-bold">16 bidang Pekerjaan</h2>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-lg">
                                {bidangPekerjaan.map((bidang, index) => (
                                    <li key={index} className="flex items-center">

                                        <span>{index + 1}. {bidang}</span>
                                    </li>
                                ))}


                            </ul>

                        </div>
                    </div>
                </section>
                {/* section 5 */}
                <div className="bg-white"></div>
                <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="card w-96 bg-info text-info-content shadow-sm">
                        <div className="card-body">

                            <div className="flex justify-between">
                                <h2 className="text-3xl font-bold">Magang ? [Kenshusei]</h2>
                            </div>
                            <p className="mt-6 text-lg">
                                Program pelatihan keterampilan praktis dan pemahaman budaya kerja Jepang. kontrak Program magang 1- 3 tahun

                            </p>
                            <br />
                            <h2 className="font-bold text-2xl">PERSYARATAN</h2>

                            {PersyaratanMagang.map((bidang, index) => (
                                <li key={index} className="flex items-center">
                                    <span>{index + 1}. {bidang}</span>
                                </li>
                            ))}
                            <br />
                            <h2 className="font-bold text-2xl">Fasilitas dari Perusahaan
                            </h2>
                            {
                                FasilitasMagang.map((bidang, index) => (
                                    <li key={index} className="flex items-center">
                                        <span>{index + 1}. {bidang}</span>
                                    </li>
                                ))
                            }
                        </div>
                    </div>

                </section>
            </main>



            <Footer />
        </>
    );
}