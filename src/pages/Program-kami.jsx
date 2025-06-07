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
                                        Target lulus JLPT N5 (150 jam) atau N4 (300 jam) setara 3-4 bulan pembelajaran intensif.
                                    </div>
                                </div>
                            </li>
                            <li className="step step-primary card pr-4 text-accent-content shadow-sm py-2">
                                <div className="flex flex-col gap-2">
                                    <div className="font-bold text-lg text-center">Pelatihan Skill</div>
                                    <div className="text-justify indent-8">
                                        Pelatihan pengelasan, perawatan mesin, ERP, dan keterampilan kerja dasar lainnya.
                                    </div>
                                </div>
                            </li>
                            <li className="step step-primary card pr-4 text-accent-content shadow-sm py-2">
                                <div className="flex flex-col gap-2">
                                    <div className="font-bold text-lg text-center">Penempatan Kerja</div>
                                    <div className="text-justify indent-8">
                                        Penyaluran ke perusahaan di Jepang maupun Indonesia sesuai dengan sertifikasi bahasa dan keahlian.
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
                                    {["Magang (Jishusei)", "SSW/TG (Tokutei Ginou)", "Engineering", "Nihon Go Gakkou (Kuliah + Kerja Part-time)"].map((item, i) => (
                                        <li key={i} className="flex items-center">
                                            <svg className="size-4 me-2 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
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

                {/* Informasi Magang */}
                <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="card w-full bg-info text-info-content shadow-sm">
                        <div className="card-body">
                            <h2 className="text-3xl font-bold">Informasi Magang (Kenshusei)</h2>
                            <p className="mt-6 text-lg">
                                Program pelatihan kerja praktis di Jepang dengan durasi kontrak 1-3 tahun. Fokus pada pengembangan keterampilan teknis dan pemahaman budaya kerja Jepang.
                            </p>

                            <h3 className="font-bold text-2xl mt-6">Persyaratan Peserta Magang</h3>
                            <ul className="mt-2 flex flex-col gap-2 text-lg">
                                {PersyaratanMagang.map((item, index) => (
                                    <li key={index}>{index + 1}. {item}</li>
                                ))}
                            </ul>

                            <h3 className="font-bold text-2xl mt-6">Fasilitas dari Perusahaan</h3>
                            <ul className="mt-2 flex flex-col gap-2 text-lg">
                                {FasilitasMagang.map((item, index) => (
                                    <li key={index}>{index + 1}. {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>



            <Footer />
        </>
    );
}