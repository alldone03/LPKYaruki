import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";




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
                <section className="px-4 py-6 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4 text-blue-800 text-center">Tokutei Ginou
                    </h1>
                    <p className="text-justify pt-4  indent-8">Tokutei ginou merupakan program penyaluran tenaga kerja ke Jepang dengan menggunakan visa pekerja yang memiliki keahlian khusus di bidang tertentu.
                    </p>
                </section>
                <section className="px-4 py-6 max-w-3xl mx-auto">

                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
                        Persyaratan
                    </h2>
                    <ul className="list-disc list-outside pl-8 pt-4 flex flex-col gap-2 ">
                        <li>Laki-Laki atau Perempuan berusia 18 sampai 35 tahun (usia 35 ke atas sesuai kebijakan perusahaan)</li>
                        <li>Lulusan D3/S1 atau SMA/SMK Sederajat</li>
                        <li>Tinggi badan min. 160 cm (pria) dan 150 cm (wanita)</li>
                        <li>Sehat jasmani dan rohani</li>
                        <li>Tidak memiliki tato, tidak memiliki alergi, tidak buta warna</li>
                        <li>Memiliki SKCK</li>
                        <li>Mendapat izin orang tua</li>
                        <li>Lulus JLPT N4/JFT A2, SSW & Interview User                        </li>
                    </ul>
                </section>
                <section className="px-4 py-6 max-w-3xl mx-auto">

                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
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
                            Kontrak mulai dari 1 Tahun sampai 5 tahun dan bisa diperpanjang (TG tingkat lanjut dapat bekerja dan tinggal di Jepang selamanya)
                        </li>
                    </ul>
                </section>
                <section className="px-4 py-6 max-w-3xl mx-auto">

                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
                        ESTIMASI BIAYA
                    </h2>
                    <p>
                        <div className="text-2xl font-bold mb-4 text-blue-800 text-center">


                            <div className="p-4">
                                <h2 className="text-xl font-bold bg-yellow-300 p-2 inline-block mb-4">
                                    Standar Waktu Persiapan 8 Bulan
                                </h2>

                                <div className="overflow-auto">
                                    <table className="table-auto border-collapse border w-full text-center">
                                        <thead>
                                            <tr>
                                                <th className="border p-2" rowSpan="2">Activities</th>
                                                <th className="border p-2" colSpan="8">Month</th>
                                                <th className="border p-2" rowSpan="2">Budget</th>
                                            </tr>
                                            <tr>
                                                {[1, 2, 3, 4, 5, 6, 7, 8].map((m) => (
                                                    <th key={m} className="border p-2">{m}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                {
                                                    name: "Learning Japanese [N4]",
                                                    months: [1, 2, 3],
                                                    color: "bg-sky-400",
                                                    budget: "Rp 10,500,000",
                                                },
                                                {
                                                    name: "Learning & test SSW [Specified Skill Worker]",
                                                    months: [4],
                                                    color: "bg-pink-300",
                                                    budget: "Rp 2,000,000",
                                                },
                                                {
                                                    name: "Pre - Interview",
                                                    months: [5],
                                                    color: "bg-lime-400",
                                                    budget: "Rp 4,000,000",
                                                },
                                                {
                                                    name: "Job Matching",
                                                    months: [6],
                                                    color: "bg-orange-300",
                                                    budget: "Rp 5,000,000",
                                                },
                                                {
                                                    name: "Visa Management",
                                                    months: [7],
                                                    color: "bg-red-800 text-white",
                                                    budget: "Rp 5,000,000",
                                                },
                                                {
                                                    name: "Departure to Japan",
                                                    months: [8],
                                                    color: "bg-red-500 text-white",
                                                    budget: "Rp 11,000,000",
                                                },
                                            ].map((act, i) => (
                                                <tr key={i}>
                                                    <td className="border p-2 text-left">{act.name}</td>
                                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((m) => (
                                                        <td key={m} className={`border p-2 ${act.months.includes(m) ? act.color : ""}`}>
                                                            {/* {act.months.includes(m) ? "●" : ""} */}
                                                        </td>
                                                    ))}
                                                    <td className="border p-2">{act.budget}</td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td colSpan="9" className="border p-2 font-bold text-right">Total</td>
                                                <td className="border p-2 font-bold">Rp 37,500,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="mt-2 italic text-sm">
                                        Termasuk: registrasi, modul, seragam, dormitory, test fee (JFT, SSW), passport, MCU, Visa, Ticket
                                    </p>
                                </div>
                            </div>
                        </div>

                    </p>


                </section>



            </main>

            <Footer />

        </>
    )
}