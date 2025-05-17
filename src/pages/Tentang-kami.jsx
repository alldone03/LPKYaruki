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
            <title>Tentang Kami</title>
            {/* // center phone */}
            <Navbar />
            {/* Section 1 */}
            <div
                style={{ "--image-url": `url(${bghome})` }}
                className="min-h-screen bg-[image:var(--image-url)] bg-cover bg-fixed bg-center bg-no-repeat text-center"
            >
                <div className="h-screen bg-black/50 backdrop-blur-none">
                    <div className="md:bg-opacity-50 px-4 pt-72 md:flex md:flex-col md:items-center md:justify-center">
                        <article className="prose lg:prose-xl text-center text-white">
                            <h1 className="text-5xl font-bold text-white md:text-8xl">
                                Tentang Kami
                            </h1>
                            <p className="indent-8">
                                "Share Value, Membangun Manusia, Membangun Bangsa Indonesia"
                            </p>
                        </article>

                        <div className="mt-8 flex justify-center">
                            <button className="btn rounded bg-white px-6 py-2 font-semibold text-blue-700 hover:bg-gray-200">
                                Daftar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 2 */}
            <div className="flex h-screen flex-col items-center pt-20">
                <h1 className="mb-5 text-2xl font-bold">Tentang Perusahaan</h1>
                <p className="px-4 text-justify indent-10 md:px-9">
                    PT Yaruki Solusi Indonesia merupakan perusahaan yang dibangun oleh
                    para ahli di bidang operational & service excellence, lean
                    practitioner, total productive maintenance, cleaning & maintenance
                    service dan people development.
                </p>
                <table className="mx-2 my-4 w-full table-auto border-gray-300 text-base">
                    <tbody>
                        <tr>
                            <td className="w-1/3 px-4 py-2 font-bold">Nama Perusahaan</td>
                            <td className="w-1 px-4 py-2">:</td>
                            <td className="px-4 py-2">PT. Yaruki Solusi Indonesia</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 font-bold">Tanggal Berdiri</td>
                            <td className="px-4 py-2">:</td>
                            <td className="px-4 py-2">2024</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 font-bold">Alamat</td>
                            <td className="px-4 py-2">:</td>
                            <td className="px-4 py-2">
                                Jl Merak Raya H1 No. 134 Jababeka II, Desa Mekarmukti, Kecamatan
                                Cikarang Utara, Kabupaten Bekasi, Jawa Barat
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 font-bold">Bidang Usaha</td>
                            <td className="px-4 py-2">:</td>
                            <td className="px-4 py-2">
                                1. Maintenance
                                <br />
                                2. People Development
                                <br />
                                3. Pelatihan Bahasa Jepang
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Section 3 */}
            <div className="flex h-screen flex-col items-center border-t-4 pt-20">
                <h1 className="mb-5 text-2xl font-bold">Visi & Misi</h1>
                <p className="px-4 text-justify indent-10 md:px-9">
                    Kami berkomitmen untuk memberikan produk dan layanan berkualitas
                    tinggi sekaligus berfokus pada kesehatan dan keselamatan kerja,
                    keberlanjutan lingkungan, dan kesejahteraan masyarakat.
                </p>
                <br />
                <div className="card bg-primary text-primary-content w-96">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Visi</h2>
                        <p className="text-justify indent-8">
                            Menjadi mitra terbaik bagi perusahaan yang ingin mencapai; Operasi
                            Lean, Pemeliharaan Produktif Total (TPM), Integrasi antara Program
                            ERP & TPM, dan Pemeliharaan Fasilitas Terpadu (Fasilitas, Bangunan
                            & Utilitas, Layanan Kebersihan).
                        </p>
                    </div>
                </div>
                <br />
                <div className="card bg-primary text-primary-content w-96">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Misi</h2>
                        <p className="text-justify indent-8">
                            Mengutamakan kepuasan pelanggan, perbaikan berkelanjutan, dan
                            budaya belajar
                        </p>
                    </div>
                </div>
            </div>
            {/* section 4 */}
            <div className="flex flex-col items-center border-t-4 pt-20">
                <h1 className="mb-5 text-2xl font-bold">Layanan Yang Kami Tawarkan</h1>
                <div className="card bg-base-100 my-4 w-screen shadow-sm md:my-0 md:w-3xl">
                    <div className="card-body">
                        <div className="grid grid-cols-2 gap-4 mx-2 my-4 w-full max-w-5xl">
                            <div className="card bg-base-100  shadow-sm">
                                <figure>
                                    <img src={picture1} alt="" className="mb-2" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">Intergated Facility Maintenance Solution</h2>
                                </div>
                            </div>
                            <div className="card bg-base-100  shadow-sm">
                                <figure>
                                    <img src={picture2} alt="" className="mb-2" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">OEE & Utility Monitoring System</h2>
                                </div>
                            </div>
                            <div className="card bg-base-100  shadow-sm">
                                <figure>
                                    <img src={picture3} alt="" className="mb-2" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">Cleaning Service & Maintenance</h2>
                                </div>
                            </div>
                            <div className="card bg-base-100  shadow-sm">
                                <figure>
                                    <img src={picture4} alt="" className="mb-2" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">TPM Training & Coaching</h2>
                                </div>
                            </div>
                            <div className="card bg-base-100  shadow-sm">
                                <figure>
                                    <img src={picture5} alt="" className="mb-2" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">Outsourcing & Development</h2>
                                </div>
                            </div>




                        </div>
                    </div>

                </div>
                {/* Section 5 */}
                <div className="card bg-base-100 my-4 w-screen shadow-sm md:my-0 md:w-3xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Tujuan Kami</h2>
                        <div className="flex flex-col gap-2">
                            <div className="card card-side bg-base-100 shadow-sm">
                                <img
                                    src={goal1}
                                    alt="Movie" className="w-30 h-30 object-fill" />
                                <div className="card-body">
                                    <h2 className="card-title">Goal #1</h2>
                                    <p>Meningkatkan kompetensi global karyawan
                                    </p>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-sm">
                                <img
                                    src={goal2}
                                    alt="Movie" className="w-30 h-30 object-fill" />
                                <div className="card-body">
                                    <h2 className="card-title">Goal #2</h2>
                                    <p>Memperluas jaringan bisnis internasional

                                    </p>

                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-sm">
                                <img
                                    src={goal3}
                                    alt="Movie" className="w-30 h-30 object-fill" />

                                <div className="card-body">
                                    <h2 className="card-title">Goal #3</h2>
                                    <p>Meningkatkan kualitas dan efisiensi layanan
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div >
            {/* Section 6 */}
            <div div className="flex flex-col items-center border-t-4 pt-10" >
                <h1 className="mb-2 text-2xl font-bold">Capaian Berikutnya</h1>
                <div className="card bg-base-100 my-2 w-screen shadow-sm md:my-0 md:w-3xl">
                    <div className="card-body">
                        <p className="text-justify">Untuk mencapai tujuan terciptanya pasar yang lebih luas, kami mendirikan anak perusahaan baru yang bergerak di bidang pelatihan bahasa Jepang yaitu LPK Yaruki Indonesia.
                        </p>
                        {/* arrow down */}
                        <div className="flex justify-center">
                            &#129095;
                        </div>
                        <figure>
                            <img src={Logo} alt="" className="mb-2" />
                        </figure>
                    </div>
                </div></div >
            <div>

            </div>
            <Footer />
        </>
    );
}
