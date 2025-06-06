import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";



export default function Tentangkami2() {
    return (<>



        <Navbar />


        {/* SEO */}


        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Judul Halaman Anda yang Menarik dan Kaya Kata Kunci</title>
            <meta name="description" content="Deskripsi halaman Anda yang ringkas dan menarik (sekitar 155-160 karakter) yang menjelaskan konten halaman." />
            <meta name="keywords" content="kata kunci 1, kata kunci 2, kata kunci 3" /> {'{'}/* Meskipun kurang signifikan bagi Google, beberapa mesin pencari lain mungkin masih memperhitungkannya */{'}'}
            <meta name="author" content="Nama Anda atau Nama Organisasi Anda" />
            <link rel="canonical" href="https://www.domainanda.com/url-halaman-ini/" />
            <meta name="robots" content="index, follow" /> {'{'}/* Memberitahu robot untuk mengindeks dan mengikuti link di halaman ini */{'}'}
            {'{'}/* <meta name="robots" content="noindex, nofollow" /> */{'}'} {'{'}/* Jika Anda tidak ingin halaman ini diindeks atau linknya diikuti */{'}'}
            <meta property="og:title" content="Judul Halaman Anda untuk Media Sosial" />
            <meta property="og:description" content="Deskripsi Halaman Anda untuk Media Sosial" />
            <meta property="og:image" content="https://www.domainanda.com/gambar-unggulan.jpg" />
            <meta property="og:url" content="https://www.domainanda.com/url-halaman-ini/" />
            <meta property="og:type" content="website" /> {'{'}/* atau article, product, dll. */{'}'}
            <meta property="og:site_name" content="Nama Situs Web Anda" />
            {'{'}/* <meta property="fb:app_id" content="ID Aplikasi Facebook Anda (jika ada)" /> */{'}'}
            <meta name="twitter:card" content="summary_large_image" /> {'{'}/* atau summary */{'}'}
            <meta name="twitter:title" content="Judul Halaman Anda untuk Twitter" />
            <meta name="twitter:description" content="Deskripsi Halaman Anda untuk Twitter" />
            <meta name="twitter:image" content="https://www.domainanda.com/gambar-unggulan.jpg" />
            {'{'}/* <meta name="twitter:site" content="@akunTwitterAnda" /> */{'}'}
            {'{'}/* <meta name="twitter:creator" content="@akunTwitterPembuatKonten" /> */{'}'}
        </div>


        {/* End SEO */}
        <header>
            <Navbar />
            <h1>Tentang Kami</h1>
        </header>

        <main className="mt-10">
            <article>

                <section>
                    <h2>Tentang Perusahaan</h2>
                    <p>LPK Yaruki Indonesia berfokus terhadap training bahasa Jepang untuk penyaluran tenaga kerja Indonesia di berbagai bidang melalui program pelatihan khusus seperti mekanik mobil, body repair, manufacturing [maintenance,engineering,IT] dan lain-lain. </p>
                    <ul>
                        <li>Visi</li>
                        <li>Misi</li>

                    </ul>
                    <p>Informasi lebih lanjut mengenai poin-poin di atas.</p>
                    <blockquote>
                        <p>Kutipan penting yang relevan dengan konten Anda.</p>
                        <cite>Sumber Kutipan</cite>
                    </blockquote>
                </section>
                <section>
                    <h3>Visi</h3>
                    <p>
                        Menjadi mitra terbaik bagi Perusahaan dan individu dalam :
                        Pelatihan Bahasa asing dan skill terkini
                        Penyedia tenaga kerja terampil di dalam & luar negeri
                        Partner Excellent operations [Lean] di bidang :
                        Manufacturing : Total Productive Maint’ce (TPM mesin, equipment & building), System Integrasi ERP & TPM
                        Non Manufacturing : IT,Finance,Logistics,Services,dll
                    </p>
                </section>
                <section>
                    <h3>Misi</h3>
                    <p>Memberikan pelayanan dan fasilitas terbaik untuk mempersiapkan tenaga kerja professional untuk dalam dan luar negeri.
                    </p>
                </section>
            </article>
            <aside>
                <h3>Konten Terkait</h3>
                <ul>
                    <li><a href="/artikel-terkait-1/">Artikel Terkait 1</a></li>
                    <li><a href="/artikel-terkait-2/">Artikel Terkait 2</a></li>
                </ul>
            </aside>
        </main>
        <Footer />
    </>
    );
}
