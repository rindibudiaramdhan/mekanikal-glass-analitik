# Dokumentasi proyek MGA

Panduan pengembangan website PT Mekanikal Glass Analitik.
Ditinjau: 2 Oktober 2026. Pemilik pemeliharaan dokumentasi: developer proyek; nama penanggung jawab perlu ditetapkan.

## Mulai dari sini

1. Baca [tahapan pengerjaan](manajemen/tahapan-pengerjaan.md) untuk urutan kerja dan syarat selesai setiap tahap.
2. Pahami [rancangan website](rancangan-website.md) dan [catatan desain](design/CATATAN-DESAIN.md).
3. Pilih pekerjaan dari [backlog dan keputusan terbuka](manajemen/backlog.md).
4. Ikuti [alur pengembangan](teknis/panduan-pengembangan.md), lalu gunakan [rencana pengujian](quality/rencana-pengujian.md).
5. Sebelum peluncuran, jalankan [checklist rilis](operasional/rilis-dan-pemeliharaan.md).

## Kondisi repository

Yang tersedia adalah rancangan dan pratinjau beranda dalam HTML/CSS/JavaScript di `docs/design`, beserta aset dan hasil ekspor. Belum ditemukan aplikasi produksi, package manifest, konfigurasi build, atau workflow CI dalam peninjauan ini. Dokumen deployment mencatat Cloudflare Workers untuk pratinjau; URL dan status live belum diverifikasi.

Keputusan yang sudah tercatat: fokus kredibilitas perusahaan, bahasa ID/EN sejak peluncuran, dan pembaruan konten oleh developer tanpa halaman admin. Framework produksi dan arsitektur formulir masih perlu diputuskan.

## Peta dokumentasi

| Lokasi | Isi dan waktu pembaruan |
| --- | --- |
| [rancangan-website.md](rancangan-website.md) | Tujuan bisnis, halaman, fitur, dan arah konten; ubah saat lingkup berubah |
| [design/](design/CATATAN-DESAIN.md) | Pratinjau visual dan catatan review; ubah saat desain berubah |
| [deployment.md](deployment.md) | Konfigurasi deployment pratinjau yang sudah dicatat |
| [operasional/domain-hostinger-cloudflare.md](operasional/domain-hostinger-cloudflare.md) | Pemasangan domain Hostinger ke Worker, konflik DNS, dan cache jaringan Wi-Fi |
| [manajemen/tahapan-pengerjaan.md](manajemen/tahapan-pengerjaan.md) | Tahapan, keluaran, peran, dan kriteria selesai |
| [manajemen/backlog.md](manajemen/backlog.md) | Prioritas pekerjaan, dependensi, dan pertanyaan terbuka |
| [teknis/arsitektur.md](teknis/arsitektur.md) | Batas sistem, struktur usulan, dan kebutuhan integrasi |
| [teknis/panduan-pengembangan.md](teknis/panduan-pengembangan.md) | Setup saat ini, Git, review, dan standar implementasi |
| [teknis/keputusan/README.md](teknis/keputusan/README.md) | Indeks catatan keputusan teknis |
| [konten/panduan-konten.md](konten/panduan-konten.md) | Inventaris, dua bahasa, aset, dan persetujuan publikasi |
| [quality/rencana-pengujian.md](quality/rencana-pengujian.md) | Skenario, bukti uji, penerimaan, dan penanganan bug |
| [operasional/rilis-dan-pemeliharaan.md](operasional/rilis-dan-pemeliharaan.md) | Persiapan rilis, rollback, pemantauan, dan serah terima |
| [templates/](templates/README.md) | Format tugas, bug, keputusan, dan catatan rilis yang dapat disalin |

## Aturan dokumentasi

- Bedakan status **usulan**, **disepakati**, **diimplementasikan**, dan **terverifikasi**. Usulan dalam panduan baru belum menjadi keputusan proyek.
- Simpan satu sumber utama tiap topik dan gunakan tautan dari dokumen lain. Rancangan menjadi sumber lingkup; catatan desain menjadi sumber detail visual iterasi yang ditinjau.
- Saat dua sumber berbeda, catat perbedaan dan selesaikan bersama pemilik keputusan sebelum implementasi terkait.
- Perbarui dokumentasi yang terdampak pada pull request yang sama dengan perubahan kode.
- Catat tanggal, penanggung jawab, bukti, dan keputusan yang berubah. Gunakan `Belum ditentukan` jika belum ada informasi.
- Simpan panduan internal di luar `docs/design`: folder tersebut adalah direktori aset deployment pratinjau. Jangan menaruh kredensial, data calon pelanggan, atau dokumen pribadi di repository.
- Tambahkan dokumen saat ada kebutuhan nyata. Nama berkas memakai huruf kecil dan tanda hubung; dokumen lama dipertahankan agar tautannya tetap berlaku.
