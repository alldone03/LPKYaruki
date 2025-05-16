import bghome from "../assets/IMG-20240220-WA0005.webp";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

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
              & Utilitas, Layanan Kebersihan)
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
      <Footer />
    </>
  );
}
