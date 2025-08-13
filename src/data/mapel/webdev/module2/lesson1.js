export const lesson1 = {
	id: "1",
	title: "Apa itu HTML?",
	type: "reading",
	content: `<p>HTML <i>(HyperText Markup Language)</i> merupakan bahasa markup standar yang digunakan untuk membuat dan menyusun konten pada halaman web. Oleh karena itu bahasa HTML bukan bahasa pemrograman, dimana HTML tidak memiliki logika atau kemampuan untuk melakukan perhitungan, fungsinya hanya untuk membuat struktur dan presentasi konten saja. Oleh karena itu kita analogikan HTML sebagai tulang dari hewan, tanpa tulang hewan tidak akan memiliki bentuk yang bermacam-macam.</p><p>Penulisan HTML memiliki struktur dasar dalam dokumen HTML, sebagai contoh berikut ini :<pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
	&lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
	&lt;title&gt;Page Title&lt;/title&gt;
	&lt;!-- Di sini tempat CSS, JavaScript, metadata lainnya --&gt;
&lt;/head&gt;
&lt;body&gt;

	&lt;!-- Konten yang akan terlihat oleh pengguna berada disini --&gt;
	&lt;h1&gt;My First Heading&lt;/h1&gt;
	&lt;p&gt;My first paragraph.&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;</code></pre></p><p>Mari kita bedah elemen yang menjadi struktur dari HTML: </p><ul><li><code>&lt;!DOCTYPE html&gt;</code> : Elemen ini mendefinisikan versi HTML yang terbaru yaitu HTML5, jika tanpa ini html akan menjadi versi pertama.</li><li><code>&lt;html&gt;</code> : Elemen ini adalah elemen yang harus ada untuk HTML bekerja karena akar dari sebuah dokumen HTML dan elemen-elemen yang ada didalam elemen ini.</li><li><code>&lt;head&gt;</code> : Elemen ini berfungsi untuk menyimpan informasi data yang tidak ditampilkan pada halaman web. Didalamnya terdapat elemen-elemen yang mendefinisikan judul dokumen (tab browser), style, script, karakter set, dan masih banyak lain yang masuk dalam metadata ini. Contoh elemen diantaranya sbb : <div class="columns-2"><ol><li><code>&lt;title&gt;</code> (diwajibkan disetiap dokumen HTML)</li><li><code>&lt;style&gt;</code></li><li><code>&lt;base&gt;</code></li><li class="break-after-column"><code>&lt;link&gt;</code></li><li><code>&lt;meta&gt;</code></li><li><code>&lt;script&gt;</code></li><li><code>&lt;noscript&gt;</code></li></ol></div></li><li><code>&lt;body&gt;</code> : Elemen ini yang menampilkan isi konten yang ada di halaman web sehingga pengguna dapat melihat konten yang kita buat. Didalamnya berisi konten teks, gambar, video, formulir, paragraf, tables dan sebagainya.</li></ul><p>Nah, setelah itu mari kita bahas apa itu elemen-elemen HTML di halaman selanjutnya.</p>`,
};
