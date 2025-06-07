import bghome from "../assets/IMG-20240220-WA0005.webp";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Logo from "../assets/logo.png";

import picture1 from "../assets/tentang-kami/Picture1.png";
import picture2 from "../assets/tentang-kami/Picture2.png";
import picture3 from "../assets/tentang-kami/Picture3.png";
import picture4 from "../assets/tentang-kami/Picture4.png";
import picture5 from "../assets/tentang-kami/Picture5.png";

import goal1 from "../assets/tentang-kami/goal1.png";
import goal2 from "../assets/tentang-kami/goal2.png";
import goal3 from "../assets/tentang-kami/goal3.png";

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
                <section className="flex h-screen flex-col items-center pt-20" aria-label="Tentang Perusahaan">
                    <h2 className="mb-5 text-2xl md:text-4xl font-bold text-white">Tentang Perusahaan</h2>
                    <p className="px-4 text-justify indent-10 md:px-9 md:text-2xl py-10">
                        PT Yaruki Solusi Indonesia adalah perusahaan yang didirikan oleh para ahli di bidang operational & service excellence, lean practitioner, total productive maintenance, cleaning & maintenance service, dan pengembangan sumber daya manusia.
                    </p>
                    <table className="mx-2 my-4 w-full md:w-auto md:px-7 table-auto border border-gray-300 text-base md:text-2xl">
                        <tbody>
                            <tr>
                                <th className="w-1/3 px-4 py-2 font-bold text-left">Nama Perusahaan</th>
                                <td className="px-4 py-2">:</td>
                                <td className="px-4 py-2">PT. Yaruki Solusi Indonesia</td>
                            </tr>
                            <tr>
                                <th className="px-4 py-2 font-bold text-left">Tanggal Berdiri</th>
                                <td className="px-4 py-2">:</td>
                                <td className="px-4 py-2">2025</td>
                            </tr>
                            <tr>
                                <th className="px-4 py-2 font-bold text-left">Alamat</th>
                                <td className="px-4 py-2">:</td>
                                <td className="px-4 py-2">
                                    Jl Merak Raya H1 No. 134 Jababeka II, Desa Mekarmukti, Kecamatan Cikarang Utara, Kabupaten Bekasi, Jawa Barat
                                </td>
                            </tr>
                            <tr>
                                <th className="px-4 py-2 font-bold text-left">Bidang Usaha</th>
                                <td className="px-4 py-2">:</td>
                                <td className="px-4 py-2">
                                    1. Maintenance <br />
                                    2. People Development <br />
                                    3. Pelatihan Bahasa Jepang
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Section 3: Visi & Misi */}
                <section className="flex h-screen flex-col items-center border-t-4 pt-20" aria-label="Visi dan Misi Perusahaan">
                    <h2 className="mb-5 text-2xl md:text-4xl font-bold">Visi & Misi</h2>
                    <p className="px-4 text-justify indent-10 md:px-9 md:text-2xl">
                        Memberikan pelayanan dan fasilitas terbaik untuk mempersiapkan tenaga kerja profesional untuk dalam dan luar negeri.
                    </p>

                    <div className="card bg-primary text-primary-content w-96 md:w-1/2 my-5">
                        <div className="card-body">
                            <h3 className="text-center text-2xl md:text-4xl font-bold">Visi</h3>
                            <ul className="list-disc list-inside text-justify indent-4 md:text-2xl mt-3">
                                <li>Menjadi mitra terbaik bagi perusahaan dan individu dalam:</li>
                                <li>Pelatihan bahasa asing dan skill terkini</li>
                                <li>Penyedia tenaga kerja terampil di dalam & luar negeri</li>
                                <li>Partner excellent operations (Lean) di bidang:</li>
                                <ul className="list-circle list-inside ml-6">
                                    <li>Manufacturing: Total Productive Maintenance (mesin, equipment & building), Welding, Sistem Integrasi ERP, dll</li>
                                    <li>Non Manufacturing: IT, Finance, Logistics, Services, dll</li>
                                </ul>
                            </ul>
                        </div>
                    </div>

                    <div className="card bg-primary text-primary-content w-96 md:w-1/2">
                        <div className="card-body">
                            <h3 className="text-center text-2xl md:text-4xl font-bold">Misi</h3>
                            <p className="text-justify indent-8 md:text-2xl mt-3">
                                Memberikan pelayanan dan fasilitas terbaik untuk mempersiapkan tenaga kerja profesional untuk dalam dan luar negeri.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 4: Layanan Kami */}
                <section className="flex flex-col items-center border-t-4 pt-20" aria-label="Layanan Perusahaan">
                    <h2 className="mb-5 text-2xl font-bold">Layanan Yang Kami Tawarkan</h2>
                    <div className="card bg-base-100 my-4 w-screen shadow-sm md:my-0 md:w-3xl">
                        <div className="card-body">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-2 my-4 w-full max-w-5xl">
                                <div className="card bg-base-100 shadow-sm">
                                    <figure>
                                        <img src={picture1} alt="Integrated Facility Maintenance Solution" className="mb-2" />
                                    </figure>
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Integrated Facility Maintenance Solution</h3>
                                    </div>
                                </div>

                                <div className="card bg-base-100 shadow-sm">
                                    <figure>
                                        <img src={picture2} alt="OEE & Utility Monitoring System" className="mb-2" />
                                    </figure>
                                    <div className="card-body">
                                        <h3 className="card-title text-center">OEE & Utility Monitoring System</h3>
                                    </div>
                                </div>

                                <div className="card bg-base-100 shadow-sm">
                                    <figure>
                                        <img src={picture3} alt="Cleaning Service & Maintenance" className="mb-2" />
                                    </figure>
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Cleaning Service & Maintenance</h3>
                                    </div>
                                </div>

                                <div className="card bg-base-100 shadow-sm">
                                    <figure>
                                        <img src={picture4} alt="TPM Training & Coaching" className="mb-2" />
                                    </figure>
                                    <div className="card-body">
                                        <h3 className="card-title text-center">TPM Training & Coaching</h3>
                                    </div>
                                </div>

                                <div className="card bg-base-100 shadow-sm">
                                    <figure>
                                        <img src={picture5} alt="Outsourcing & Development" className="mb-2" />
                                    </figure>
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Outsourcing & Development</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 5: Tujuan Kami */}
                    <div className="card bg-base-100 my-4 w-screen shadow-sm md:my-0 md:w-3xl">
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-bold mb-5">Tujuan Kami</h2>
                            <div className="flex flex-col gap-4">
                                <article className="card card-side bg-base-100 shadow-sm">
                                    <img src={goal1} alt="Meningkatkan kompetensi global karyawan" className="w-30 h-30 object-cover" />
                                    <div className="card-body">
                                        <h3 className="card-title">Goal #1</h3>
                                        <p>Meningkatkan kompetensi global karyawan</p>
                                    </div>
                                </article>

                                <article className="card card-side bg-base-100 shadow-sm">
                                    <img src={goal2} alt="Memperluas jaringan bisnis internasional" className="w-30 h-30 object-cover" />
                                    <div className="card-body">
                                        <h3 className="card-title">Goal #2</h3>
                                        <p>Memperluas jaringan bisnis internasional</p>
                                    </div>
                                </article>

                                <article className="card card-side bg-base-100 shadow-sm">
                                    <img src={goal3} alt="Meningkatkan kualitas dan efisiensi layanan" className="w-30 h-30 object-cover" />
                                    <div className="card-body">
                                        <h3 className="card-title">Goal #3</h3>
                                        <p>Meningkatkan kualitas dan efisiensi layanan</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6: Capaian Berikutnya */}
                <section className="flex flex-col items-center border-t-4 pt-10" aria-label="Capaian Berikutnya">
                    <h2 className="mb-2 text-2xl font-bold">Capaian Berikutnya</h2>
                    <div className="card bg-base-100 my-2 w-screen shadow-sm md:my-0 md:w-3xl">
                        <div className="card-body">
                            <p className="text-justify md:text-lg px-4 md:px-10">
                                Untuk memperluas pasar, kami mendirikan anak perusahaan baru yang bergerak di bidang pelatihan bahasa Jepang, yaitu LPK Yaruki Indonesia.
                            </p>
                            <div className="flex justify-center text-4xl mt-4 mb-2" aria-hidden="true">
                                &#129095;
                            </div>
                            <figure>
                                <img src={Logo} alt="Logo LPK Yaruki Indonesia" className="mx-auto mb-2" />
                            </figure>
                        </div>
                    </div>
                </section>
            </main>


            <Footer />
        </>
    );
}
