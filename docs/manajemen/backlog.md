# Backlog dan keputusan terbuka

Status awal: 2 Oktober 2026. Ini daftar rencana; belum menyatakan pekerjaan selesai atau menetapkan jadwal.

P0 = menghalangi fondasi/rilis; P1 = lingkup utama; P2 = tambahan jika disepakati.
Status tugas: `Siap` → `Dikerjakan` → `Review` → `Selesai`; gunakan `Terhambat` disertai penyebab. Tugas baru berstatus `Direncanakan` sampai memenuhi syarat siap. Penanggung jawab dan estimasi ditambahkan saat tugas diambil.

| ID | Prioritas | Pekerjaan | Dependensi | Bukti selesai | Status |
| --- | --- | --- | --- | --- | --- |
| MGA-01 | P0 | Finalisasi lingkup dan penanggung jawab | Pemilik bisnis | Daftar halaman, fitur, dan pemilik tercatat | Direncanakan |
| MGA-02 | P0 | Inventaris materi dan kontak bisnis | MGA-01 | Materi kedua bahasa dan izin publikasi tercatat | Direncanakan |
| MGA-03 | P0 | Review beranda dan desain halaman lanjutan | MGA-01; materi MGA-02 bertahap | Desain serta status interaksi ditinjau | Direncanakan |
| MGA-04 | P0 | Pilih stack, strategi bahasa, dan integrasi formulir | MGA-01 | ADR dan batas operasional disepakati | Direncanakan |
| MGA-05 | P0 | Setup aplikasi, CI, dan preview produksi | MGA-04 | Setup bersih, build, dan preview berhasil | Direncanakan |
| MGA-06 | P1 | Layout, rute bahasa, beranda, dan profil | MGA-03, MGA-05 | Halaman ID/EN lulus review | Direncanakan |
| MGA-07 | P1 | Produk dan layanan | MGA-02, MGA-06 | Detail sesuai inventaris; CTA membawa nama produk | Direncanakan |
| MGA-08 | P1 | Proyek dan rekanan | MGA-02, MGA-06 | Materi yang disetujui tampil dalam dua bahasa | Direncanakan |
| MGA-09 | P0 | Formulir, kontak, privasi, dan profil publik | MGA-02, MGA-04, MGA-06 | Uji pesan diterima, kegagalan tertangani, PDF aman | Direncanakan |
| MGA-10 | P1 | SEO dan optimasi aset | MGA-06–09 | Metadata, peta rute, dan performa diperiksa | Direncanakan |
| MGA-11 | P0 | QA, UAT, dan perbaikan | MGA-06–10 | Bukti uji kandidat serta penerimaan bisnis | Direncanakan |
| MGA-12 | P0 | Rilis dan serah terima | MGA-11 | URL produksi, versi, smoke test, dan pemilik operasi | Direncanakan |
| MGA-13 | P2 | Analitik, pencarian/filter, atau unggahan | Keputusan lingkup tersendiri | Kriteria dibuat per fitur yang dipilih | Direncanakan |

Pecah baris besar menjadi tugas kecil memakai [template tugas](../templates/tugas.md); simpan ID asal sebagai referensi. Relasi MGA-06–09 berarti semua tugas dalam rentang tersebut.

## Keputusan yang perlu diisi

| Topik | Yang harus diputuskan | Pemilik keputusan | Batas waktu logis |
| --- | --- | --- | --- |
| Lingkup | Halaman dan jumlah produk/proyek awal | Pemilik bisnis | Sebelum estimasi final |
| Materi | Kontak valid, foto asli, spesifikasi, logo/rekanan, PDF publik | Pemilik bisnis | Sebelum UAT konten |
| Teknologi | Stack, runtime, routing bahasa, struktur konten | Developer | Sebelum setup produksi |
| Formulir | Penyedia/backend, penerima, retensi, batas penggunaan | Developer + bisnis | Sebelum integrasi |
| Hosting produksi | Domain, akun, biaya, environment, akses rilis | Pemilik akun + developer | Sebelum preview produksi |
| Tambahan | Analitik, pencarian/filter, unggahan | Pemilik bisnis + developer | Sebelum implementasi tambahan |
| Operasi | Pemilik monitoring, tindak lanjut pesan, pemulihan | Pemilik bisnis + developer | Sebelum rilis |

## Pengendalian perubahan

Catat permintaan, alasan bisnis, dampak, keputusan, tanggal, dan pihak yang memutuskan pada tugas terkait. Jika disetujui, ubah rancangan, backlog, desain, dan estimasi yang terdampak. Jangan mengubah status menjadi selesai hanya karena kodenya sudah ditulis.
