

import bghome from "../assets/IMG-20240220-WA0005.webp";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import checklist from "../assets/checklist.webp";


import summaryImg from "../assets/Summary.webp";
import keuntungan_wlp from "../assets/keuntungan_wlp.webp";
import pelatihan_kerja_jepang from "../assets/Program Pelatihan Menuju Kerja ke Jepang (SSW).webp";
import foto1 from "../assets/dokumentasi-jp/Picture1.webp"
import foto2 from "../assets/dokumentasi-jp/Picture2.webp"
import foto3 from "../assets/dokumentasi-jp/Picture3.webp"
import foto4 from "../assets/dokumentasi-jp/Picture4.webp"
import sampleImage from "../assets/sampleImage.webp"
import Picture1 from "../assets/program-kami/Picture1.webp";
import Picture2 from "../assets/program-kami/Picture2.webp";
import Picture3 from "../assets/program-kami/Picture3.webp";


import { Link } from "react-router";




export default function Beranda() {
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
        "Gaji mulai 160.000 Yen atau Rp 17 juta/Bulan",
        "Asrama/tempat tinggal",
        "Asuransi Kesehatan & keselamatan kerja",
        "Kontrak mulai dari 1-3 tahun dan bisa diperpanjang",
    ];

    return (
        <>
            {/*  SEO */}


            <title>Program Kerja ke Jepang</title>
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <meta name="description" content="LPK Yaruki Solusi Indonesia adalah lembaga pelatihan bahasa Jepang dan penempatan kerja ke Jepang. Menyediakan program pelatihan lengkap seperti magang, SSW, engineer, hingga kuliah sambil magang, dengan bidang kerja seperti mekanik mobil, body repair, manufacturing, maintenance, engineering, dan IT." />
            <meta name="keywords" content="LPK Yaruki, pelatihan Jepang, magang Jepang, kerja di Jepang, program kerja ke Jepang, SSW, Tokutei Ginou, engineering, Nihon Go Gakkou, bidang pekerjaan Jepang, training bahasa Jepang, mekanik mobil, body repair, manufacturing, maintenance, IT" />
            <meta name="author" content="LPK Yaruki Solusi Indonesia" />


            <meta property="og:title" content="Program Kerja ke Jepang" />
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
                            aria-label="Daftar Program Kerja ke Jepang"
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
                {/* Program dan Pekerjaan */}
                <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center my-6">
                        Layanan Kami
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="card w-full outline outline-info text-info-content shadow-sm">
                            <div className="card-body">
                                <h3 className="text-2xl font-bold mb-4 text-blue-800 text-center">Program Kerja di Jepang</h3>
                                <ul className="mt-6 flex flex-col gap-2 text-lg">
                                    <div className="grid gap-6 md:grid-cols-2 ">
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
                                                    <img loading="lazy"
                                                        src={checklist} alt={`Ikon program ${program.title}`} className="w-6" />
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
                        <div className="card w-full outline outline-info text-info-content shadow-sm">
                            <div className="card-body">
                                <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">16 Bidang Pekerjaan Tersedia</h2>
                                <ul className="mt-6 flex flex-col gap-2 text-lg">
                                    {bidangPekerjaan.map((bidang, index) => (
                                        <li key={index}>{index + 1}. {bidang}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Fasilitas Section */}
                <section className="bg-white">

                    <div className="max-w-7xl mx-auto py-16 md:py-2 px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">Fasilitas Pelatihan</h2>
                        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 p-6">
                            <div className="h-96 w-full overflow-hidden rounded-lg shadow-md ">

                                <img loading="lazy"
                                    src={Picture1} alt="Ruang kelas pelatihan bahasa Jepang" className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                            <div className="h-96 w-full overflow-hidden rounded-lg shadow-md ">

                                <img loading="lazy"
                                    src={Picture2} alt="Fasilitas pelatihan teknis seperti pengelasan" className="w-full h-full object-cover aspect-square" />
                            </div>
                            <div className="h-96 w-full overflow-hidden rounded-lg shadow-md ">

                                <img loading="lazy"
                                    src={Picture3} alt="Asrama siswa program ke Jepang" className="w-full h-full object-cover aspect-square" />
                            </div>
                        </div>
                        <p className="mt-4 text-lg text-gray-500 text-justify indent-8">
                            Kami menyediakan fasilitas lengkap dan representatif bagi siswa dalam mengikuti pelatihan bahasa Jepang, budaya kerja, serta keterampilan teknis dari awal hingga proses keberangkatan ke Jepang.
                        </p>
                    </div>
                </section>

                {/* Proses Tahapan */}
                <section>
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-2">
                        <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">Tahapan Proses Pelatihan</h2>
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



                <section className="max-w-5xl mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">Program Pelatihan Menuju Kerja ke Jepang (SSW)</h2>
                    <p className="mb-6 text-gray-700">
                        Program ini berlangsung selama <strong>3–4 bulan</strong> dan dirancang untuk mempersiapkan peserta bekerja di Jepang.
                        Materi pelatihan meliputi bahasa Jepang, mentalitas kerja, serta keterampilan teknis sesuai kebutuhan industri.
                    </p>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">📚 1. Materi Umum (Basic Skill)</h3>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Bahasa Jepang:</strong> Target minimal JLPT N4 (300 jam)</li>
                            <li><strong>Basic Mentality &amp; GL Role:</strong> Sikap hormat &amp; pemahaman peran kerja (role playing).</li>
                            <li><strong>Safety &amp; 5S Genba &amp; Office:</strong> Mindset safety &amp; abnormality management (SFM).</li>
                            <li><strong>Lean Operation (Toyota Production System):</strong> Dasar efisiensi kerja berbasis SFM.</li>
                            <li><strong>Standardized Work:</strong> Alat &amp; metode kerja standar, serta latihan penanganan abnormalitas.</li>
                            <li><strong>HO REN SO &amp; Interview:</strong> Pelatihan komunikasi kerja &amp; simulasi wawancara.</li>
                        </ol>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">🛠 2. Materi Khusus (Unique Skill / Customized)</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li><strong>Training Keahlian Khusus (SSW):</strong> Skill disesuaikan dengan kebutuhan customer dan bidang kerja di Jepang.</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">📝 3. Tes Akhir</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li><strong>Test SSW &amp; Interview:</strong> Ujian teori &amp; wawancara secara online atau offline.</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">📌 Informasi Tambahan</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Durasi pelatihan: <strong>3–4 bulan</strong></li>
                            <li>Peserta: Pada posisi engineer, batas usia juga maksimal 35 tahun, kecuali jika terdapat pengecualian dari pihak End User (perusahaan).</li>
                            <li>Rasio pengajar: 1 guru untuk 20–25 siswa</li>
                            <li>Metode: 20–30% teori, 70–80% simulasi / role playing</li>
                        </ul>
                    </div>
                    <img src={pelatihan_kerja_jepang} alt="Struktur program pelatihan kerja ke Jepang untuk peserta SSW" className="w-full rounded-lg shadow-md" loading="lazy" />
                </section>



                <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">Apa Keuntungannya Mengikuti Program Kerja ke Jepang?</h2>
                    <p class="text-gray-700 mb-6">
                        Program ini memberikan manfaat besar bagi <strong class="text-blue-700">Perusahaan</strong>, <strong class="text-blue-700">Karyawan</strong> (magang, kontrak, tetap), dan juga <strong class="text-blue-700">ex-Karyawan</strong>.
                    </p>

                    <div class="mb-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">1. Keuntungan untuk Perusahaan:</h3>
                        <ul class="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong class="text-gray-800">Meningkatkan daya saing</strong> dalam proses <em>recruitment</em>.</li>
                            <li><strong class="text-gray-800">Menumbuhkan kebanggaan perusahaan</strong>, karena semua jenis karyawan diberi kesempatan untuk belajar Bahasa Jepang dan berkarir ke luar negeri.</li>
                            <li><strong class="text-gray-800">Menambah pendapatan koperasi karyawan</strong> melalui sistem pembiayaan bersama atau dana talangan.</li>
                        </ul>
                    </div>

                    <div class="mb-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">2. Keuntungan untuk Karyawan (Magang, Kontrak, Tetap):</h3>
                        <ul class="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong class="text-gray-800">Meningkatkan daya saing</strong> melalui skill dan pengetahuan Bahasa serta Budaya Jepang.</li>
                            <li><strong class="text-gray-800">Memperkuat moral dan hubungan</strong> antara karyawan, perusahaan, serikat pekerja, dan lingkungan (CSR).</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">3. Keuntungan untuk Ex-Karyawan:</h3>
                        <ul class="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong class="text-gray-800">Mendapatkan kesempatan karir di luar negeri</strong> dengan potensi penghasilan 3–4 kali lebih besar dari sebelumnya.</li>
                            <li><strong class="text-gray-800">Membanggakan keluarga</strong>.</li>
                            <li><strong class="text-gray-800">Mengurangi angka pengangguran</strong> di lingkungan sekitar.</li>
                        </ul>
                    </div>
                    <img src={keuntungan_wlp} alt="Keuntungan program kerja ke Jepang bagi perusahaan, karyawan, dan ex-karyawan" loading="lazy" width="100%" />
                </section>

                <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">Working Life Plan (WLP) – Program Kerja ke Jepang</h2>
                    <p className="indent-8">Program WLP menawarkan 4 jalur utama bagi warga Indonesia yang ingin bekerja atau studi di Jepang: Magang, TG/SSW, Engineer, dan Nihon Go Gakkou. Setiap jalur memiliki tahapan, syarat, dan peluang kerja yang berbeda.</p>
                    <img src={summaryImg} alt="Diagram Program Working Life Plan untuk Kerja ke Jepang" loading="lazy" width="100%" />
                    <p class="text-gray-800 font-semibold mb-2">Penjelasan:</p>
                    <ul class="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                            <strong class="text-gray-800">Magang:</strong> Minimal N5, kontrak wajib 3 tahun, bisa lanjut ke SSW-1 &amp; SSW-2, dan akhirnya menjadi permanent resident.
                        </li>
                        <li>
                            <strong class="text-gray-800">TG/SSW:</strong> Minimal N4, persiapan 8 bulan, masuk SSW-1, lalu lanjut ke SSW-2 hingga maksimal 5 tahun.
                        </li>
                        <li>
                            <strong class="text-gray-800">Engineer:</strong> Minimal N3, langsung bekerja setelah persiapan 10 bulan, merupakan jalur cepat menuju resident tetap.
                        </li>
                        <li>
                            <strong class="text-gray-800">Nihon Go Gakkou:</strong> Kuliah bahasa dan budaya, kerja part time, lanjut kuliah S1, dan bisa masuk ke jalur SSW-1/2 setelah lulus.
                        </li>
                    </ul>

                    <p class="mt-4 text-sm text-red-600 italic">Catatan: Hanya jalur SSW-2 yang memperbolehkan membawa keluarga ke Jepang.</p>

                </section>

                <section className="p-6 max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-800">Job Data - Lowongan Magang Jepang 2025</h2>
                    <img src={sampleImage} alt="Sample Job Database" className="mb-6 rounded shadow-lg w-full" />
                    <p className="text-lg mb-2">Total sudah terkirim: <strong className="text-blue-600">+50 pekerja</strong> (2021–2024)</p>
                    <p className="text-lg mb-6">Sedang progress: <strong className="text-blue-600">+25 pekerja</strong> (hingga Juli 2025)</p>

                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border border-gray-300 text-sm">
                            <thead className="bg-yellow-300 text-left">
                                <tr>
                                    <th className="px-3 py-2 border">No</th>
                                    <th className="px-3 py-2 border">Nama Perusahaan</th>
                                    <th className="px-3 py-2 border">Bidang</th>
                                    <th className="px-3 py-2 border">Lokasi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "YUBIS Co.,Ltd", field: "Waterproof", city: "Okayama Ken" },
                                    { name: "T.M FOOD Ltd", field: "Pengolahan Makanan", city: "Hyougo Ken" },
                                    { name: "NISHI YAMA Co.,Ltd", field: "Konstruksi", city: "Okayama Ken" },
                                    { name: "KATO KOGYO Co.,Ltd", field: "Konstruksi", city: "Hokkaido Ken" },
                                    { name: "RITSU", field: "Piping/Plumbing", city: "Hiroshima" },
                                    { name: "YAMAGUCHI", field: "Konstruksi / TOBI", city: "Okayama Ken" },
                                    { name: "FUKASHIRO", field: "Konstruksi / TOBI", city: "Fukuyama" },
                                    { name: "KOKEN", field: "Konstruksi / TOBI", city: "Okayama Ken" },
                                    { name: "CHUGOKU TEKKO", field: "Welding", city: "Hiroshima" },
                                    { name: "SHELL", field: "Foundry", city: "Shiga" }
                                ].map((job, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="px-3 py-2 border text-center">{index + 1}</td>
                                        <td className="px-3 py-2 border">{job.name}</td>
                                        <td className="px-3 py-2 border">{job.field}</td>
                                        <td className="px-3 py-2 border">{job.city}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </section>
                <section className="px-4 py-6 max-w-3xl mx-auto">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">Simulasi Payment Program SSW/TG</h2>
                        <article>
                            <h3 className="font-semibold text-blue-600">✔ Full Payment</h3>
                            <ol className="list-decimal ml-6 text-gray-800">
                                <li>
                                    <strong>37,5 juta</strong> – Bila pembayaran <strong>cash di awal masuk</strong>
                                </li>
                            </ol>
                        </article>
                        <article className="mt-4">
                            <h3 className="font-semibold text-blue-600">✔ Cicilan / Dana Talang</h3>
                            <div className="Flex justify-items-end">
                                <p className="text-sm text-blue-600 text-center font-semibold bg-pink-200 max-w-96 ">
                                    Dana talang : 30-45jt/siswa
                                    [setelah COE keluar]
                                </p>
                            </div>
                            <ol className="list-decimal ml-6 text-gray-800">
                                <li>
                                    <strong>40 juta</strong> – Jika pembayaran dicicil minimal 15 juta tiap 2 bulan sampai lunas
                                </li>
                                <li>
                                    <strong>42,5 juta</strong> – Jika pembayaran dicicil minimal 5 juta per bulan sampai lunas
                                </li>
                                <li>
                                    <strong>45 juta</strong> – Jika pembayaran di awal 5 juta, dan cicilan minimal 2,5 juta per bulan sampai lunas
                                </li>
                                <li classname="rounded-b-md">
                                    <div className="bg-green-200">

                                        <strong>47,5 juta</strong> – Jika pembayaran di awal 5 juta, tiap ada pembayaran eksternal (biaya sendiri),
                                        dan <strong>sisa uang dibayarkan setelah di Jepang</strong>
                                    </div>
                                </li>
                            </ol>
                        </article>
                    </div>

                </section>

                <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">Foto &amp; Testimonial [LPK Yaruki-Kamindo Group]</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                        <div className="h-96 w-full overflow-hidden rounded-lg shadow-md ">
                            <img src={foto1} alt="Keberangkatan peserta LPK Kamindo ke Jepang" className="w-full h-full object-cover aspect-square" />
                        </div>
                        <div className="h-96 w-full overflow-hidden rounded-lg shadow-md">
                            <img src={foto2} alt="Peserta LPK Kamindo di Jepang depan bangunan pertokoan" className="w-full h-full object-cover aspect-square" />
                        </div>
                        <div className="h-96 w-full overflow-hidden rounded-lg shadow-md">
                            <img src={foto3} alt="Peserta LPK Kamindo di musim salju Jepang" className="w-full h-full object-cover aspect-square " />
                        </div>
                        <div className="h-96 w-full overflow-hidden rounded-lg shadow-md">
                            <img src={foto4} alt="Peserta LPK Kamindo di lokasi konstruksi Jepang" className="w-full h-full object-cover aspect-square " />
                        </div>
                    </div>
                </section>
            </main >
            <Footer />
        </>
    );
}
