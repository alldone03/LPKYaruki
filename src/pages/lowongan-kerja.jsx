import { useEffect, useState } from "react"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


export default function LowonganKerja() {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await fetch("/job.json");
        const json = await response.json();
        setData(json);
    };

    useEffect(() => {
        fetchData();
    });
    return (<>
        <Navbar />
        {/* Kaizen SEO */}
        <title>Lowongan Kerja | LPK Yaruki Solusi Indonesia</title>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="LPK Yaruki Solusi Indonesia adalah lembaga pelatihan bahasa Jepang dan pengiriman tenaga kerja ke Jepang. Tersedia program Magang, SSW, Engineer, hingga Kuliah sambil Magang dengan dukungan lengkap dari awal hingga akhir." />
        <meta name="keywords" content="Lowongan Kerja, LPK Yaruki, Kerja ke Jepang, Magang Jepang, SSW, Engineer, Kuliah sambil Magang" />
        <meta name="author" content="LPK Yaruki Solusi Indonesia" />



        <main className="bg-neutral pt-20">

            <section className="min-h-screen px-4 flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold">
                    <span className="font-bold text-white">&nbsp;Lowongan Kita</span>
                </h2>
                <div>

                    {data.map((lowongan) => (
                        <div>


                            <div className="card-body">
                                <div className="card bg-white shadow-xl p-6">
                                    <h2 className="card-title text-2xl font-bold mb-4">{lowongan.pekerjaan}</h2>

                                    <p className="mb-2"><span className="font-semibold">Lokasi:</span> {lowongan.lokasi}</p>
                                    <p className="mb-2"><span className="font-semibold">Gaji:</span> {lowongan.gaji}</p>

                                    {/* Tampilkan Level hanya jika ada minimal satu level yang tersedia */}
                                    {(lowongan.N1 || lowongan.N2 || lowongan.N3 || lowongan.N4 || lowongan.N5) && (
                                        <div className="mb-2">
                                            <p className="font-semibold">Level:</p>
                                            <div className="flex flex-wrap gap-4 mt-1">
                                                {lowongan.N1 ? (
                                                    <label className="flex items-center gap-2">
                                                        <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
                                                        N1
                                                    </label>
                                                ) : ""}
                                                {lowongan.N2 ? (
                                                    <label className="flex items-center gap-2">
                                                        <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
                                                        N2
                                                    </label>
                                                ) : ""}
                                                {lowongan.N3 ? (
                                                    <label className="flex items-center gap-2">
                                                        <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
                                                        N3
                                                    </label>
                                                ) : ""}
                                                {lowongan.N4 ? (
                                                    <label className="flex items-center gap-2">
                                                        <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
                                                        N4
                                                    </label>
                                                ) : ""}
                                                {lowongan.N5 ? (
                                                    <label className="flex items-center gap-2">
                                                        <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
                                                        N5
                                                    </label>
                                                ) : ""}
                                            </div>
                                        </div>
                                    )}

                                    <p className="mb-2"><span className="font-semibold">Pengalaman & Kualifikasi:</span> {lowongan.pengalaman_dan_kualifikasi}</p>
                                    <p><span className="font-semibold">Deskripsi:</span> {lowongan.isi_pekerjaan}</p>
                                    <p><span className={"font-semibold"}>Status:</span> <button className={`btn ${lowongan.Status == "Close" ? 'btn-error' : 'btn-success'}`}>{lowongan.Status}</button></p>
                                    <div className="card-actions justify-end mt-2">
                                        <button className={`btn ${lowongan.Status == "Close" ? 'btn-default' : 'btn-success'}`}>Pelajari Lowongan</button>
                                    </div>
                                </div>

                            </div>


                        </div>

                    ))}
                </div>

                <div className="mt-8 flex justify-center">
                </div>
            </section >
        </main>

        <Footer />
    </>
    )
}