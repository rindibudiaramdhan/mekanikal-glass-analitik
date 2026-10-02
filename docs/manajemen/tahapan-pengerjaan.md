# Tahapan pengerjaan website secara profesional

Status: panduan kerja usulan berdasarkan kondisi repository pada 2 Oktober 2026.

## Prinsip kerja

Kerjakan per fitur yang dapat ditinjau dari tampilan sampai perilakunya. Setiap tahap menghasilkan bukti yang bisa diperiksa. Estimasi diberikan setelah lingkup, ketersediaan materi, dan kapasitas pelaksana diketahui; waktu menunggu materi dicatat terpisah dari waktu implementasi.

Peran minimum: pemilik bisnis memutuskan lingkup dan fakta perusahaan; designer menjaga alur serta visual; developer menangani implementasi dan operasi; reviewer/QA memeriksa hasil. Satu orang dapat memegang beberapa peran, tetapi penerimaan fakta bisnis tetap berasal dari perusahaan. Tetapkan nama masing-masing sebelum pengerjaan produksi.

## 1. Audit awal dan penyelarasan tujuan

- Baca rancangan, desain, dan deployment yang sudah ada.
- Catat fitur yang nyata, materi sementara, keputusan yang sudah dibuat, dan kendala.
- Tetapkan penanggung jawab konten, review, rilis, dan tindak lanjut permintaan pelanggan.
- Konfirmasi ukuran keberhasilan: pengunjung memahami perusahaan, menemukan bukti kemampuan, dan dapat menghubungi kontak bisnis.

**Keluaran:** ringkasan kondisi pada [indeks](../README.md) dan daftar keputusan terbuka pada [backlog](backlog.md).
**Selesai bila:** tim memahami lingkup awal, pemilik keputusan jelas, dan pratinjau tidak dianggap sebagai website produksi lengkap.

## 2. Finalisasi kebutuhan dan lingkup peluncuran

- Turunkan setiap halaman pada rancangan menjadi tugas dengan tujuan pengunjung dan kriteria penerimaan.
- Tetapkan produk/proyek yang masuk rilis pertama, bidang formulir, penerima pesan, serta kebutuhan kontak.
- Pertahankan ID/EN dan pengelolaan konten oleh developer sesuai keputusan yang tercatat.
- Putuskan fitur tambahan seperti pencarian, unggahan, dan analitik secara eksplisit.
- Catat perubahan permintaan beserta dampak biaya, jadwal, desain, dan pengujian sebelum memasukkannya ke lingkup.

**Keluaran:** backlog prioritas, lingkup rilis, dan kriteria penerimaan.
**Selesai bila:** pemilik bisnis menyepakati halaman/fitur rilis dan semua pekerjaan prioritas utama memiliki batas yang jelas.

## 3. Siapkan konten dan aset

- Inventarisasi logo, foto, katalog, spesifikasi, proyek, kontak, dan profil publik.
- Verifikasi fakta serta hak publikasi; siapkan pasangan teks Indonesia dan Inggris.
- Pisahkan materi sementara dari materi siap tayang.
- Catat materi yang belum tersedia, pemiliknya, dan dampaknya pada halaman.

**Keluaran:** inventaris sesuai [panduan konten](../konten/panduan-konten.md).
**Selesai bila:** setiap halaman rilis memiliki materi yang disetujui atau penyesuaian lingkup yang tercatat. Pekerjaan layout dapat berjalan dengan placeholder yang ditandai.

## 4. Selesaikan UX dan desain

- Review beranda yang tersedia, lalu lanjutkan profil, daftar/detail produk, layanan, daftar/detail proyek, kontak, dan privasi.
- Definisikan desktop/mobile, menu, pemilih bahasa, 404, serta status kosong, validasi, mengirim, berhasil, dan gagal pada fitur terkait.
- Periksa panjang teks Inggris, urutan heading, label, fokus keyboard, dan kontras.
- Simpan keputusan visual dan catatan revisi di `docs/design` hanya jika layak menjadi materi review publik.

**Keluaran:** desain halaman serta interaksi yang dapat diperiksa.
**Selesai bila:** alur utama dan tampilan kedua bahasa telah ditinjau; developer tidak perlu menebak perilaku penting.

## 5. Putuskan arsitektur dan siapkan fondasi

- Bandingkan pendekatan teknis berdasarkan kebutuhan halaman, konten, routing bahasa, formulir, hosting, biaya, dan kemampuan tim.
- Catat keputusan beserta konsekuensinya menggunakan ADR, yaitu catatan keputusan arsitektur.
- Buat aplikasi produksi, perintah lokal/build, struktur konten, konfigurasi environment, dan CI setelah stack dipilih.
- Siapkan preview terpisah, serta periksa bahwa output deployment hanya berisi aset publik yang diperlukan.

**Keluaran:** [arsitektur](../teknis/arsitektur.md) yang diperbarui, ADR, setup yang dapat diulang, dan pemeriksaan otomatis dasar.
**Selesai bila:** checkout bersih dapat dijalankan dan dibangun memakai langkah terdokumentasi; preview dapat diperiksa tanpa mengganti produksi.

## 6. Implementasi bertahap

Urutan yang disarankan:

1. Struktur konten dan rute ID/EN, layout, navigasi, footer, dan 404.
2. Beranda dan Tentang Kami untuk menguji pola visual serta konten dua bahasa.
3. Daftar/detail produk dan layanan, berikut konteks produk pada permintaan penawaran.
4. Daftar/detail proyek dan materi bukti perusahaan yang disetujui.
5. Kontak, integrasi formulir, WhatsApp, privasi, serta unduhan profil publik.
6. Metadata, sitemap, tautan versi bahasa, optimasi aset, dan analitik bila masuk lingkup.

Untuk setiap fitur: ambil satu tugas → implementasi → periksa → buat PR → review → perbarui dokumen → gabungkan setelah pemeriksaan lolos. Uji formulir dengan penerima pengujian sebelum memakai kontak produksi.

**Keluaran:** fitur yang dapat didemonstrasikan di preview.
**Selesai bila:** kriteria penerimaan setiap fitur terpenuhi dan bukti pengujian tercatat.

## 7. QA dan penerimaan pengguna

- Jalankan [matriks pengujian](../quality/rencana-pengujian.md) pada build kandidat rilis.
- Periksa perangkat, kedua bahasa, konten, aksesibilitas, tautan, pengiriman formulir, serta kegagalan integrasi.
- Minta pemilik bisnis meninjau fakta, produk, kontak, dan alur permintaan.
- Perbaiki masalah yang menghalangi rilis; uji kembali bagian terdampak.

**Keluaran:** hasil uji, daftar bug, dan catatan penerimaan pengguna (UAT).
**Selesai bila:** tidak ada bug penghambat terbuka, konten disetujui, dan versi kandidat tercatat.

## 8. Rilis dan serah terima

- Jalankan [checklist operasional](../operasional/rilis-dan-pemeliharaan.md).
- Catat versi sebelumnya, siapkan pemulihan, deploy kandidat, dan lakukan pemeriksaan singkat pada domain sebenarnya.
- Serahkan akses melalui kanal aman, panduan pembaruan, serta tanggung jawab pemantauan.

**Keluaran:** website terverifikasi pada URL produksi dan catatan rilis.
**Selesai bila:** halaman utama serta kontak berfungsi dan pemilik operasional mengetahui cara menangani masalah.

## 9. Pemeliharaan

Tinjau kesehatan website, penerimaan formulir, masa berlaku domain, perubahan konten, dan dependensi. Masukkan perubahan berikutnya ke backlog; gunakan kembali alur tugas, review, pengujian, dan rilis.

## Ritme kerja

- Awal siklus: pilih pekerjaan sesuai kapasitas dan selesaikan dependensinya.
- Saat bekerja: perbarui status serta hambatan ketika berubah.
- Akhir siklus: demonstrasikan hasil di preview, catat feedback, dan revisi estimasi sisa pekerjaan.
- Hindari menetapkan tanggal peluncuran sebelum ketergantungan konten dan integrasi dipahami.
