# Panduan pengembangan

## Menjalankan pratinjau sekarang

Buka `documentation/docs/design/index.html` di browser, lalu pilih mockup/wireframe, perangkat, dan bahasa. Aset pratinjau tersedia lokal. Detail ada pada [catatan desain](../design/CATATAN-DESAIN.md).

Repository belum memiliki perintah install, dev, build, lint, atau test aplikasi produksi. Jangan mengasumsikan `npm run dev` sudah tersedia. Setelah stack diputuskan, tulis versi runtime, package manager, langkah instalasi dari lockfile, nama variabel environment tanpa rahasianya, serta perintah nyata di dokumen ini. Uji dari checkout bersih.

## Alur Git dan review

1. Periksa status kerja; pertahankan perubahan yang sudah ada sebelum mulai.
2. Buat branch singkat, misalnya `feat/mga-06-beranda`, `fix/menu-mobile`, atau `documentation/docs/panduan-kerja`.
3. Kerjakan satu tujuan yang dapat ditinjau. Hindari memasukkan format ulang atau perubahan lain yang tidak terkait.
4. Periksa diff dan jalankan validasi yang relevan.
5. Buat commit bermakna, misalnya `feat: tambah halaman profil dalam ID dan EN`.
6. Buat PR berisi masalah, hasil perubahan, bukti uji, screenshot jika UI berubah, dan dampak konfigurasi.
7. Review, selesaikan temuan, lalu gabungkan setelah pemeriksaan lolos.

Catatan deployment saat ini menggunakan `main`. Pastikan perubahan ke branch itu dipahami dampaknya terhadap deployment otomatis. Rekomendasi proses tim: PR dan pemeriksaan wajib sebelum merge; aturan proteksi branch belum diverifikasi atau dikonfigurasi oleh dokumentasi ini.

## Syarat tugas siap dikerjakan

- Tujuan pengguna, lingkup, dan kriteria penerimaan sudah jelas.
- Desain serta konten minimum tersedia; placeholder diberi label bila masih dipakai untuk development.
- Dependensi, keputusan teknis, dan cara menguji sudah diketahui.
- Penanggung jawab serta ukuran pekerjaan sudah ditetapkan.

## Standar implementasi

- Gunakan HTML semantik, label formulir, urutan heading, fokus terlihat, serta navigasi keyboard.
- Pisahkan konten, label terjemahan, komponen, dan integrasi berdasarkan tanggung jawabnya.
- Hindari duplikasi layout per bahasa; perbedaan bahasa berasal dari data dan peta rute.
- Validasi data saat build atau pada batas masuk yang sesuai. Tangani keadaan kosong dan gagal secara eksplisit.
- Tentukan ukuran gambar, varian responsif, dan pemuatan sesuai posisi pada halaman.
- Jangan commit secrets, data pengunjung, atau konfigurasi lokal berisi kredensial. Jika membutuhkan environment, sediakan contoh berisi nama variabel dan nilai dummy.
- Tambahkan dependensi hanya untuk kebutuhan yang jelas; commit lockfile dan dokumentasikan cara menjalankan build.

## Syarat tugas selesai

- Kriteria penerimaan terpenuhi dalam kedua bahasa dan ukuran layar yang relevan.
- Tidak ada placeholder yang tanpa sengaja ikut dipublikasikan.
- Pengujian sesuai risiko lolos; hasil dan batas pengujiannya tercatat pada PR.
- Reviewer dapat melihat preview atau bukti hasil.
- Dokumentasi dan konfigurasi contoh diperbarui bila terdampak.
- Tidak ada bug penghambat yang belum diselesaikan.

## Pemeriksaan otomatis yang perlu dibuat

Setelah stack tersedia, CI menjalankan instalasi konsisten, pemeriksaan format/lint, pemeriksaan tipe bila digunakan, validasi konten/rute, test perilaku penting, dan build. Simpan perintah yang sama untuk lokal dan CI. Kegagalan harus terlihat sebelum merge. Dokumen atau perubahan teks sederhana cukup diperiksa tautan, fakta, dan diff; tidak perlu membuat test yang sekadar menyalin isi implementasi.
