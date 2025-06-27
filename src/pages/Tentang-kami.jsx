import bghome from "../assets/IMG-20240220-WA0005.webp";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


import picture1 from "../assets/tentang-kami/Picture1.webp";
import picture2 from "../assets/tentang-kami/Picture2.webp";
import picture3 from "../assets/tentang-kami/Picture3.webp";
import picture4 from "../assets/tentang-kami/Picture4.webp";
import picture5 from "../assets/tentang-kami/Picture5.webp";

// import goal1 from "../assets/tentang-kami/goal1.png";
// import goal2 from "../assets/tentang-kami/goal2.png";
// import goal3 from "../assets/tentang-kami/goal3.png";

export default function TentangKami() {
    return (
        <>


            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Tentang PT Yaruki Solusi Indonesia: layanan maintenance, people development, pelatihan bahasa Jepang, visi misi, tujuan, dan capaian perusahaan." />
            <meta name="keywords" content="LPK Yaruki, PT Yaruki Solusi Indonesia, Maintenance, People Development, Pelatihan Bahasa Jepang, Visi Misi, Tujuan Perusahaan" />
            <meta name="author" content="PT Yaruki Solusi Indonesia" />

            <title>Tentang Kami | LPK Yaruki Solusi Indonesia</title>
            {/* // center phone */}
            <Navbar />
            {/* Section 1 */}
            <main>
                {/* Section 1: Tentang Kami dengan Background Image */}
                <section
                    style={{ "--image-url": `url(${bghome})` }}
                    className="min-h-screen bg-[image:var(--image-url)] bg-cover bg-fixed bg-center bg-no-repeat text-center"
                    aria-label="Tentang Kami"
                >
                    <div className="h-screen bg-black/50">
                        <div className="md:bg-opacity-50 px-4 pt-72 md:flex md:flex-col md:items-center md:justify-center">
                            <article className="prose lg:prose-xl text-center text-white">
                                <h1 className="text-5xl font-bold md:text-8xl text-white">Tentang Kami</h1>
                                <p className="indent-8 text-lg md:text-xl">
                                    "Share Value, Membangun Manusia, Membangun Bangsa Indonesia"
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Section 2: Tentang Perusahaan */}
                <section className="bg-white py-12 px-6 max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Tentang Perusahaan</h2>
                    <p className="text-gray-700 text-justify mb-8">
                        <strong>LPK Yaruki Indonesia</strong> berfokus terhadap training bahasa Jepang untuk penyaluran tenaga kerja Indonesia ke berbagai bidang melalui program pelatihan khusus, seperti mekanik mobil, body repair, dan manufacturing (maintenance, engineering, IT), serta bidang lainnya.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 text-gray-800">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Nama Perusahaan</h3>
                            <p>PT. Yaruki Solusi Indonesia</p>
                            <h3 className="font-semibold text-gray-900 mt-4 mb-2">Tanggal Berdiri</h3>
                            <p>2025</p>
                            <h3 className="font-semibold text-gray-900 mt-4 mb-2">Alamat</h3>
                            <p>
                                Jl Merak Raya H1 No. 134, Kawasan Industri Jababeka II,<br />
                                Desa Mekarmukti, Kecamatan Cikarang Utara,<br />
                                Kabupaten Bekasi, Jawa Barat
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Bidang Usaha</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Maintenance</li>
                                <li>People Development</li>
                                <li>Pelatihan Bahasa Jepang</li>
                            </ul>
                        </div>
                    </div>
                </section>


                {/* Section 3: Visi & Misi */}
                <section className="bg-white py-10 px-4 max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* VISI */}
                        <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-center">Visi</h2>
                            <p className="mb-4">
                                Menjadi mitra terbaik bagi perusahaan dan individu dalam:
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Pelatihan bahasa asing dan skill terkini</li>
                                <li>Penyedia tenaga kerja terampil di dalam &amp; luar negeri</li>
                                <li>Partner excellent operations (Lean) di bidang:</li>
                                <li className="ml-4">Manufacturing: TPM (mesin, equipment &amp; building), Welding, Sistem Integrasi ERP, dll</li>
                                <li className="ml-4">Non-Manufacturing: IT, Finance, Logistics, Services, dll</li>
                            </ul>
                        </div>
                        {/* MISI */}
                        <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-md flex flex-col justify-center">
                            <h2 className="text-2xl font-bold mb-4 text-center">Misi</h2>
                            <p className="text-justify">
                                Memberikan pelayanan dan fasilitas terbaik untuk mempersiapkan tenaga kerja profesional untuk dalam dan luar negeri.
                            </p>
                        </div>
                    </div>
                </section>


                {/* Section 4: Layanan Kami */}
                <section className="flex flex-col items-center  pt-20" aria-label="Layanan Perusahaan">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Layanan Yang Kami Tawarkan</h2>
                    <div className="card bg-base-100 my-4 w-screen shadow-sm md:my-0 md:w-3xl">
                        <div className="card-body">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-2 my-4 w-full max-w-5xl">
                                <div className="card bg-base-100 shadow-sm">
                                    <figure>
                                        <img loading="lazy"
                                            src={picture1} alt="Integrated Facility Maintenance Solution" className="mb-2" />
                                    </figure>
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Integrated Facility Maintenance Solution</h3>
                                    </div>
                                </div>

                                <div className="card bg-base-100 shadow-sm">
                                    <figure>
                                        <img loading="lazy"
                                            src={picture2} alt="OEE & Utility Monitoring System" className="mb-2" />
                                    </figure>
                                    <div className="card-body">
                                        <h3 className="card-title text-center">OEE & Utility Monitoring System</h3>
                                    </div>
                                </div>

                                <div className="card bg-base-100 shadow-sm">
                                    <figure>
                                        <img loading="lazy"
                                            src={picture3} alt="Cleaning Service & Maintenance" className="mb-2" />
                                    </figure>
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Cleaning Service & Maintenance</h3>
                                    </div>
                                </div>

                                <div className="card bg-base-100 shadow-sm">
                                    <figure>
                                        <img loading="lazy"
                                            src={picture4} alt="TPM Training & Coaching" className="mb-2" />
                                    </figure>
                                    <div className="card-body">
                                        <h3 className="card-title text-center">TPM Training & Coaching</h3>
                                    </div>
                                </div>

                                <div className="card bg-base-100 shadow-sm">
                                    <figure>
                                        <img loading="lazy"
                                            src={picture5} alt="Outsourcing & Development" className="mb-2" />
                                    </figure>
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Outsourcing & Development</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 5: Tujuan Kami */}
                </section>
                {/* <section>
                    <div className="card bg-base-100 my-4 w-screen shadow-sm md:my-0 md:w-3xl">
                        <div className="card-body">
                            <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Tujuan Kami</h2>
                            <div className="flex flex-col gap-4">
                                <article className="card card-side bg-base-100 shadow-sm">
                                    <img loading="lazy"
                                        src={goal1} alt="Meningkatkan kompetensi global karyawan" className="w-30 h-30 object-cover" />
                                    <div className="card-body">
                                        <h3 className="card-title">Goal #1</h3>
                                        <p>Meningkatkan kompetensi global karyawan</p>
                                    </div>
                                </article>

                                <article className="card card-side bg-base-100 shadow-sm">
                                    <img loading="lazy"
                                        src={goal2} alt="Memperluas jaringan bisnis internasional" className="w-30 h-30 object-cover" />
                                    <div className="card-body">
                                        <h3 className="card-title">Goal #2</h3>
                                        <p>Memperluas jaringan bisnis internasional</p>
                                    </div>
                                </article>

                                <article className="card card-side bg-base-100 shadow-sm">
                                    <img loading="lazy"
                                        src={goal3} alt="Meningkatkan kualitas dan efisiensi layanan" className="w-30 h-30 object-cover" />
                                    <div className="card-body">
                                        <h3 className="card-title">Goal #3</h3>
                                        <p>Meningkatkan kualitas dan efisiensi layanan</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Section 6: Capaian Berikutnya */}
                {/* <section className="flex flex-col items-center border-t-4 pt-10" aria-label="Capaian Berikutnya">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Capaian Berikutnya</h2>
                    <div className="card bg-base-100 my-2 w-screen shadow-sm md:my-0 md:w-3xl">
                        <div className="card-body">
                            <p className="text-justify md:text-lg px-4 md:px-10">
                                Untuk memperluas pasar, kami mendirikan anak perusahaan baru yang bergerak di bidang pelatihan bahasa Jepang, yaitu LPK Yaruki Indonesia.
                            </p>
                            <div className="flex justify-center text-4xl mt-4 mb-2" aria-hidden="true">
                                &#129095;
                            </div>
                            <figure>
                                <img loading="lazy"
 src={Logo} alt="Logo LPK Yaruki Indonesia" className="mx-auto mb-2" />
                            </figure>
                        </div>
                    </div>
                </section> */}
            </main>


            <Footer />
        </>
    );
}
