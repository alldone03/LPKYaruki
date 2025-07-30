import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";







export default function MagangKenshusei() {
    return (
        <>
            <title>Magang Kenshusei | LPK Yaruki Solusi Indonesia</title>
            <meta name="description" content="Program magang Kenshusei: Program pelatihan keterampilan praktis dan pemahaman budaya kerja Jepang. 
Kontrak Program magang 3- 5 tahun
. Persyaratan, fasilitas, dan estimasi biaya lengkap di LPK Yaruki." />
            <meta name="keywords" content="Magang Jepang, Kenshusei, LPK Yaruki, Program Magang, Persyaratan Magang Jepang, Biaya Magang Jepang" />
            <Navbar />

            <main className="pt-20 p-2">
                <section className="px-4 py-6 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4 text-blue-800 text-center">Magang ?
                        [Kenshusei]
                    </h1>
                    <p className="text-justify pt-4 indent-8">Program pelatihan keterampilan praktis dan pemahaman budaya kerja Jepang.
                        Kontrak Program magang 3- 5 tahun
                    </p>
                </section>
                <section className="px-4 py-6 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
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
                </section>
                <section className="px-4 py-6 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
                        Fasilitas dari Perusahaan
                    </h2>
                    <ul className="list-disc list-outside pl-8 pt-4 flex flex-col gap-2 ">
                        <li>
                            Gaji mulai 130.000 Yen atau Rp 14 juta/Bulan
                        </li>
                        <li>
                            Asrama/tempat tinggal
                        </li>
                        <li>
                            Asuransi Kesehatan & keselamatan kerja
                        </li>
                        <li>
                            Kontrak mulai dari 3-5 tahun dan bisa diperpanjang
                        </li>
                    </ul>
                </section>
                <section className="px-4 py-6 max-w-3xl mx-auto">

                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
                        Estimasi Biaya Program (A) asrama
                    </h2>
                    <p>
                        <div className="text-2xl text-center pt-4">


                            <div className="p-4">
                                <h3 className="text-xl font-bold bg-yellow-300 p-2 inline-block mb-4">
                                    Standar Waktu Persiapan 6 Bulan
                                </h3>

                                <div className="overflow-auto">
                                    <table className="table-auto border-collapse border w-full text-center">
                                        <thead>
                                            <tr>
                                                <th className="border p-2" rowSpan="2">Activities</th>
                                                <th className="border p-2" colSpan="6">Month</th>
                                                <th className="border p-2" rowSpan="2">Budget</th>
                                            </tr>
                                            <tr>
                                                {[1, 2, 3, 4, 5, 6].map((m) => (
                                                    <th key={m} className="border p-2">{m}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                {
                                                    name: "Learning Japanese [N5]",
                                                    months: [1, 2],
                                                    color: "bg-sky-400",
                                                    budget: "Rp 8,000,000",
                                                },
                                                {
                                                    name: "Pre - Interview",
                                                    months: [3],
                                                    color: "bg-lime-400",
                                                    budget: "Rp 4,000,000",
                                                },
                                                {
                                                    name: "Job Matching",
                                                    months: [4],
                                                    color: "bg-orange-300",
                                                    budget: "Rp 5,000,000",
                                                },
                                                {
                                                    name: "Visa Management",
                                                    months: [5],
                                                    color: "bg-red-800 text-white",
                                                    budget: "Rp 5,000,000",
                                                },
                                                {
                                                    name: "Departure to Japan",
                                                    months: [6],
                                                    color: "bg-red-500 text-white",
                                                    budget: "Rp 11,000,000",
                                                },
                                            ].map((act, i) => (
                                                <tr key={i}>
                                                    <td className="border p-2 text-left">{act.name}</td>
                                                    {[1, 2, 3, 4, 5, 6].map((m) => (
                                                        <td key={m} className={`border p-2 ${act.months.includes(m) ? act.color : ""}`}>
                                                            {act.months.includes(m) ? "" : ""}
                                                        </td>
                                                    ))}
                                                    <td className="border p-2">{act.budget}</td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td colSpan="7" className="border p-2 font-bold text-right">Total</td>
                                                <td className="border p-2 font-bold">Rp 33,000,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="mt-2 italic text-sm">
                                        Termasuk: registrasi, modul, seragam, dormitory, passport, MCU, visa, ticket
                                    </p>
                                </div>
                            </div>
                        </div>

                    </p>

                </section>
                <section className="px-4 py-6 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
                        Estimasi Biaya Program (B) Non Asrama
                    </h2>
                    <div className="text-2xl font-bold mb-4 text-blue-800 text-center">

                        <div className="overflow-auto">
                            <table className="table-auto border-collapse w-full text-2xl">
                                <thead>
                                    <tr className="bg-blue-900 text-white">
                                        <th className="border p-2">Item</th>
                                        <th className="border p-2" colSpan={2}>OFF-LINE</th>
                                        <th className="border p-2" colSpan={2}>ON-LINE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border p-2">(1) Bahasa Japan &amp; SSW</td>
                                        <td className="border p-2">(A) LPK <span className="underline">Yaruki</span> [asrama]</td>
                                        <td className="border p-2">(B) Company/others <span className="text-purple-700">[Non asrama]</span></td>
                                        <td className="border p-2">(C) Private </td>
                                        <td className="border p-2">(D) Group </td>
                                    </tr>
                                    <tr>
                                        <td className="border p-2">(2) Capacity [MP]</td>
                                        <td className="border p-2 font-bold text-purple-700">100</td>
                                        <td className="border p-2 font-bold text-purple-700">Min 10MP/kelas</td>
                                        <td className="border p-2">1-5</td>
                                        <td className="border p-2">6-20</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 bg-amber-300 text-center">
                        Program (B) Magang -Standar Waktu persiapan 9 Bulan [@2jam/hari,Senin-Jumat 150 Jam] @Company
                    </h3>
                    <p>
                        <div className="overflow-auto">
                            <table className="table-auto border-collapse border w-full text-center text-2xl">
                                <thead>
                                    <tr>
                                        <th className="border p-2" rowSpan="2">Activities</th>
                                        <th className="border p-2" colSpan="9">Month</th>
                                        <th className="border p-2" rowSpan="2">Budget</th>
                                    </tr>
                                    <tr>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((m) => (
                                            <th key={m} className="border p-2">{m}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        {
                                            name: "Learning Japanese [N5]",
                                            months: [1, 2, 3, 4, 5],
                                            color: "bg-sky-400",
                                            budget: "Rp 6,000,000",
                                        },
                                        {
                                            name: "Pre - Interview",
                                            months: [6],
                                            color: "bg-lime-400",
                                            budget: "Rp 4,000,000",
                                        },
                                        {
                                            name: "Job Matching",
                                            months: [7],
                                            color: "bg-orange-300",
                                            budget: "Rp 5,000,000",
                                        },
                                        {
                                            name: "Visa Management",
                                            months: [8],
                                            color: "bg-red-800 text-white",
                                            budget: "Rp 5,000,000",
                                        },
                                        {
                                            name: "Departure to Japan",
                                            months: [9],
                                            color: "bg-red-500 text-white",
                                            budget: "Rp 11,000,000",
                                        },
                                    ].map((act, i) => (
                                        <tr key={i}>
                                            <td className="border p-2 text-left">{act.name}</td>
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((m) => (
                                                <td key={m} className={`border p-2 ${act.months.includes(m) ? act.color : ""}`}>
                                                    {act.months.includes(m) ? "" : ""}
                                                </td>
                                            ))}
                                            <td className="border p-2">{act.budget}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td colSpan="10" className="border p-2 font-bold text-right">Total</td>
                                        <td className="border p-2 font-bold">Rp 31,000,000</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="mt-2 italic text-sm">
                                Termasuk: registrasi, modul, seragam, dormitory, passport, MCU, visa, ticket
                            </p>
                        </div>
                    </p>
                </section>



            </main>

            <Footer />

        </>
    )
}