export const lesson2 = {
	id: '2',
	title: 'Mengubah Gaya Navbar',
	type: 'text',
	content: `<p>Sebelum kita mengubah gaya kita perlu membuat sebuah file dengan nama <code>style.css</code> dan kita perlu menambahkan sedikit tag HTML pada <code>index.html</code> dibagian &lt;head&gt;</p>
<pre><code>&lt;head&gt;
	&lt;meta charset="UTF-8"&gt;
	&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
	&lt;title&gt;Situs Blog Saya&lt;/title&gt;
	<i>&lt;!--- Ketik kode yang bercetak tebal didalam tag &lt;head&gt; ---&gt;</i>
	<b>&lt;link rel="stylesheet" href="style.css" /&gt;</b>
&lt;/head&gt;
</code></pre>
<p> Kemudian ketik kode berikut pada file <code>style.css</code> : </p>
<pre><code>* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: Arial, Helvetica, sans-serif;
}

nav {
	background-color: #333;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
}

.navbar-logo {
	font-size: 24px;
	font-weight: bold;
}

.navbar-link {
	list-style: none;
	display: flex;
}

.navbar-link li {
	margin-left: 20px;
}

.navbar-link a {
	color: white;
	text-decoration: none;
	font-size: 18px;
}

.navbar-link a:hover {
	font-weight: bold;
	color: #ddd;
}</pre></code>
<p>Maka tampilan sebuah navigasi bar akan menjadi seperti ini</p>
<figure class="flex flex-col items-center">
	<img loading="lazy" src="/pembelajaran/img/hasil-navbar.png" alt="Website pertama di dunia." />
	<figcaption class="text-sm">Hasil perubahan navigasi bar</figcaption>
</figure>`,
};
