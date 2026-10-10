# About Us — Production Line

Status: **usulan adaptasi untuk follow-up**, kecuali temuan referensi, fakta yang tercantum pada sumber MGA, dan baseline yang disebutkan. P1/P2/P3 berlaku jika menu dipilih untuk rilis. [Panduan status](../README.md).

## Temuan referensi

Referensi mengelompokkan proses produksi dalam beberapa lini, gudang dan maintenance, dengan foto dan daftar aktivitas. Sumber: [halaman referensi](https://www.iwakiglassindonesia.com/en/article/production_line).

## Penyesuaian terhadap sumber MGA

CAT 7 dan CP 13 mendukung urutan: pemilihan bahan → pemotongan → pemanasan/pembentukan → penyambungan/fusi → annealing → pemeriksaan, finishing/pelabelan jika relevan → pengemasan. Distribusi adalah tahap setelah produksi, bukan lini fabrikasi tersendiri. Borosilikat disebut sebagai bahan proses; jangan menetapkannya otomatis pada semua produk katalog. Foto workshop asli, mesin dan QC aktual masih perlu disahkan. Gunakan satu data tahapan di beranda/profil/layanan atau halaman produksi. [Pemetaan sumber](../09-pemetaan-sumber-mga.md).

## Tujuan dan alur

Menjelaskan kemampuan produksi aktual MGA melalui tahapan dan bukti foto.

Pengunjung: membuka menu → menilai konten → menuju detail atau tindakan lanjutan. PIC bisnis/materi dan reviewer belum ditetapkan; harus ditentukan sebelum input konten final.

## Requirement fungsional

| ID | Prioritas | Kebutuhan |
| --- | --- | --- |
| PRODLINE-01 | P1 | Pengantar kemampuan workshop dan batas layanan yang disetujui. |
| PRODLINE-02 | P1 | Daftar tahapan berurutan dengan judul, deskripsi singkat dan foto. |
| PRODLINE-03 | P1 | Materi awal dapat mengikuti pemilihan material, pemotongan, pembentukan, penyambungan, annealing, pemeriksaan dan pengemasan dari rancangan lokal; konfirmasi sebelum tayang. |
| PRODLINE-04 | P2 | Pengelompokan lini/fasilitas bila memang ada; tidak wajib meniru lini IWAKI. |
| PRODLINE-05 | P1 | CTA konsultasi custom; video produksi opsional. |
| PRODLINE-06 | P1 | Bagian ini dapat menjadi halaman sendiri atau blok Layanan; pilih satu sumber konten. |

## Data dan bahan dari klien

Judul/pengantar ID/EN, tahapan (ID, urutan, nama, uraian, foto/alt), kelompok lini opsional, keterangan kualitas, tautan video dan layanan.

Kontrak field/relasi: [model konten](../04-model-konten.md). Jumlah item, pemilik materi, sumber file, kelengkapan ID/EN, izin dan tenggat diisi pada [inventaris](../07-inventaris-materi.csv).

## Cara memperbarui

PIC produksi memeriksa istilah, urutan dan foto. Developer mengubah daftar proses; CMS opsional menyediakan tambah/edit/urut/arsip tahapan. Revisi klaim mutu perlu persetujuan PIC produksi sebelum publikasi.

Setiap update mengikuti alur draft → review fakta/ID-EN → preview → persetujuan versi → rilis → pemeriksaan. Detail [SOP update dan opsi CMS](../03-update-konten-dan-cms.md).

## Kriteria penerimaan

- [ ] PRODLINE-AC01: Urutan proses sama pada desktop/mobile dan ID/EN.
- [ ] PRODLINE-AC02: Setiap foto memiliki keterangan dan hak pakai; daftar tidak menampilkan proses yang tidak tersedia.
- [ ] PRODLINE-AC03: Perubahan tahapan dapat dilakukan tanpa mengganti struktur desain halaman.

## Pertanyaan follow-up

1. Apakah alur produksi menjadi halaman khusus?
2. Tahapan dan mesin apa yang boleh ditampilkan; adakah area/foto yang tidak boleh tayang?
3. Apakah QC/kalibrasi dilakukan sendiri, pihak ketiga, atau tidak ditawarkan?
