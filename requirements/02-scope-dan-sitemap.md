# Scope, adaptasi MGA dan sitemap

## Baseline yang sudah tercatat

[Rancangan website](../docs/rancangan-website.md) mencatat tujuan kredibilitas/profil, bahasa Indonesia dan Inggris sejak rilis, serta update melalui developer tanpa halaman admin. [Arsitektur](../docs/teknis/arsitektur.md) masih berupa arahan; stack produksi belum dipilih. Dokumen requirements ini memperluas bahan diskusi berdasarkan referensi, belum mengganti keputusan terdahulu.

| Area | Baseline lokal | Adaptasi yang disarankan | Status |
| --- | --- | --- | --- |
| Beranda dan profil | Sudah direncanakan | Tambahkan struktur keunggulan, FAQ atau bukti kualitas sesuai materi | Baseline + usulan |
| Produksi | Bagian beranda/layanan | Halaman alur produksi tersendiri bila cukup foto dan informasi | Opsi perlu konfirmasi |
| Produk | Kategori dan detail | Gunakan inventaris MGA, data spesifikasi terstruktur | Baseline |
| Custom | Di bawah layanan | Pertahankan layanan custom; kategori custom boleh menjadi pintasan | Baseline + usulan |
| Proyek/rekanan | Sudah direncanakan | Tetap tampil sebagai bukti pengalaman MGA | Baseline |
| Download | Profil PDF publik | Halaman katalog/video bila materi tersedia | Opsi perlu konfirmasi |
| Berita dan informasi teknis | Belum dalam daftar halaman awal | Aktifkan bila ada PIC penulis dan reviewer | Opsi tambahan |
| Distributor | Belum direncanakan | Jangan mengganti rekanan menjadi distributor | Opsi tambahan |
| Portal sertifikat | Belum direncanakan | Hanya bila ada proses penerbitan/akses pelanggan | Opsi besar |
| Bahasa Jepang | Referensi memiliki JP | ID/EN tetap baseline; JP ditambahkan bila perlu | Opsi tambahan |
| CMS | Admin tidak masuk scope awal | Siapkan kebutuhan CMS jika klien meminta update mandiri | Perubahan scope |
| Newsletter | Belum direncanakan | Perlu PIC, konten rutin dan layanan pengiriman | Opsi tambahan |

## Sitemap usulan untuk diskusi

```text
/id/ dan /en/ — halaman setara pada setiap bahasa
├── Beranda
├── Tentang Kami
│   ├── Profil Perusahaan
│   └── Alur Produksi [opsi halaman terpisah]
├── Produk
│   ├── Kategori MGA yang disetujui
│   ├── Detail Produk
│   └── Produk Baru [opsi]
├── Layanan
│   └── Glassware Custom / konsultasi
├── Proyek
│   └── Detail Proyek
├── Unduhan [opsi perluasan dari profil PDF]
│   ├── Katalog / profil publik
│   ├── Video [opsi]
│   └── Sertifikat pelanggan [opsi portal privat]
├── Berita & Artikel [opsi]
│   └── Detail Artikel
├── Informasi Teknis [opsi]
│   └── Detail Panduan
├── Kontak / Minta Penawaran
│   └── Distributor [opsi blok atau halaman]
└── Kebijakan Privasi
```

Label dan slug final mengikuti pilihan klien. Menu opsional disembunyikan jika belum ada konten yang disetujui. Jika klien ingin navigasi sama dengan IWAKI, tentukan penempatan Layanan dan Proyek agar kebutuhan MGA tetap terwakili. Detail requirement Proyek ada pada [menu adaptasi MGA](menu/10-layanan-proyek-mga.md).

## Lingkup kerja yang perlu dihitung

1. Desain: header/footer, desktop/mobile, template setiap tipe halaman, formulir dan keadaan kosong/gagal.
2. Pembangunan: frontend, rute ID/EN, konten terstruktur, formulir/integrasi, SEO, hosting dan domain.
3. Konten awal: jumlah produk induk, varian/SKU, kategori, foto, artikel, proyek dan PDF dinyatakan terpisah. Template halaman tidak sama dengan biaya input semua konten.
4. Update: mekanisme, pihak pengelola, batas revisi, frekuensi, biaya per perubahan atau paket pemeliharaan.
5. Jika CMS dipilih: admin, otorisasi, editor konten, media, pratinjau, workflow publikasi, pelatihan dan backup.
6. Jika portal sertifikat dipilih: akun, reset sandi, relasi pelanggan-batch, unggah file, izin akses, pencabutan akses dan audit unduhan.

## Batas usulan

Katalog dan inquiry menjadi alur utama. Keranjang, checkout, pembayaran, stok real-time, ongkos kirim otomatis, integrasi ERP/CRM, akun pelanggan umum, dan otomatisasi sertifikat tidak diasumsikan masuk. Masing-masing memerlukan kebutuhan bisnis dan estimasi tersendiri jika diminta.

Tidak ada estimasi biaya/waktu sebelum jumlah materi, pilihan CMS, integrasi dan menu peluncuran diputuskan. PIC keputusan: perwakilan klien yang berwenang, nama belum ditetapkan. Target keputusan: sebelum estimasi final dan pembangunan produksi.
