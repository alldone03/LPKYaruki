import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";



export default function Artikel() {
    return (<>



        <Navbar />


        {/* SEO */}




        {/* End SEO */}

        <main className="mt-10">
            <article>
                <section>
                    <h2>Sub Judul Pertama (H2)</h2>
                    <p>Ini adalah paragraf konten Anda. Gunakan kata kunci secara alami dan berikan informasi yang berharga bagi pengguna.</p>
                    <img src="gambar-relevan-1.jpg" alt="Deskripsi gambar yang relevan dengan kata kunci" width={600} height={400} />
                    <p>Paragraf lanjutan dengan lebih banyak detail.</p>
                </section>
                <section>
                    <h2>Sub Judul Kedua (H2)</h2>
                    <p>Konten untuk bagian ini.</p>
                    <ul>
                        <li>Poin penting 1</li>
                        <li>Poin penting 2</li>
                        <li>Poin penting 3</li>
                    </ul>
                    <p>Informasi lebih lanjut mengenai poin-poin di atas.</p>
                    <blockquote>
                        <p>Kutipan penting yang relevan dengan konten Anda.</p>
                        <cite>Sumber Kutipan</cite>
                    </blockquote>
                </section>
                <section>
                    <h3>Sub Judul Lebih Dalam (H3)</h3>
                    <p>Detail lebih spesifik terkait sub judul kedua.</p>
                    <a href="https://www.yarukid.com" target="_blank" rel="noopener noreferrer">Link ke Sumber Eksternal yang Relevan</a>
                    <a href="/halaman-internal-lain/">Link ke Halaman Internal Lain</a>
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
