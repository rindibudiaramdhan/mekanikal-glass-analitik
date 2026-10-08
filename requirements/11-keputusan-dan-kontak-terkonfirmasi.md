# Keputusan dan kontak terkonfirmasi

Tanggal: **8 Oktober 2026 (Asia/Jakarta)**. Sumber: konfirmasi pengguna melalui chat. Dokumen ini mengungguli usulan/historis yang berbeda pada requirements sebelumnya. Konfirmasi ini mengizinkan pengerjaan preview; bukan bukti website sudah dibangun atau izin otomatis merilis ke domain produksi.

## Scope tahap pertama yang disetujui

Beranda, Tentang Kami/Profil Perusahaan, Produk (kategori dan detail), Layanan Custom, Proyek (daftar dan detail sesuai materi), Kontak, dan Kebijakan Privasi. Akses unduhan katalog ditambahkan setelah PDF publik siap; halaman Unduhan khusus belum menjadi kewajiban tahap pertama. Jumlah produk/proyek awal belum ditetapkan. Lima kategori dan 34 keluarga kandidat tetap usulan sumber, bukan jumlah SKU yang disepakati.

Materi katalog/company profile boleh digunakan sebagai dasar draft preview. Fakta yang belum pasti diberi penanda review; tidak dijadikan klaim publik final. Preview diprioritaskan agar feedback cepat dan perubahan bisa dilakukan bertahap. Mockup HTML/CSS/JS sudah ada di `docs/design`; aplikasi produksi belum dibangun.

## Bahasa dan kriteria penerimaan

- Inggris menjadi default. Usulan rute: `/` menuju `/en/`, dengan pasangan `/en/` dan `/id/`.
- Tautan langsung `/id/` tetap membuka Indonesia; tidak dipaksa kembali ke Inggris.
- Tombol **English / Indonesia** terlihat pada header desktop dan navigasi mobile, dapat dipakai dengan keyboard dan menandai bahasa aktif.
- Pergantian menuju halaman/produk/proyek yang sama menggunakan ID konten stabil; bukan selalu menuju beranda. Pasangan yang belum tersedia ditandai dalam preview; rilis menolak pasangan wajib yang hilang.
- Metadata, label, pesan formulir, alt gambar dan konten editorial tersedia dalam kedua bahasa; gunakan `lang`, canonical dan hreflang yang sesuai.

## Kontak publik final

| Lokasi | Nama | WhatsApp tampil | Telepon tampil |
| --- | --- | --- | --- |
| Office | Anna Mariaga | 08112341010 | 082115226477 |
| Workshop | Rio Aria Sanova | 0812 9973 1583 | Belum diberikan; jangan mengasumsikan nomor telepon terpisah |

Email yang ditampilkan: **mekanikalglassanalitik@gmail.com**.

Alamat Office: **Jl. Bukit Reuma No. 50, RT 07/RW 19, Kel. Sadang Serang, Kec. Coblong, Kota Bandung 40133.**

Alamat Workshop: **Jl. Bukit Reuma No. 43, RT 07/RW 19, Kel. Sadang Serang, Kec. Coblong, Kota Bandung 40133.**

| Tindakan | Tujuan teknis |
| --- | --- |
| WhatsApp Office | https://wa.me/628112341010 |
| Telepon Office | tel:+6282115226477 |
| WhatsApp Workshop | https://wa.me/6281299731583 |
| Email publik | mailto:mekanikalglassanalitik@gmail.com |

Normalisasi nomor hanya mengganti awalan 0 dengan +62; fungsi klik dan kecocokan nomor harus diuji sebelum rilis. Usulan CTA penawaran utama menuju Office; workshop untuk konsultasi teknis. Pembagian inquiry dan penerima formulir masih perlu konfirmasi. Email publik tidak otomatis menjadi penerima backend.

Nama, alamat, nomor dan email disimpan dalam satu Site Settings agar header/footer/kontak/CTA konsisten. Kontak baru ini menggantikan konflik email/nomor pada CAT/CP. Pin peta dan jam operasional belum diberikan; alamat dapat ditampilkan tanpa menunggu keduanya.

## Domain dan kemudahan update

Domain disepakati: **mekanikalglassindoanalitik.com**. Pembelian sedang dilakukan pengguna; kepemilikan aktif, registrar, DNS dan hosting belum diverifikasi.

Pengguna sangat merekomendasikan menu yang memudahkan perubahan konten. Baseline update melalui developer tetap dapat dipakai untuk preview, tetapi pilihan CMS belum final. Siapkan pemisahan konten/layout dan konfigurasi global sejak awal. Evaluasi CMS sederhana sebelum rilis apabila pengelola perlu mengedit sendiri; jangan menganggap admin khusus telah disetujui. Lihat [rekomendasi teknologi](13-rekomendasi-teknologi-dan-hosting.md).
