# MGA — Review rancangan beranda 01

Status: konsep desain untuk ditinjau, belum aplikasi produksi.

## Cara melihat

Buka `index.html` di browser. Gunakan kontrol **Mockup visual / Wireframe**, **Desktop / Mobile**, dan **Indonesia / English**. Untuk melihat ukuran browser sebenarnya, gunakan **Buka ukuran penuh**. Semua aset tersedia lokal; pratinjau tidak membutuhkan server atau koneksi internet.

Gambar hasil ekspor tersedia di `exports/`. Dokumen `review-desain.pdf` memuat ringkasan dan desain lengkap untuk dibagikan.

## Keputusan yang diterapkan

- Kredibilitas perusahaan menjadi prioritas: profil, kemampuan, dan proyek ditampilkan sebelum katalog.
- Indonesia dan Inggris tersedia pada seluruh teks beranda, navigasi, serta label interaksi.
- Tidak ada halaman admin; pembaruan akan dilakukan developer.
- Tombol hero mengarah ke pengenalan perusahaan. Kontak tersedia di navigasi dan bagian penutup.
- Desain desktop dan mobile memakai urutan konten yang sama. Pada mobile, proses kerja disusun vertikal dan menu diringkas.

## Arah visual

Konsep memakai latar putih hangat, hijau tua, bidang sage, dan teks arang. Foto produk asli menjadi fokus hero. Area proses produksi memakai latar gelap untuk memisahkan narasi keahlian dari daftar produk.

| Elemen | Usulan |
| --- | --- |
| Hijau utama | `#286943` |
| Teks utama | `#202B32` |
| Putih hangat | `#FAFBF8` |
| Sage | `#E9EEE4` |
| Aksen emas | `#BB8C46`, untuk dekorasi kecil |
| Tipografi pratinjau | Arial / Helvetica, tersedia lokal |
| Desktop utama | 1440 px, area konten maksimum 1280 px |
| Mobile utama | 390 px, gutter 20 px |

Palet menyempurnakan usulan awal agar lebih tenang dan konsisten. Logo resmi tetap dipakai sebagai referensi, tanpa perubahan identitas. Jenis huruf dapat difinalisasi setelah arah visual disepakati.

## Materi asli dan penanda sementara

- Foto rotary evaporator: PDF halaman 8. Transparansi asli diekstrak bersama gambar.
- Foto komponen glassware: PDF halaman 9. Transparansi asli diekstrak bersama gambar.
- Foto pengerjaan kaca: bagian foto pada PDF halaman 13, ditampilkan melalui pembingkaian CSS.
- Logo: referensi dari PDF halaman 78, ditampilkan melalui pembingkaian CSS. Ganti dengan logo asli berformat vektor sebelum produksi.
- Gambar garis pada kartu proyek adalah ilustrasi penanda tempat, bukan foto atau bukti proyek. Teks penanda tetap terlihat.
- Area rekanan menunggu nama/logo yang disetujui. Tidak menggunakan logo rekanan buatan.
- Riwayat 2006 dijelaskan sebagai awal CV Karya Mekanikal Scientific, bukan tanggal pendirian PT.
- Email bersumber dari halaman penutup PDF dan perlu dikonfirmasi sebelum website dipublikasikan.

Gambar yang dibingkai dari halaman PDF merupakan referensi desain. Gunakan file foto asli untuk hasil akhir yang lebih tajam dan bersih.

## Perilaku pratinjau

- Menu header menavigasi bagian beranda untuk membantu peninjauan alur.
- Pemilih ID/EN berpindah ke beranda dalam bahasa terpilih.
- Menu mobile dapat dibuka, ditutup, dan ditutup dengan Escape.
- Tombol email membuka aplikasi email; tidak ada pengiriman pesan otomatis.
- Halaman detail, formulir, WhatsApp bisnis, dan unduhan profil publik belum diimplementasikan dalam pratinjau ini.
- Wireframe memakai susunan yang sama dengan visual akhir, mengganti bidang gambar dengan penanda untuk memudahkan penilaian struktur.

## Fokus peninjauan berikutnya

1. Apakah arah visual sudah mewakili perusahaan?
2. Apakah urutan profil → kemampuan → proyek → produk sudah tepat?
3. Produk utama apa yang paling sesuai ditampilkan di hero?
4. Foto workshop, proyek, logo asli, dan nama rekanan mana yang dapat disediakan?

Setelah arah ini disepakati, lanjutkan rancangan halaman Tentang Kami, daftar/detail Produk, Layanan, Proyek, dan Kontak. Teknologi produksi serta estimasi development ditentukan setelah ruang lingkup dan materi final jelas.

## Verifikasi pratinjau

- Layout diperiksa pada 320, 390, 768, dan 1440 piksel dalam kedua bahasa.
- Seluruh gambar termuat; tidak ditemukan overflow horizontal atau galat JavaScript pada pemeriksaan browser.
- Menu mobile, penutupan dengan Escape, pergantian bahasa, dan kontrol review diperiksa.
- Hasil pemeriksaan tersimpan di `exports/validation.json`. Pemeriksaan ini berlaku untuk pratinjau desain, bukan pengujian website produksi.
