# News Article

Status: **usulan adaptasi untuk follow-up**, kecuali temuan referensi, fakta yang tercantum pada sumber MGA, dan baseline yang disebutkan. P1/P2/P3 berlaku jika menu dipilih untuk rilis. [Panduan status](../README.md).

## Temuan referensi

Daftar referensi memuat judul, ringkasan, tanggal/jam, read more dan pagination. Dua detail berita gagal diambil alat web, sehingga tata letak detail berikut merupakan usulan. Sumber: [halaman referensi](https://www.iwakiglassindonesia.com/en/news_article).

## Penyesuaian terhadap sumber MGA

Kedua PDF menyediakan profil/katalog dan contoh pekerjaan, tetapi belum menyediakan paket artikel bertanggal, penulis, jadwal dan PIC editorial untuk rilis. Berita tetap opsi; jangan mengubah halaman produk/proyek menjadi berita tanpa konteks publikasi yang disahkan. [Pemetaan sumber](../09-pemetaan-sumber-mga.md).

## Tujuan dan alur

Mempublikasikan pengumuman, aktivitas dan artikel yang memiliki penanggung jawab.

Pengunjung: membuka menu → menilai konten → menuju detail atau tindakan lanjutan. PIC bisnis/materi dan reviewer belum ditetapkan; harus ditentukan sebelum input konten final.

## Requirement fungsional

| ID | Prioritas | Kebutuhan |
| --- | --- | --- |
| NEWS-01 | P1 | Daftar berita terurut tanggal publikasi terbaru, dengan judul, ringkasan, tanggal dan thumbnail bila ada. |
| NEWS-02 | P1 | Detail berisi judul, tanggal, isi, gambar/caption dan lampiran opsional. |
| NEWS-03 | P1 | Draft tidak muncul publik; jadwal terbit dan arsip dapat dikelola sesuai mekanisme update. |
| NEWS-04 | P2 | Kategori berita/artikel dan pagination; jumlah per halaman ditentukan saat desain. |
| NEWS-05 | P2 | Konten terkait dan CTA ke produk/kontak sesuai konteks. |
| NEWS-06 | P1 | Bahasa ID/EN dan metadata mengikuti kebijakan publikasi; pengumuman harus tetap jelas setelah tanggal acara berlalu. |

## Data dan bahan dari klien

ID, judul/slug ID/EN, ringkasan, isi, kategori opsional, thumbnail/alt, penulis publik opsional, tanggal publikasi, status, lampiran, relasi produk dan metadata.

Kontrak field/relasi: [model konten](../04-model-konten.md). Jumlah item, pemilik materi, sumber file, kelengkapan ID/EN, izin dan tenggat diisi pada [inventaris](../07-inventaris-materi.csv).

## Cara memperbarui

PIC marketing menulis; reviewer memeriksa fakta dan terjemahan. Developer menambah artikel dan tanggal, lalu deploy. CMS opsional menggunakan editor teks, preview, draft dan publish; jadwal otomatis memerlukan dukungan scheduler yang diuji. Revisi artikel lama dicatat sebagai versi perubahan.

Setiap update mengikuti alur draft → review fakta/ID-EN → preview → persetujuan versi → rilis → pemeriksaan. Detail [SOP update dan opsi CMS](../03-update-konten-dan-cms.md).

## Kriteria penerimaan

- [ ] NEWS-AC01: Daftar dan detail memiliki tanggal/judul yang konsisten; artikel draft tidak dapat diakses publik.
- [ ] NEWS-AC02: Tautan read more dan pagination bekerja; gambar/lampiran tidak rusak.
- [ ] NEWS-AC03: Artikel panjang, heading, daftar dan tabel dapat dibaca di mobile; kode/HTML berbahaya tidak dieksekusi.

## Pertanyaan follow-up

1. Apakah menu ini perlu pada peluncuran?
2. Siapa menulis, menerjemahkan, menyetujui dan seberapa sering update?
3. Berapa artikel awal; perlu kategori, jadwal terbit dan arsip?
