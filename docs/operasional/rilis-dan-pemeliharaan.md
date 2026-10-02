# Rilis, pemulihan, dan pemeliharaan

Status: prosedur usulan untuk website produksi. Konfigurasi yang tercatat saat ini adalah [deployment pratinjau](../deployment.md); domain, stack, dan perintah rilis produksi belum ditetapkan.

## Sebelum rilis

- [ ] Catat penanggung jawab rilis, pemilik akun, waktu, domain, dan penerima formulir.
- [ ] Catat commit kandidat, hasil build/CI, laporan QA, dan penerimaan bisnis.
- [ ] Pastikan konten kedua bahasa, kontak, dan unduhan publik disetujui.
- [ ] Konfirmasi output publik; dokumentasi internal dan data pribadi tidak ikut terbit.
- [ ] Konfigurasi environment dan secrets melalui platform, dengan hak akses sesuai kebutuhan.
- [ ] Pastikan preview terpisah dan memakai data/penerima pengujian.
- [ ] Catat konfigurasi domain, HTTPS, redirect, metadata, dan pengindeksan produksi.
- [ ] Simpan versi/artifact sebelumnya serta konfigurasi yang diperlukan untuk pemulihan.
- [ ] Tentukan langkah rollback sesuai platform terpilih dan uji pada preview.
- [ ] Catat perubahan konfigurasi atau data yang tidak ikut pulih hanya dengan rollback kode.

## Langkah rilis

1. Tetapkan build yang sudah lolos uji dan pastikan konfigurasi targetnya benar.
2. Deploy melalui alur produksi yang terdokumentasi setelah stack dipilih.
3. Verifikasi URL sebenarnya: beranda ID/EN, halaman detail, pemilih bahasa, formulir, WhatsApp, PDF, dan 404.
4. Kirim pesan uji yang ditandai jelas; konfirmasi penerima bisnis mendapatkannya.
5. Periksa error runtime, aset gagal, metadata domain, dan status pengindeksan.
6. Isi [catatan rilis](../templates/catatan-rilis.md), termasuk hasil verifikasi dan masalah tersisa.

Jangan menyatakan deployment berhasil hanya karena proses upload selesai. Jika domain belum dapat diakses atau pesan belum diterima, catat kegagalan dan tangani sebelum menutup pekerjaan.

## Pemulihan ketika rilis bermasalah

Pemicu: halaman penting tidak tersedia, permintaan pelanggan gagal, konfigurasi mengirim pesan ke tujuan salah, atau materi privat terpublikasi.

1. Penanggung jawab menilai dampak dan menghentikan rilis lanjutan.
2. Pulihkan artifact/versi yang diketahui baik melalui mekanisme platform; cocokkan konfigurasi pendukungnya.
3. Jika ini peluncuran pertama dan belum ada versi baik, gunakan halaman pemeliharaan atau halaman kontak yang sudah diverifikasi.
4. Verifikasi kembali rute ID/EN, kontak, dan pengiriman pesan.
5. Untuk materi privat yang terlanjur terbit, hapus materi dan tangani salinan/cache yang relevan; rollback kode saja belum tentu cukup.
6. Catat waktu, gejala, dampak, versi sebelum/sesudah, tindakan, dan pekerjaan pencegahan. Perbaikan berikutnya kembali melalui QA.

Nama layanan, perintah pemulihan, ID versi, URL pemeriksaan, dan lokasi konfigurasi wajib dilengkapi setelah arsitektur hosting dipilih. Dokumentasikan referensi akses tanpa menyimpan kredensial.

## Pemeliharaan yang disarankan

| Waktu | Pekerjaan | Penanggung jawab peran |
| --- | --- | --- |
| Setelah rilis | Pantau error, halaman inti, dan penerimaan pesan | Developer + penerima bisnis |
| Mingguan | Periksa ketersediaan, formulir, tautan penting, dan kuota layanan | Pengelola teknis |
| Bulanan | Review konten/kontak, dependensi, akses akun, dan biaya | Developer + bisnis |
| Sebelum kedaluwarsa | Perpanjang domain/layanan dan verifikasi pembayaran | Pemilik akun |
| Saat ada insiden/perubahan penyedia | Evaluasi dampak, perbarui integrasi, uji pemulihan | Developer |

Frekuensi dapat disesuaikan dengan kapasitas dan kebutuhan bisnis. Tetapkan penerima notifikasi dan jalur eskalasi sebelum serah terima.

## Serah terima minimum

- URL produksi/preview, repository, versi live, dan pemilik domain/hosting.
- Cara menjalankan, membangun, memperbarui konten ID/EN, dan merilis.
- Referensi akses akun melalui kanal aman, daftar variabel environment tanpa nilai rahasia.
- Penanggung jawab tindak lanjut formulir serta langkah memeriksa pesan yang gagal.
- Lokasi backup konten/aset, prosedur pemulihan, dan tanggal uji terakhir.
- Daftar masalah tersisa beserta prioritas dan pemiliknya.
