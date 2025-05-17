import bghome from "../assets/IMG-20240220-WA0005.webp";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Picture1 from "../assets/program-kami/Picture1.png";
import Picture2 from "../assets/program-kami/Picture2.png";
import Picture3 from "../assets/program-kami/Picture3.png";

export default function ProgramKami() {
    return (
        <>
            <title>Program Kami</title>
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
                                Program Kami
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

            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900">Fasilitas</h2>
                    <div className=" grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 p-6">

                        <img src={Picture1} alt="kelas" />
                        <img src={Picture2} alt="kelas" />
                        <img src={Picture3} alt="kelas" />

                    </div>
                    <p className="mt-4 text-lg text-gray-500 text-justify indent-8">
                        Kami menyediakan fasilitas yang memadai untuk siswa yang mengikuti program pelatihan Bahasa,budaya & ketrampilan dari awal hingga berangkat ke Jepang.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}