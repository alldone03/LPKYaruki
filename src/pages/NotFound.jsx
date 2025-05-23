import { Link } from "react-router";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 px-4 text-center">
            <h1 className="text-7xl font-bold text-error">404</h1>
            <p className="text-2xl font-semibold mt-4">Halaman tidak ditemukan</p>
            <p className="text-base mt-2 mb-6 text-base-content/70">
                Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
            </p>
            <Link to="/" className="btn btn-primary">
                Kembali ke Beranda
            </Link>
        </div>
    )
}