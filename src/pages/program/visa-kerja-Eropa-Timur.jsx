import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import pamfleteropa from "../../assets/Yaruki lowongan Eropa Timur September 2025-1.pdf";
import { Link } from "react-router";




export default function VisaKerjaEropa() {
    return (
        <>

            {/* SEO */}

            <title>Visa Kerja ke Eropa Timur - Program Penyaluran Tenaga Kerja ke Eropa</title>
            <meta name="description" content="Informasi lengkap tentang program penyaluran tenaga kerja ke Eropa Timur, persyaratan, fasilitas, dan estimasi biaya melalui LPK Yaruki." />
            <meta name="keywords" content="Visa kerja Eropa Timur, kerja di Eropa, tenaga kerja, LPK Yaruki, program Eropa, penyaluran tenaga kerja" />
            <meta property="og:title" content="Visa Kerja ke Eropa Timur - Program Penyaluran Tenaga Kerja ke Eropa" />
            <meta property="og:description" content="Program penyaluran tenaga kerja ke Eropa Timur. Cek persyaratan, fasilitas, dan estimasi biaya di LPK Yaruki." />
            <meta property="og:type" content="website" />


            {/* END SEO */}
            <Navbar />

            <main className="pt-20 p-2">
                <section className="px-4 py-6 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4 text-blue-800 text-center">Visa Kerja ke Eropa
                    </h1>
                    <p className="text-justify pt-4  indent-8">Program visa kerja ke Eropa Timur memberikan kesempatan bagi tenaga kerja Indonesia untuk bekerja secara legal di berbagai sektor. LPK Yaruki membantu proses penyaluran mulai dari pendaftaran, pelatihan, pemenuhan persyaratan, hingga keberangkatan. Peserta akan mendapatkan fasilitas pendampingan, estimasi biaya yang jelas, serta akses informasi terbaru seputar peluang kerja di Eropa Timur.
                    </p>
                </section>
                <section className="px-4 py-6 max-w-3xl mx-auto">

                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
                        List Lowongan Kerja Ke Eropa Timur
                    </h2>
                    <div className="w-full aspect-[1/1]">
                        <iframe
                            src={`${pamfleteropa}`}
                            className="w-full h-screen border-0"
                        />
                    </div>

                </section>
                <section className="px-4 py-6 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
                        Pendaftaran
                    </h2>
                    <div className=" flex justify-center">

                        <Link
                            to="https://forms.gle/TEdNudQFoTXykdqX9" target="_blank"
                            className="btn bg-white text-blue-700 hover:bg-gray-200 font-semibold rounded outline-blue-700 outline-2"
                            aria-label="Daftar Program Kerja ke Jepang"
                        >
                            Daftar Sekarang
                        </Link>
                    </div>
                </section>
            </main >
            <Footer />

        </>
    )
}