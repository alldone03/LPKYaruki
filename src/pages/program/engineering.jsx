import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import budgetEngineering from "../../assets/magang-kenshusei/buget-engineering.png";
import KategoriPekerjaanEngineering from "../../assets/magang-kenshusei/kategori-pekerjaan-engineering.png";
import { Helmet } from "react-helmet";



export default function Engineering() {
    return (
        <>

            <title>Program Engineering Magang Jepang | LPK Yaruki Solusi Indonesia</title>
            <meta name="description" content="Program Engineering LPK Yaruki membantu insinyur Indonesia bekerja di Jepang. Persyaratan, fasilitas, estimasi biaya, dan skema pembayaran lengkap di sini." />
            <meta name="keywords" content="Engineering Jepang, Magang Jepang, LPK Yaruki, Program Insinyur, Kerja di Jepang, SSW, Persyaratan Magang Jepang" />
            <meta property="og:title" content="Program Engineering Magang Jepang | LPK Yaruki" />
            <meta property="og:description" content="Informasi lengkap program engineering untuk magang dan kerja di Jepang melalui LPK Yaruki. Cek persyaratan, fasilitas, biaya, dan gaji rata-rata." />

            <Navbar />

            <main className="pt-20 p-2">
                <section>
                    <h1 className="text-3xl text-center pt-4">Engineering
                    </h1>
                    <p className="text-justify pt-4  indent-8">Program ini dirancang untuk membantu insinyur Indonesia bekerja di Jepang
                    </p>

                </section>
                <section>
                    <h2 className="text-2xl text-center pt-4">
                        Persyaratan
                    </h2>
                    <ul className="list-disc list-outside pl-8 pt-4 flex flex-col gap-2 ">
                        <li>Laki-Laki atau Perempuan berusia min 18 tahun (disesuaikan dengan kebijakan perusahaan)                        </li>
                        <li>Lulusan D3/S1 atau SMA/SMK Sederajat</li>
                        <li>Tinggi badan min. 160 cm (pria) dan 150 cm (wanita)</li>
                        <li>Sehat jasmani dan rohani</li>
                        <li>Tidak memiliki tato, tidak memiliki alergi, tidak buta warna</li>
                        <li>Memiliki SKCK</li>
                        <li>Mendapat izin orang tua</li>
                        <li>Lulus Min JLPT N4/JFT A2 [lebih dari N3 diutamakan], Skill & Interview User                        </li>
                    </ul>
                </section>
                <section>

                    <h2 className="text-2xl text-center pt-4">
                        Fasilitas dari Perusahaan
                    </h2>
                    <ul className="list-disc list-outside pl-8 pt-4 flex flex-col gap-2 ">
                        <li>
                            Gaji mulai 250.000 Yen atau Rp 28 juta/bln
                        </li>
                        <li>
                            Asrama/tempat tinggal
                        </li>
                        <li>
                            Asuransi Kesehatan & keselamatan kerja
                        </li>
                        <li>
                            Kontrak mulai dari 6 bulan sampai 1 tahun dan bisa diperpanjang (dapat bekerja dan tinggal di Jepang selamanya)
                        </li>
                    </ul>
                </section>
                <section>

                    <h2 className="text-2xl text-center pt-4">
                        ESTIMASI BIAYA
                    </h2>
                    <p>
                        <div className="text-2xl text-center pt-4">
                            Standar Waktu Persiapan 10 Bulan
                        </div>
                        <div className="text-2xl text-center pt-4">
                            <img src={budgetEngineering} alt="Budget Magang Kenshusei" />
                        </div>

                    </p>

                </section>
                <section>

                    <h2 className="text-2xl text-center pt-4">
                        Skema Pembayaran
                    </h2>
                    <p>
                        <div className="text-2xl text-center pt-4">
                            [SSW/TG case]
                        </div>
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
                <section>

                    <h2 className="text-2xl text-center pt-4">
                        Survei Badan Layanan Imigrasi Jepang pada 2021, berikut rata-rata gaji sebagai SSW [11 bidang]

                    </h2>
                    <p>
                        <div className="text-2xl text-center pt-4">

                        </div>
                        <div className="overflow-x-auto pt-4 p-2">
                            <table border="1" className="table w-full">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama Industri</th>
                                        <th>Gaji rata-rata/bln [JPY/IDR]</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Care giver (Perawat lansia)</td>
                                        <td>223.531 Yen/Rp 23,6 jt</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Building Cleaning (Pembersihan Gedung)</td>
                                        <td>207.313 Yen/Rp 22 jt</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            Materials Industry (Industri Material)
                                            Industrial Machinery Manufacturing (Pembuatan Mesin Industri)
                                            Electrical and Electronic Information Industry
                                        </td>
                                        <td>240.641 Yen/Rp 25,4 juta</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Shipbuilding and Marine Industry (Pembuatan Kapal dan Industri Kelautan)</td>
                                        <td>239.748 Yen/Rp 25,3 jt</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Construction (Konstruksi)</td>
                                        <td>285.339 Yen/Rp 30,1 jt</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Automobile Maintenance (Perawatan Mobil)</td>
                                        <td>249.481 Yen/Rp 26,4 jt</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Accommodation (Perhotelan)</td>
                                        <td>194.358 Yen/Rp 20,5 jt</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Agriculture (Pertanian)</td>
                                        <td>206.096 Yen/Rp 21,8 jt</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Fishery (Perikanan)</td>
                                        <td>236.634 Yen/Rp 25 jt</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Food and Beverage Manufacturing (Pengolahan Makanan dan Minuman)</td>
                                        <td>223.566 Yen/Rp 23,6 jt</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>Food Service Industry (Industri Jasa Makanan)</td>
                                        <td>233.543 Yen/Rp 24,7 jt</td>
                                    </tr>
                                </tbody>
                            </table>



                        </div>

                    </p>

                </section>
                <section>

                    <img src={KategoriPekerjaanEngineering} alt="Engineering Program" className="w-full h-auto pt-4" />

                </section>
                {/* <section>
                    <h2>1-2. Kategori Pekerjaan di Industri Manufaktur</h2>
                    <h3>Pemesinan dan Pengolahan Logam</h3>
                    <p>Memahami instruksi pembimbing, atau dengan pertimbangan sendiri bertugas di pekerjaan bagian manufaktur produk material casting atau mesin industry.</p>
                    <p><strong>◇Keterampilan yang Termasuk</strong> <em>(Huruf merah: ditambahkan baru)</em></p>
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Keterampilan</th>
                                <th>Ilustrasi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Pengecoran</td><td><img src="gambar-pengecoran.jpg" alt="Ilustrasi pengecoran logam" /></td></tr>
                            <tr><td>Penempaan</td><td><img src="gambar-penempaan.jpg" alt="Ilustrasi penempaan logam" /></td></tr>
                            <tr><td>Pengecoran cetak tekan</td><td><img src="gambar-cetak-tekan.jpg" alt="Ilustrasi pengecoran cetak tekan" /></td></tr>
                            <tr><td>Permesinan</td><td><img src="gambar-permesinan.jpg" alt="Ilustrasi operator mesin" /></td></tr>
                            <tr><td>Pengolahan logam stamping</td><td><img src="gambar-logam-stamping.jpg" alt="Ilustrasi pengolahan logam stamping" /></td></tr>
                            <tr><td>Pekerjaan besi</td><td><img src="gambar-pekerjaan-besi.jpg" alt="Ilustrasi pekerjaan besi" /></td></tr>
                            <tr><td>Pembentukan logam lembaran di pabrik</td><td><img src="gambar-pembentukan-logam.jpg" alt="Ilustrasi pembentukan logam lembaran" /></td></tr>
                            <tr><td>Finishing</td><td><img src="gambar-finishing.jpg" alt="Ilustrasi pekerjaan finishing" /></td></tr>
                            <tr><td>Pemeriksaan mesin</td><td><img src="gambar-pemeriksaan.jpg" alt="Ilustrasi pemeriksaan mesin" /></td></tr>
                            <tr><td>Pemeliharaan mesin</td><td><img src="gambar-pemeliharaan.jpg" alt="Ilustrasi pemeliharaan mesin" /></td></tr>
                            <tr><td>Perakitan peralatan listrik</td><td><img src="gambar-perakitan.jpg" alt="Ilustrasi perakitan alat listrik" /></td></tr>
                            <tr><td>Pencetakan plastik</td><td><img src="gambar-pencetakan-plastik.jpg" alt="Ilustrasi pencetakan plastik" /></td></tr>
                            <tr><td><span style={{ color: 'red' }}>Cetakan plastik yang diperkuat</span></td><td><img src="gambar-cetakan-perkuat.jpg" alt="Ilustrasi cetakan plastik diperkuat" /></td></tr>
                            <tr><td><span style={{ color: 'red' }}>Perlakuan panas logam</span></td><td><img src="gambar-perlakuan-panas.jpg" alt="Ilustrasi perlakuan panas logam" /></td></tr>
                            <tr><td>Pengecatan</td><td><img src="gambar-pengecatan.jpg" alt="Ilustrasi pekerjaan pengecatan" /></td></tr>
                            <tr><td>Pengelasan</td><td><img src="gambar-pengelasan.jpg" alt="Ilustrasi pengelasan logam" /></td></tr>
                            <tr><td>Pengemasan industri</td><td><img src="gambar-pengemasan.jpg" alt="Ilustrasi pengemasan industri" /></td></tr>
                        </tbody>
                    </table>
                    <p><small>Kutipan dari pedoman operasional “Kebijakan pengoperasian sistem terkait status izin tinggal Pekerja Berketerampilan Spesifik di bidang manufaktur produk industri” (direvisi 6 September 2024)</small></p>
                </section> */}




            </main>

            <Footer />

        </>
    )
}