# Model konten dan validasi

Status: kontrak konseptual untuk implementasi, belum skema database final. Penyimpanan bisa berupa file terstruktur atau CMS. **W** berarti wajib saat entitas digunakan, **O** opsional, **I** internal dan tidak diterbitkan. Field editorial bertanda ID/EN harus memiliki pasangan bahasa.

## Field bersama

| Field | Jenis/status | Aturan |
| --- | --- | --- |
| id | Teks, W | Stabil dan unik, tidak berubah saat judul/slug diganti |
| locale content | Objek ID/EN, W | Menyimpan pasangan terjemahan pada ID yang sama |
| slug | Teks per bahasa, W untuk detail | Unik per jenis konten/bahasa; perubahan dicatat untuk redirect |
| status | Enum, W | draft/review/published/archived; hanya published dirender publik |
| title/name | Teks ID/EN, W | Tidak kosong; nama legal/kode resmi boleh tetap sama |
| seo title/description | Teks ID/EN, W untuk halaman | Dapat diturunkan dari konten lalu direview |
| sort order | Angka, O | Urutan eksplisit untuk menu, kategori dan featured |
| reviewer/approval | Metadata, I | Reviewer, waktu, versi disetujui; bukan klaim persetujuan yang sudah ada |
| created/updated | Timestamp, I | Membantu riwayat; tanggal publikasi dicatat terpisah |

## Site Settings dan halaman profil

- Site Settings: nama legal/brand (W), logo dan alt (W), alamat (W), email/nomor bisnis yang dapat dihubungi (W), URL peta (O), jam operasional (O), sosial (O), menu aktif (W), bahasa aktif (W). Penerima form disimpan pada konfigurasi server privat.
- Beranda: hero judul/ringkasan ID/EN (W), gambar/CTA (W), daftar blok aktif dan urutan (W), referensi produk/proyek (O), FAQ (O).
- Profil: ringkasan/sejarah ID/EN (W), visi/misi (O), timeline (O: tahun, judul, uraian), foto (O), dokumen publik (O).
- Tahapan produksi: nama/uraian ID/EN (W), urutan (W), foto/alt (W bila memakai foto), kelompok lini (O).
- FAQ: pertanyaan/jawaban ID/EN (W), urutan (W), relasi link (O).

## Produk, kategori dan varian

| Entitas | Field | Aturan |
| --- | --- | --- |
| Kategori | id, nama/slug ID/EN, deskripsi, gambar, urutan, status | Nama/slug/status W; kategori arsip tidak menerima produk terbit baru |
| Produk induk | id, categoryId, nama/slug, ringkasan, deskripsi, material, aplikasi | Kategori/nama/ringkasan W; klaim material/aplikasi hanya dari sumber terverifikasi |
| Spesifikasi | atribut, label ID/EN, nilai, satuan, catatan | Daftar key-value/tabel; label dan nilai W, satuan W bila relevan |
| Foto produk | mediaId, urutan, alt ID/EN | Minimal satu foto asli atau ilustrasi berizin untuk produk terbit |
| Varian | id, productId, SKU, atribut, kapasitas/ukuran/joint, satuan, kemasan | W hanya jika produk memiliki varian; SKU unik bila dipakai |
| Penanda | featured, new, newUntil, urutan | O; newUntil bila penanda baru dibatasi waktu |
| Relasi | documentIds, guideIds, relatedProductIds | O; harus menunjuk konten terbit yang ada |

Tidak semua produk glassware menggunakan atribut yang sama. Gunakan atribut per kategori/varian; jangan memaksa produk custom atau thermometer memiliki kapasitas mL. Produk induk dan SKU dihitung terpisah untuk estimasi input. Harga/stock/lead time tidak wajib pada katalog inquiry.

## Artikel, panduan, layanan dan proyek

- Artikel: judul/slug, ringkasan, isi ID/EN, tanggal publikasi (W); thumbnail, kategori, penulis publik, lampiran (O).
- Panduan: judul/slug, isi ID/EN, topik, sumber, reviewer teknis internal, tanggal review (W); tabel, grafik, lampiran dan produk terkait (O).
- Layanan: nama/slug, cakupan, uraian, alur dan CTA ID/EN (W); foto, contoh dan kondisi pemesanan yang disetujui (O).
- Proyek: judul/slug, kebutuhan, lingkup, foto dan izin publikasi internal (W); hasil terverifikasi, nama klien, tanggal, relasi produk/layanan (O). Nama klien tidak wajib untuk proyek anonim.
- Rekanan: nama, jenis relasi (pelanggan/rekanan/distributor/lainnya), izin publikasi internal dan status (W); logo/link (O). Distributor memakai entitas di bawah.

## Media, dokumen dan distributor

- Media: id, file/URL, jenis MIME, ukuran, alt ID/EN untuk gambar informatif, sumber/hak pakai internal, status (W); caption ID/EN (O). Arsip sumber dan keluaran optimal dibedakan.
- Dokumen publik: id, judul ID/EN, jenis, bahasa file, file, versi, tanggal, status (W); ukuran yang dihitung, relasi produk/kategori (O). PDF diterbitkan hanya dari versi yang disetujui untuk publik.
- Sertifikat perusahaan publik: judul, penerbit, identitas dokumen, versi/masa berlaku jika ada, file publik dan status (W sesuai dokumen). Tidak diperlakukan sebagai sertifikat pelanggan.
- Video: id, judul ID/EN, URL embed/tautan, status (W); thumbnail, ringkasan dan urutan (O).
- Distributor: id, nama, negara/wilayah, kontak bisnis, status resmi terverifikasi internal dan status publikasi (W); alamat, website, fax, logo, urutan (O).

## Data operasional privat — hanya jika fitur dipilih

| Entitas | Data | Kontrol |
| --- | --- | --- |
| Inquiry | ID, timestamp, nama, kontak, perusahaan, produk/varian, pesan, persetujuan, status kirim/follow-up | Akses sales terbatas, bukan aset frontend; tujuan/retensi ditentukan |
| Lead unduhan | ID, nama, email, dokumen, waktu/persetujuan, status | Data minimum sesuai tujuan; tidak otomatis berlangganan newsletter |
| Subscriber | Email, status, waktu/sumber persetujuan, konfirmasi/unsubscribe | Hindari email duplikat; simpan daftar berhenti berlangganan |
| Akun portal | ID pengguna, kontak login, status, peran/relasi pelanggan | Penyedia autentikasi mengelola kredensial; bukan konten publik |
| Sertifikat privat | ID, batch/kode produk, file privat, pelanggan, versi/tanggal, izin/masa akses | Validasi hak akses setiap permintaan, pencabutan dan audit |

## Validasi sebelum publikasi

1. ID/slug unik; pasangan bahasa dan field wajib lengkap.
2. Semua referensi ID valid; konten terbit tidak menunjuk draft privat.
3. Nilai spesifikasi dan satuan sama secara semantik di ID/EN.
4. File benar-benar tersedia, jenis dan ukuran memenuhi batas yang ditetapkan saat implementasi; URL embed memakai penyedia yang diizinkan.
5. Isi rich text disanitasi; tautan tidak mengandung skrip berbahaya.
6. Izin dan versi materi disetujui; dokumen rahasia tidak masuk direktori keluaran publik.
7. Hapus/arsip konten yang sedang dirujuk harus menawarkan penggantian, melepas relasi, atau menghalangi publikasi sampai relasi diperbaiki.
