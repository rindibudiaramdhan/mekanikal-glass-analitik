# Cara update konten dan pilihan pengelolaan

## Keputusan awal dan opsi

Baseline [rancangan MGA](../docs/rancangan-website.md): update dibantu developer dan **tanpa halaman admin** pada scope awal. Panel admin/CMS IWAKI tidak dapat diverifikasi dari halaman publik. Opsi CMS di bawah adalah rancangan baru untuk diskusi, bukan klaim tentang sistem referensi.

| Opsi | Cara kerja | Cocok bila | Dampak |
| --- | --- | --- | --- |
| A — developer, baseline | Klien menyerahkan materi; developer mengubah file konten, preview dan deploy | Update sesekali; tim belum memerlukan admin | Tidak ada UI admin; perlu kesepakatan layanan update dan waktu respons |
| B — CMS terkelola | Klien mengedit melalui CMS; publish langsung atau memicu build | Update rutin dan tim editorial tersedia | Konfigurasi CMS, akun, preview, biaya layanan dan pelatihan |
| C — admin khusus | Dashboard dibangun mengikuti workflow bisnis | Perlu SKU kompleks, izin khusus atau portal sertifikat | Scope lebih besar: backend, database, auth, pemeliharaan dan keamanan |

Rekomendasi saat ini: lanjut opsi A sampai klien meminta pengelolaan mandiri. CMS bukan prasyarat untuk menambah halaman publik. Pilihan platform dan biaya ditetapkan setelah jumlah/frekuensi konten jelas.

## SOP opsi A — update melalui developer

1. **Permintaan:** PIC mengirim ID halaman/produk, jenis perubahan, teks ID/EN, foto/PDF final, tanggal tayang yang diinginkan dan nama reviewer. Gunakan tabel inventaris; jangan mengganti seluruh PDF hanya untuk menjelaskan satu perubahan teks.
2. **Pemeriksaan bahan:** developer mengecek field wajib, relasi, bahasa, spesifikasi/satuan dan file yang boleh publik. Fakta teknis/legal disahkan oleh klien.
3. **Pengeditan:** konten berubah pada file terstruktur yang disepakati saat implementasi, misalnya Markdown/JSON/YAML. Nama/path final belum dipilih. Gambar dioptimalkan, dokumen diberi versi, slug lama dicatat bila berubah.
4. **Pratinjau:** build dan preview terpisah dari produksi. Periksa semua halaman yang menggunakan data yang sama, termasuk beranda, katalog dan bahasa pasangan.
5. **Review klien:** PIC menyetujui materi/versi preview. Ini adalah usulan SOP operasional, bukan persyaratan izin tambahan untuk penyusunan requirement ini.
6. **Publikasi:** developer merilis versi yang telah disetujui melalui proses deployment produksi. Periksa tautan, gambar, unduhan, kedua bahasa dan formulir bila konfigurasi penerima berubah.
7. **Pencatatan dan pemulihan:** catat versi/tanggal/perubahan, simpan versi sebelumnya, dan rollback bila ditemukan kesalahan material.

Target penyelesaian update, batas revisi, biaya dan mekanisme perubahan mendesak **belum disepakati**. Perubahan layout/fungsi baru dinilai sebagai pekerjaan pengembangan, terpisah dari edit konten dalam template yang tersedia.

## Matriks update per jenis konten

| Konten | Materi yang diserahkan | Lokasi pengelolaan | Dampak publikasi | Reviewer usulan |
| --- | --- | --- | --- | --- |
| Beranda | Teks, hero, pilihan produk/proyek, urutan blok | Data Beranda | Halaman depan ID/EN | Marketing + perwakilan perusahaan |
| Profil | Fakta, sejarah, visi/misi | Profil | Profil dan ringkasan terkait | Perwakilan perusahaan |
| Produksi | Tahapan, foto, kemampuan | Proses Produksi | Halaman/blok produksi | PIC produksi |
| Kategori | Nama, slug, urutan | Kategori | Menu, daftar dan filter | PIC produk |
| Produk/varian | Sheet data dan foto | Produk/Varian | Katalog, detail, featured, baru | PIC produk/teknis |
| Custom/layanan | Cakupan, alur, foto | Layanan | Layanan dan CTA | PIC bisnis/produksi |
| Proyek/rekanan | Narasi, foto, jenis hubungan, izin | Proyek/Rekanan | Detail dan pilihan beranda | PIC proyek + pemberi izin |
| PDF publik | File final, versi, bahasa | Dokumen Publik | Daftar unduh dan relasi produk | Pemilik dokumen |
| Video | URL, judul, thumbnail | Video | Tab video/blok produksi | Marketing |
| Sertifikat privat | Batch, dokumen, pelanggan/izin | Portal privat, jika dipilih | Hanya akun berhak | Petugas sertifikat |
| Artikel | Judul, isi, ringkasan, tanggal | Artikel | Daftar dan detail | Marketing/editor |
| Panduan teknis | Isi, tabel, sumber, tanggal review | Panduan | Detail dan relasi produk | Reviewer teknis |
| Distributor | Identitas, wilayah, kontak, status resmi | Distributor | Beranda/kontak | PIC sales |
| Kontak/menu/sosial | Nomor, alamat, link dan penerima | Site Settings/config server | Seluruh website | Perwakilan perusahaan |
| Label bahasa | Teks dan glosarium | Locale/UI labels | Seluruh UI ID/EN | Penerjemah + reviewer |

## Requirement CMS — hanya bila opsi B/C dipilih

| ID | Kebutuhan | Prioritas dalam scope CMS |
| --- | --- | --- |
| CMS-01 | Login akun individual, logout, reset akses; tidak memakai akun bersama | P1 |
| CMS-02 | Admin mengelola akun/hak akses; editor membuat draft; publisher menyetujui publikasi | P1; peran dapat diringkas jika tim kecil |
| CMS-03 | Form field terstruktur untuk semua konten yang dipilih, relasi melalui ID | P1 |
| CMS-04 | Tambah/edit/arsip, urutan, pencarian internal dan validasi field | P1 |
| CMS-05 | ID/EN berdampingan atau mudah dibandingkan; publish ditolak bila terjemahan wajib kurang | P1 |
| CMS-06 | Media library gambar/PDF dengan alt, sumber, izin dan versi | P1 |
| CMS-07 | Preview draft yang tidak masuk sitemap/indeks publik; izin preview dibatasi | P1 |
| CMS-08 | Draft → review → publish → archive; revisi/riwayat dan pemulihan versi | P1 |
| CMS-09 | Perubahan konten tidak mengharuskan editor mengubah kode/layout | P1 |
| CMS-10 | Bila publish memicu build, tampilkan status pending/sukses/gagal; konten gagal build tidak dianggap tayang | P1 |
| CMS-11 | Jadwal terbit, import massal SKU/CSV, ekspor konten | P2, dipilih sesuai kebutuhan |
| CMS-12 | Logs siapa/kapan/apa yang berubah, backup data+media dan pemulihan | P1 |

Pengelolaan lead/subscriber/sertifikat privat bukan otomatis bagian CMS editorial. Ketiganya memerlukan izin dan penyimpanan tersendiri jika dipilih. Jangan menaruh secret SMTP, password atau API token dalam field konten publik.

## Usulan hak akses

| Peran | Dapat dilakukan | Batas |
| --- | --- | --- |
| Admin sistem | Akun, konfigurasi, backup | Rahasia server dikelola melalui platform hosting |
| Editor konten | Draft, media publik, penerjemahan | Tidak publish atau membaca inquiry jika tidak diberi izin |
| Publisher | Review dan publish konten | Tidak otomatis berwenang mengelola portal sertifikat |
| Petugas sales | Inquiry dan tindak lanjut | Tidak mengedit seluruh website |
| Petugas sertifikat | Dokumen privat dan izin pelanggan | Tidak mengubah konfigurasi sistem |

Nama pengelola dan pembagian peran perlu dipastikan. Jika hanya satu pengelola, peran boleh digabung dengan keputusan tercatat.

## Serah terima dan operasional

Deliverable usulan: panduan langkah update, contoh satu produk/varian dan artikel, pelatihan PIC, daftar akun perusahaan, prosedur backup/restore, rollback, kontak dukungan, serta biaya domain/hosting/CMS/email. Uji satu perubahan teks, tambah produk, ganti PDF dan publikasi ID/EN oleh pengelola yang akan bekerja sehari-hari.

Untuk opsi A, developer mendemokan alur permintaan–preview–rilis. Untuk CMS, PIC harus berhasil menyelesaikan edit dan publish contoh tanpa mengubah kode. Backup mencakup konten dan media; jadwal, lokasi, retensi, target kehilangan data dan waktu pemulihan diputuskan sebelum produksi.
