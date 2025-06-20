import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";





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
                <section className="px-4 py-6 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4 text-blue-800 text-center">Nihon Go Gakkou
                    </h1>
                    <p className="text-justify pt-4 indent-8">Program Belajar Bahasa dan budaya Jepang. Setelah lulus program,Siswa Bisa melanjutkan Kuliah kejuruan atau langsung Berkarir di Perusahaan di Jepang.
                    </p>
                </section>

                <section className="px-4 py-6 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">Persyaratan Program Belajar ke Jepang</h2>
                    <p className="mb-4 text-gray-700">
                        Berikut adalah dokumen dan kriteria yang harus dipenuhi oleh peserta untuk mengikuti program belajar ke Jepang:
                    </p>
                    <ul className="list-disc list-outside pl-8 pt-4 flex flex-col gap-2 ">
                        <li>Formulir pendaftaran</li>
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
                    <p className="mt-4 text-sm italic text-gray-600">
                        *Persyaratan dapat berubah sewaktu-waktu sesuai kebijakan terbaru.
                    </p>
                </section>
                <br />
                <section className="px-4 py-6 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
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
                </section>
                <br />
                <section className="px-4 py-6 max-w-3xl mx-auto">
                    <h1 className="text-2xl font-bold mb-4 text-blue-800 text-center">Estimasi Biaya Program Belajar di Jepang</h1>

                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 mt-4">Biaya yang Dikeluarkan di Indonesia</h2>
                        <table className="table-auto w-full border-collapse border mt-2 text-sm text-left">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border p-2">No</th>
                                    <th className="border p-2">Keterangan</th>
                                    <th className="border p-2">Biaya</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-2">1</td>
                                    <td className="border p-2">Biaya pengurusan dokumen CoE, penerjemahan, dan pengiriman dokumen ke Jepang</td>
                                    <td className="border p-2">Rp5.000.000</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">2</td>
                                    <td className="border p-2">Pelatihan Bahasa Jepang sampai N4</td>
                                    <td className="border p-2">Rp10.000.000</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">3</td>
                                    <td className="border p-2">Biaya Deposit tempat tinggal di Jepang</td>
                                    <td className="border p-2">Rp15.000.000</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">4</td>
                                    <td className="border p-2">Uang Saku Persiapan Awal di Jepang</td>
                                    <td className="border p-2">Rp10.000.000</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">5</td>
                                    <td className="border p-2">Visa dan Tiket Pesawat</td>
                                    <td className="border p-2">Rp10.000.000</td>
                                </tr>
                                <tr className="bg-gray-100 font-semibold">
                                    <td className="border p-2" colSpan={2}>Estimasi Total</td>
                                    <td className="border p-2">Rp50.000.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </section>
                <section className="px-4 py-6 max-w-3xl mx-auto">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 mt-6">Biaya yang Dikeluarkan di Jepang</h2>
                        <table className="table-auto w-full border-collapse border mt-2 text-sm text-left">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border p-2">No</th>
                                    <th className="border p-2">Keterangan</th>
                                    <th className="border p-2">Biaya</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-2">1</td>
                                    <td className="border p-2">Biaya Sekolah di Nihongo Gakkou (per tahun)</td>
                                    <td className="border p-2">Rp70.000.000</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">2</td>
                                    <td className="border p-2">Apartment di Jepang (per tahun)</td>
                                    <td className="border p-2">Rp48.000.000</td>
                                </tr>
                                <tr className="bg-gray-100 font-semibold">
                                    <td className="border p-2" colSpan={2}>Estimasi Total</td>
                                    <td className="border p-2">Rp118.000.000</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="mt-3 text-sm italic text-red-600">*Biaya bisa berubah sesuai dengan kurs</p>
                    </div>

                </section>
                {/* <section className="px-4 py-6 max-w-3xl mx-auto">
                    <h2 className="text-2xl text-center pt-4">
                        Gaji & Biaya Hidup di Jepang
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
                </section> */}
            </main >
            <Footer />
        </>
    )
}