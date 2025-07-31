import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";





export default function Engineering() {
    return (
        <>

            <title>Program Engineering Magang Jepang</title>
            <meta name="description" content="Program Engineering LPK Yaruki membantu insinyur Indonesia bekerja di Jepang. Persyaratan, fasilitas, estimasi biaya, dan skema pembayaran lengkap di sini." />
            <meta name="keywords" content="Engineering Jepang, Magang Jepang, LPK Yaruki, Program Insinyur, Kerja di Jepang, SSW, Persyaratan Magang Jepang" />
            <meta property="og:title" content="Program Engineering Magang Jepang | LPK Yaruki" />
            <meta property="og:description" content="Informasi lengkap program engineering untuk magang dan kerja di Jepang melalui LPK Yaruki. Cek persyaratan, fasilitas, biaya, dan gaji rata-rata." />

            <Navbar />

            <main className="pt-20 p-2">
                <section className="px-4 py-6 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4 text-blue-800 text-center">Engineering
                    </h1>
                    <p className="text-justify pt-4  indent-8">Program ini dirancang untuk membantu insinyur Indonesia bekerja di Jepang
                    </p>

                </section>
                <section className="px-4 py-6 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
                        Persyaratan
                    </h2>
                    <ul className="list-disc list-outside pl-8 pt-4 flex flex-col gap-2 ">
                        <li>Lulusan D3/S1 atau SMA/SMK Sederajat</li>
                        <li>Laki-Laki atau Perempuan berusia min 18 tahun (disesuaikan dengan kebijakan perusahaan)</li>
                        <li>Tinggi badan min. 160 cm (pria) dan 150 cm (wanita)</li>
                        <li>Sehat jasmani dan rohani</li>
                        <li>Tidak memiliki tato, tidak memiliki alergi, tidak buta warna</li>
                        <li>Memiliki SKCK</li>
                        <li>Mendapat izin orang tua</li>
                        <li>Lulus Min JLPT N4/JFT A2 [lebih dari N3 diutamakan], Skill & Interview User                        </li>
                    </ul>
                </section>
                <section className="px-4 py-6 max-w-3xl mx-auto">

                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
                        Fasilitas dari Perusahaan
                    </h2>
                    <ul className="list-disc list-outside pl-8 pt-4 flex flex-col gap-2 ">
                        <li>
                            Gaji mulai 250.000 Yen atau Rp 28 juta/Bulan
                        </li>
                        <li>
                            Asrama/tempat tinggal
                        </li>
                        <li>
                            Asuransi Kesehatan & keselamatan kerja
                        </li>
                        <li>
                            Kontrak mulai dari 1 Tahun sampai 5 tahun dan bisa diperpanjang (dapat bekerja dan tinggal di Jepang selamanya)
                        </li>
                    </ul>
                </section>
                <section className="px-4 py-6 max-w-3xl mx-auto">

                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
                        Estimasi Biaya Program (A) asrama
                    </h2>
                    <div className="p-4 text-center">
                        <h2 className="text-xl font-bold text-center bg-yellow-300 p-2 inline-block mb-4">
                            Standar Waktu Persiapan 10 Bulan
                        </h2>

                        <div className="overflow-auto">
                            <table className="table-auto border-collapse border w-full text-center">
                                <thead>
                                    <tr>
                                        <th className="border p-2" rowSpan="2">Activities</th>
                                        <th className="border p-2" colSpan="10">Month</th>
                                        <th className="border p-2" rowSpan="2">Budget</th>
                                    </tr>
                                    <tr>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((m) => (
                                            <th key={m} className="border p-2">{m}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        {
                                            name: "Learning Japanese [N3]",
                                            months: [1, 2, 3, 4, 5, 6],
                                            color: "bg-sky-400",
                                            budget: "Rp 20,000,000",
                                        },
                                        {
                                            name: "Pre - Interview",
                                            months: [7],
                                            color: "bg-lime-400",
                                            budget: "Rp 5,000,000",
                                        },
                                        {
                                            name: "Job Matching",
                                            months: [8],
                                            color: "bg-orange-300",
                                            budget: "Rp 10,000,000",
                                        },
                                        {
                                            name: "Visa Management",
                                            months: [9],
                                            color: "bg-red-800 text-white",
                                            budget: "Rp 5,000,000",
                                        },
                                        {
                                            name: "Departure to Japan",
                                            months: [10],
                                            color: "bg-red-500 text-white",
                                            budget: "Rp 11,000,000",
                                        },
                                    ].map((act, i) => (
                                        <tr key={i}>
                                            <td className="border p-2 text-left">{act.name}</td>
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((m) => (
                                                <td key={m} className={`border p-2 ${act.months.includes(m) ? act.color : ""}`}>
                                                    {act.months.includes(m) ? "" : ""}
                                                </td>
                                            ))}
                                            <td className="border p-2">{act.budget}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td colSpan="11" className="border p-2 font-bold text-right">Total</td>
                                        <td className="border p-2 font-bold">Rp 51,000,000</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="mt-2 italic text-sm">
                                Termasuk: Registrasi, Modul, Seragam, Dormitory, Passport, MCU, Visa, Ticket
                            </p>
                        </div>
                    </div>

                </section>

                {/* <section className="px-4 py-6 max-w-3xl mx-auto">

                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
                        Survei Badan Layanan Imigrasi Jepang pada 2021, berikut rata-rata gaji sebagai SSW [11 bidang]

                    </h2>
                    <p>
                        <div className="text-2xl font-bold mb-4 text-blue-800 text-center">

                        </div>
                        <div className="overflow-x-auto pt-4 p-2">
                            <table border="1" className="table w-full">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama Industri</th>
                                        <th>Gaji rata-rata/Bulan [JPY/IDR]</th>
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

                </section> */}
                {/* <section>
                    <h1 class="text-2xl font-bold text-blue-800">Kategori Pekerjaan Pemesinan dan Pengolahan Logam</h1>
                    <p class="mt-2 text-gray-700">
                        Memahami instruksi pembimbing, atau dengan pertimbangan sendiri bertugas di pekerjaan bagian manufaktur produk material casting atau mesin industry.
                    </p>

                    <h2 class="text-lg font-semibold mt-4 text-gray-900">
                        Keterampilan yang Termasuk <span class="text-red-600">(Huruf merah: ditambahkan baru)</span>
                    </h2>

                    <ul class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3 text-gray-800 list-disc ml-5">
                        <li>Pengecoran</li>
                        <li>Penempaan</li>
                        <li>Pengecoran cetak tekan</li>
                        <li>Permesinan</li>
                        <li>Pengolahan logam stamping</li>
                        <li>Pekerjaan besi</li>
                        <li>Pembentukan logam lembaran di pabrik</li>
                        <li>Finishing</li>
                        <li>Pemeriksaan mesin</li>
                        <li>Perakitan peralatan listrik</li>
                        <li>Pencetakan plastik</li>
                        <li>Pengecatan</li>
                        <li>Pengelasan</li>
                        <li>Pemeliharaan mesin</li>
                        <li>Pengemasan industri</li>
                        <li class="text-red-600">Cetakan plastik yang diperkuat</li>
                        <li class="text-red-600">Perlakuan panas logam</li>
                    </ul>

                    <p class="mt-4 text-sm italic text-gray-600">
                        Dikutip dari pedoman operasional “Kebijakan pengoperasian sistem terkait status izin tinggal Pekerja Berketerampilan Spesifik di bidang manufaktur produk industri” (direvisi sebagian pada 6 September 2024)
                    </p>
                </section> */}
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