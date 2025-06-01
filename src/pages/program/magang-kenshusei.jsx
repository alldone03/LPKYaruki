import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import budgetMagangKenshusei from "../../assets/magang-kenshusei/buget-magang-kenshusei.png";




export default function MagangKenshusei() {
    return (
        <>
            <Navbar />

            <main className="pt-20 p-2">
                <section>
                    <h1 className="text-3xl text-center pt-4">Magang ?
                        [Kenshusei]
                    </h1>
                    <p className="text-justify pt-4 indent-8">Program pelatihan keterampilan praktis dan pemahaman budaya kerja Jepang. kontrak Program magang 1- 3 tahun.</p>
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
                        <li>Lulus JLPT N5 & Interview User</li>
                    </ul>
                    <h2 className="text-2xl text-center pt-4">
                        Fasilitas dari Perusahaan
                    </h2>
                    <ul className="list-disc list-outside pl-8 pt-4 flex flex-col gap-2 ">
                        <li>
                            Gaji mulai 160.000 Yen atau Rp 17 juta/bln
                        </li>
                        <li>
                            Asrama/tempat tinggal
                        </li>
                        <li>
                            Asuransi Kesehatan & keselamatan kerja
                        </li>
                        <li>
                            Kontrak mulai dari 1-3 tahun dan bisa diperpanjang
                        </li>
                    </ul>
                    <h2 className="text-2xl text-center pt-4">
                        ESTIMASI BIAYA
                    </h2>
                    <p>
                        <div className="text-2xl text-center pt-4">

                            Standar Waktu Persiapan 6 Bulan
                        </div>
                        <div className="text-2xl text-center pt-4">
                            <img src={budgetMagangKenshusei} alt="Budget Magang Kenshusei" />
                        </div>

                    </p>

                </section>



            </main>

            <Footer />

        </>
    )
}