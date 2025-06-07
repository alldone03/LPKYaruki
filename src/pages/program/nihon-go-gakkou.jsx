import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import budgetEngineering from "../../assets/magang-kenshusei/buget-nihon-go-gakkou.png";




export default function NihonGoGakkou() {
    return (
        <>
            {/* SEO */}

            <title>Nihon Go Gakkou - Program Belajar Bahasa Jepang | LPK Yaruki Solusi Indonesia</title>
            <meta
                name="description"
                content="Program Nihon Go Gakkou dari LPK Yaruki: Belajar bahasa dan budaya Jepang, persiapan kuliah atau karir di Jepang, serta informasi biaya dan persyaratan lengkap."
            />
            <meta
                name="keywords"
                content="Nihon Go Gakkou, Belajar Bahasa Jepang, LPK Yaruki, Sekolah Jepang, Program Jepang, Persyaratan Jepang, Biaya Sekolah Jepang"
            />
            {/* END SEO */}
            <Navbar />

            <main className="pt-20 p-2">
                <section>
                    <h1 className="text-3xl text-center pt-4">Nihon Go Gakkou
                    </h1>
                    <p className="text-justify pt-4  indent-8">Program Belajar Bahasa dan budaya Jepang. Setelah lulus program,Siswa Bisa melanjutkan Kuliah kejuruan atau langsung Berkarir di Perusahaan di Jepang.
                    </p>
                    <h2 className="text-2xl text-center pt-4">
                        PERSYARATAN
                    </h2>
                    <ul className="list-disc list-outside pl-8 pt-4 flex flex-col gap-2 ">
                        <li>Formulir pendaftaran                        </li>
                        <li>Nilai sekolah/transkrip & Ijasah terakhir</li>
                        <li>Fotocopy paspor dan KTP</li>
                        <li>Fotocopy Kartu Keluarga & Fotocopy Akte Kelahiran
                            Pas foto 3×4</li>
                        <li>Bukti belajar bahasa Jepang [min JLPT N4]
                        </li>
                        <li>Surat keterangan saldo rekening bank & Rekening koran
                        </li>
                        <li>Surat keterangan penyandang dana (sponsor) dari orang-tua/penanggung biaya
                        </li>
                        <li>Surat keterangan penghasilan tahunan dari orang-tua/penanggung biaya
                        </li>
                        <li>Surat keterangan kerja dari orang-tua/penanggung biaya
                        </li>

                    </ul>
                    <h2 className="text-2xl text-center pt-4">
                        AKTIVITAS & BENEFIT
                    </h2>
                    <ul className="list-disc list-outside pl-8 pt-4 flex flex-col gap-2 ">
                        <li>
                            Belajar 5 hari/pekan @3 jam,selama 1.5-2 thn, kerja part time/Arubaito [maks 28 jam/pekan]
                        </li>
                        <li>
                            Uang Saku mulai 62.000 Yen atau Rp 7 jt/bln
                        </li>
                        <li>
                            Setelah lulus, Studi lanjut S1/S2 Beasiswa di Jepang
                        </li>
                        <li>
                            Berkarir di perusahan Perusahaan Jepang dengan posisi yang lebih Baik,setara dengan Tenaga kerja lokal Jepang & berpeluang mengajak keluarga untuk tinggal di Jepang.
                        </li>
                    </ul>
                    <h2 className="text-2xl text-center pt-4">
                        ESTIMASI BIAYA
                    </h2>
                    <p>

                        <div className="text-2xl text-center pt-4">
                            <img src={budgetEngineering} alt="Budget Magang Kenshusei" />
                        </div>

                    </p>
                    <h2 className="text-2xl text-center pt-4">
                        Gaji & Biaya Hidup di Jepan
                    </h2>
                    <p>

                        <div className="overflow-x-auto pt-4">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Jumlah


                                            <br />Pembayaran</th>
                                        <th>Keterangan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>35 juta</td>
                                        <td>Bila pembayaran cash di awal masuk</td>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td>37,5 juta</td>
                                        <td>Bila pembayaran dicicil minimal 15 juta tiap 2 bulan sampai lunas</td>
                                    </tr>
                                    <tr>
                                        <td>3.</td>
                                        <td>40 juta</td>
                                        <td>Bila pembayaran dicicil minimal 5 juta per bulan sampai lunas</td>
                                    </tr>
                                    <tr>
                                        <td>4.</td>
                                        <td>42,5 juta</td>
                                        <td>Bila pembayaran di awal 5 juta dan dicicil minimal 2,5 juta per bulan sampai lunas</td>
                                    </tr>
                                    <tr>
                                        <td>5.</td>
                                        <td>45 juta</td>
                                        <td>Bila pembayaran 5 juta di awal masuk, tiap ada pembayaran eksternal - biaya sendiri, dan sisa uangnya dibayarkan setelah di Jepang</td>
                                    </tr>
                                </tbody>
                            </table>



                        </div>

                    </p>


                </section>



            </main>

            <Footer />

        </>
    )
}