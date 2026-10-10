# Pengerjaan demo — 8 Oktober 2026

Pengguna menyetujui penggunaan Astro dan Cloudflare Pages terlebih dahulu, dengan prioritas website dapat didemokan kepada klien **hari ini, 8 Oktober 2026 (Asia/Jakarta)**. Konfirmasi tambahan tidak diperlukan untuk mulai implementasi preview. Keputusan ini menggantikan status rekomendasi stack pada dokumen 13; paket berbayar, CMS dan rilis domain produksi belum menjadi keputusan baru.

## Cakupan implementasi demo

- Inggris default di `/en/`, dengan pasangan Indonesia `/id/` dan tombol bahasa pada halaman setara.
- Beranda, Profil, katalog dengan pencarian/filter, tiga contoh detail produk, Layanan Custom, daftar/detail dua kandidat proyek, Kontak dan draft Privasi.
- Kontak final Office/Workshop dari dokumen 11, CTA WhatsApp dan telepon/email.
- Form menyiapkan pesan WhatsApp dengan konteks produk; pengunjung memeriksa dan mengirim di WhatsApp. Tidak ada klaim pengiriman email atau penyimpanan inquiry.
- Foto referensi dari mockup yang tersedia; label preview pada fakta/spesifikasi/kasus yang belum final. Tidak mempublikasikan PDF penuh atau lampiran pribadi.
- Layout responsive, navigasi mobile, build statis yang siap diunggah ke Cloudflare Pages.

## Cara demo dan feedback

Ikuti [panduan menjalankan](../README.md). Mulai dari Beranda → Produk → detail → Kontak/WhatsApp. Lalu tunjukkan pergantian bahasa di detail, Layanan, kandidat Proyek dan alamat Office/Workshop. Hindari mengirim pesan uji ke kontak bisnis tanpa kebutuhan; cukup lihat pesan yang disiapkan.

Minta klien menilai visual, pesan utama, prioritas kategori/produk, alur inquiry dan kemudahan navigasi mobile. Catat koreksi per halaman dengan versi preview. Pilihan editor/CMS, konten/izin final, reviewer, integrasi form dan domain mengikuti [konfirmasi lanjutan](14-konfirmasi-lanjutan.md).

Hosting Cloudflare belum dikonfigurasi: akun/akses belum tersedia. Preview lokal dan output statis dapat diserahkan tanpa menunggu domain. URL demo online harus dicatat setelah deployment benar-benar berhasil; jangan menganggap domain yang sedang dibeli sudah menayangkan website.

## Bukti verifikasi

Build statis menghasilkan 25 halaman. `npm run check` lulus tanpa error/warning. Empat uji Playwright lulus: rute EN/ID dan pasangan bahasa/gambar; pencarian/filter/hasil kosong; validasi dan pesan WhatsApp (tujuan diintersep, tidak mengirim pesan bisnis); navigasi mobile dan lebar 320/390/768/1440. Screenshot hasil uji ada pada `documentation/docs/demo/`. Instalasi dependensi terakhir melaporkan 0 vulnerabilities.

Paket unggah Cloudflare: `documentation/docs/demo/mga-cloudflare-demo.zip`; isinya hanya build website, tanpa requirements atau PDF sumber. Deployment online belum dilakukan.
