import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import budgetTokuteiGinou from "../../assets/magang-kenshusei/buget-tokutei-ginou.png";



export default function TokuteiGinou() {
    return (
        <>

            {/* SEO */}

            <title>Tokutei Ginou - Program Penyaluran Tenaga Kerja ke Jepang | LPK Yaruki Solusi Indonesia</title>
            <meta name="description" content="Informasi lengkap tentang program Tokutei Ginou, persyaratan, fasilitas, dan estimasi biaya penyaluran tenaga kerja ke Jepang melalui LPK Yaruki." />
            <meta name="keywords" content="Tokutei Ginou, kerja di Jepang, tenaga kerja, LPK Yaruki, visa keahlian khusus, program Jepang" />
            <meta property="og:title" content="Tokutei Ginou - Program Penyaluran Tenaga Kerja ke Jepang" />
            <meta property="og:description" content="Program Tokutei Ginou untuk penyaluran tenaga kerja ke Jepang. Cek persyaratan, fasilitas, dan estimasi biaya di LPK Yaruki." />
            <meta property="og:type" content="website" />


            {/* END SEO */}
            <Navbar />

            <main className="pt-20 p-2">
                <section>
                    <h1 className="text-3xl text-center pt-4">Tokutei Ginou
                    </h1>
                    <p className="text-justify pt-4  indent-8">Tokutei ginou merupakan program penyaluran tenaga kerja ke Jepang dengan menggunakan visa pekerja yang memiliki keahlian khusus di bidang tertentu.
                    </p>
                    <h2 className="text-2xl text-center pt-4">
                        Persyaratan
                    </h2>
                    <ul className="list-disc list-outside pl-8 pt-4 flex flex-col gap-2 ">
                        <li>Laki-Laki atau Perempuan berusia 18 sampai 28 tahun (usia 28 ke atas sesuai kebijakan perusahaan)</li>
                        <li>Lulusan D3/S1 atau SMA/SMK Sederajat</li>
                        <li>Tinggi badan min. 160 cm (pria) dan 150 cm (wanita)</li>
                        <li>Sehat jasmani dan rohani</li>
                        <li>Tidak memiliki tato, tidak memiliki alergi, tidak buta warna</li>
                        <li>Memiliki SKCK</li>
                        <li>Mendapat izin orang tua</li>
                        <li>Lulus JLPT N4/JFT A2, SSW & Interview User                        </li>
                    </ul>
                    <h2 className="text-2xl text-center pt-4">
                        Fasilitas dari Perusahaan
                    </h2>
                    <ul className="list-disc list-outside pl-8 pt-4 flex flex-col gap-2 ">
                        <li>
                            Gaji mulai 195.000 Yen atau Rp 20 juta/bln
                        </li>
                        <li>
                            Asrama/tempat tinggal
                        </li>
                        <li>
                            Asuransi Kesehatan & keselamatan kerja
                        </li>
                        <li>
                            Kontrak mulai dari 6 bulan sampai 1 tahun dan bisa diperpanjang (TG tingkat lanjut dapat bekerja dan tinggal di Jepang selamanya)
                        </li>
                    </ul>
                    <h2 className="text-2xl text-center pt-4">
                        ESTIMASI BIAYA
                    </h2>
                    <p>
                        <div className="text-2xl text-center pt-4">

                            Standar Waktu Persiapan 8 Bulan
                        </div>
                        <div className="text-2xl text-center pt-4">
                            <img src={budgetTokuteiGinou} alt="Budget Magang Kenshusei" />
                        </div>

                    </p>


                </section>



            </main>

            <Footer />

        </>
    )
}