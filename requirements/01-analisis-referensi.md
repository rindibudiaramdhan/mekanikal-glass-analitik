# Analisis website referensi

Tanggal peninjauan: 6 Oktober 2026. Metode: membaca halaman publik dan menelusuri tautan navigasi dengan alat web. Hasil baca dapat berasal dari cache crawler dengan usia berbeda; ini bukan pengujian browser interaktif atau audit backend.

## Peta navigasi yang teramati

Navigasi utama memuat Home, About Us (Production Line, Company Profile), Product dengan sepuluh kategori, Download, News Article, Contact Us, serta pilihan English, Bahasa, dan Japanese. Footer menambahkan Technical Information dan New Products. Beranda menampilkan pengantar, keunggulan, sertifikat, produk pilihan, FAQ, distributor, logo pengguna, kontak, dan subscribe. Sumber: [Home](https://www.iwakiglassindonesia.com/en/public/home).

| Area | Temuan publik | Sumber |
| --- | --- | --- |
| Company Profile | Riwayat perusahaan, kelompok usaha, produk/fasilitas, sertifikasi, visi dan misi | [Company Profile](https://www.iwakiglassindonesia.com/en/article/company_profile) |
| Production Line | Kelompok fabrikasi, volumetrik, test tube/beaker, gudang dan maintenance; daftar proses dan gambar | [Production Line](https://www.iwakiglassindonesia.com/en/article/production_line) |
| Kategori produk | Daftar produk dan label Keyword; masing-masing produk memiliki tautan detail | [Beaker & Flask](https://www.iwakiglassindonesia.com/en/product/category/beaker-flask) |
| Detail produk | Judul, subjudul, gambar serta prev/next; data teknis tidak terbaca sebagai tabel teks pada sampel | [Beaker Low Form](https://www.iwakiglassindonesia.com/en/product/beaker-low-form) |
| Produk custom | Layanan repair, pesanan khusus dan produk dengan sertifikat kalibrasi, menuju kontak | [Customize Product](https://www.iwakiglassindonesia.com/en/product/Customize-Product) |
| Produk baru | Daftar produk tersendiri dengan tautan detail | [New Product](https://www.iwakiglassindonesia.com/en/product/new_product) |
| Download video | Tiga tab: Video, Catalog, Certificates; video menggunakan embed YouTube | [Download](https://www.iwakiglassindonesia.com/en/download) |
| Download katalog | Form nama, email, alamat, telepon, dan persetujuan privasi sebelum unduhan | [Catalog](https://www.iwakiglassindonesia.com/en/download/catalog) |
| Download sertifikat | Halaman dengan input username/password | [Certificates](https://www.iwakiglassindonesia.com/en/download/certificate) |
| Berita | Daftar judul, ringkasan, tanggal/jam, read more dan pagination | [News & Article](https://www.iwakiglassindonesia.com/en/news_article) |
| Kontak | Kontak perusahaan, lokasi, distributor per negara, formulir dan persetujuan privasi; markup memuat area preview/detail distributor | [Contact Us](https://www.iwakiglassindonesia.com/en/article/contactus) |
| Informasi teknis | Empat topik: perawatan, komposisi/viskositas, properti fisik, properti listrik | [Technical Information](https://www.iwakiglassindonesia.com/en/technical_information) |
| Detail teknis | Sampel perawatan memuat gambar dan tautan topik berikutnya | [Maintenance and Care](https://www.iwakiglassindonesia.com/en/public/technical_information/view/maintenance-and-care) |
| Bahasa | Tautan ID dan JP tersedia; sebagian isi hasil baca tetap berbahasa Inggris | [Indonesia](https://www.iwakiglassindonesia.com/id/home), [Japanese](https://www.iwakiglassindonesia.com/jp/home) |

## Seluruh submenu Product

Setiap tautan kategori berikut berhasil dibaca sebagai halaman publik. Daftar ini adalah struktur referensi; kategori MGA mengikuti inventaris aktual.

| Submenu | URL sumber |
| --- | --- |
| Beaker & Flask | [Kategori](https://www.iwakiglassindonesia.com/en/product/category/beaker-flask) |
| Volumetric Ware | [Kategori](https://www.iwakiglassindonesia.com/en/product/category/volumetric-ware) |
| Centrifuge | [Kategori](https://www.iwakiglassindonesia.com/en/product/category/centrifuge) |
| Condenser | [Kategori](https://www.iwakiglassindonesia.com/en/product/category/condenser) |
| Funnel & Column | [Kategori](https://www.iwakiglassindonesia.com/en/product/category/funnel-column) |
| Culture Tube | [Kategori](https://www.iwakiglassindonesia.com/en/product/category/plant-culture) |
| Test Tube | [Kategori](https://www.iwakiglassindonesia.com/en/product/category/tubes-dish) |
| Apparatus | [Kategori](https://www.iwakiglassindonesia.com/en/product/category/apparatus) |
| Others | [Kategori](https://www.iwakiglassindonesia.com/en/product/category/others) |
| Customize Product | [Kategori](https://www.iwakiglassindonesia.com/en/product/category/Customize-Product) |

## Implikasi untuk requirement MGA — usulan

- Company profile dan bukti kemampuan produksi membantu calon pembeli menilai kredibilitas.
- Katalog perlu data terstruktur agar spesifikasi dapat dicari dan diperbarui tanpa mengganti gambar tabel.
- Custom product memerlukan konsultasi; transaksi daring tidak otomatis diperlukan.
- Sertifikat perusahaan yang boleh dilihat publik harus dipisahkan dari sertifikat produk/batch milik pelanggan.
- Distributor hanya relevan jika MGA memiliki jaringan resmi; rekanan, pengguna produk, dan distributor adalah hubungan berbeda.
- Form unduhan katalog menambah kebutuhan penyimpanan dan tindak lanjut lead. Unduhan langsung lebih sederhana jika tidak ada tujuan pengumpulan lead.
- Versi bahasa perlu konsisten, termasuk pesan validasi dan metadata.
- Pengelolaan rutin membutuhkan model konten dan SOP; adanya halaman publik tidak membuktikan CMS referensi.

## Batas verifikasi

Tidak dilakukan pengiriman formulir, subscribe, login, atau akses konten privat. Teks sukses yang terbaca pada markup tidak membuktikan pesan berhasil terkirim. Belum diverifikasi: hasil pencarian Keyword, perilaku modal/filter secara interaktif, proses unduhan setelah form, otorisasi sertifikat, pagination lanjutan, serta pengiriman email.

Dua tautan detail berita gagal dibaca oleh alat web dengan pesan cache miss: pengumuman Idul Fitri 2026 dan penghentian produk. Ini keterbatasan pengambilan data, bukan kesimpulan bahwa situs rusak. Gambar detail produk juga gagal diambil; tidak dilakukan transkripsi spesifikasi dari gambar. Tampilan desktop/mobile, font, warna, dimensi, animasi dan aksesibilitas visual belum diaudit melalui screenshot/browser.

Teknologi, CMS, database, hosting, sistem email, analitik, konfigurasi keamanan dan panel admin IWAKI tidak diketahui. Requirement teknis pada paket ini adalah usulan untuk MGA. Dokumentasi ini tidak menetapkan penyalinan visual secara persis; klien perlu memilih bagian referensi yang diinginkan dan menilai mockup MGA.
