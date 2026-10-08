# Language

**Pembaruan 8 Oktober 2026:** scope tahap pertama dan preview telah disetujui. Inggris menjadi default dengan tombol English/Indonesia. Kontak publik dan domain sudah ditetapkan; CMS, routing inquiry, volume konten dan jadwal belum final. [Keputusan terbaru](../11-keputusan-dan-kontak-terkonfirmasi.md), [tahapan](../12-rencana-tahapan-pengerjaan.md), [teknologi/hosting](../13-rekomendasi-teknologi-dan-hosting.md), dan [konfirmasi tersisa](../14-konfirmasi-lanjutan.md) mengungguli usulan lama yang berbeda. Catatan di bawah dipertahankan sebagai konteks historis.

Status: **usulan adaptasi untuk follow-up**, kecuali temuan referensi, fakta yang tercantum pada sumber MGA, dan baseline yang disebutkan. P1/P2/P3 berlaku jika menu dipilih untuk rilis. [Panduan status](../README.md).

## Temuan referensi

Referensi menyediakan tautan English, Indonesia dan Japanese. Hasil baca ID/JP masih memiliki bagian berbahasa Inggris; kelengkapan terjemahan tidak diasumsikan. Sumber: [halaman referensi](https://www.iwakiglassindonesia.com/id/home).

## Penyesuaian terhadap sumber MGA

Narasi sumber terutama Indonesia dan sebagian tabel/judul Inggris; belum tersedia pasangan editorial ID/EN lengkap. Gunakan glosarium keluarga katalog (labu ukur/volumetric flask, gelas ukur/graduated cylinder, hidrometer/hydrometer, corong pisah/separating funnel, kondensor/condenser). Salah eja seperti “Tree-neck”, “Reciver”, “Droping” dan “Monodest” diperiksa sebelum normalisasi; merek/model resmi dipertahankan. Nama legal CV/PT tidak diubah tanpa konfirmasi. Label unduhan menyatakan bahasa file yang sebenarnya, termasuk campuran bila berlaku. [Pemetaan sumber](../09-pemetaan-sumber-mga.md).

## Tujuan dan alur

Menyediakan pengalaman ID/EN yang konsisten mengikuti baseline proyek MGA.

Pengunjung: membuka menu → menilai konten → menuju detail atau tindakan lanjutan. PIC bisnis/materi dan reviewer belum ditetapkan; harus ditentukan sebelum input konten final.

## Requirement fungsional

| ID | Prioritas | Kebutuhan |
| --- | --- | --- |
| LANG-01 | P1 | Bahasa Indonesia dan Inggris tersedia sejak rilis; JP hanya jika scope ditambah. |
| LANG-02 | P1 | Rute bahasa terpisah dan pemilih bahasa menuju halaman konten yang setara. |
| LANG-03 | P1 | Label navigasi, CTA, isi, form, error, status, alt dan metadata diterjemahkan. |
| LANG-04 | P1 | Nama legal, kode produk, nilai/satuan teknis tetap konsisten; istilah mengikuti glosarium. |
| LANG-05 | P1 | Pasangan bahasa memakai ID konten yang sama; slug boleh berbeda. |
| LANG-06 | P1 | Jika terjemahan wajib belum lengkap, halaman ditahan dari rilis kedua bahasa; jangan membuat fallback diam-diam. |
| LANG-07 | P1 | HTML lang, canonical dan hreflang mengikuti rute yang benar. |

## Data dan bahan dari klien

Locale, ID pasangan konten, slug per bahasa, semua field editorial terjemahan, label UI, metadata serta glosarium. File PDF dapat memiliki bahasa berbeda dengan label yang jelas.

Kontrak field/relasi: [model konten](../04-model-konten.md). Jumlah item, pemilik materi, sumber file, kelengkapan ID/EN, izin dan tenggat diisi pada [inventaris](../07-inventaris-materi.csv).

## Cara memperbarui

PIC fakta meninjau sumber Indonesia, penerjemah membuat Inggris, reviewer memastikan makna dan spesifikasi sama. Developer/CMS memasangkan via ID stabil; preview kedua bahasa sebelum publish dalam rilis yang sama.

Setiap update mengikuti alur draft → review fakta/ID-EN → preview → persetujuan versi → rilis → pemeriksaan. Detail [SOP update dan opsi CMS](../03-update-konten-dan-cms.md).

## Kriteria penerimaan

- [ ] LANG-AC01: Ganti bahasa pada detail produk tetap menuju produk yang sama, bukan kembali ke beranda.
- [ ] LANG-AC02: Semua status formulir dan halaman kosong/404 tersedia dalam bahasa yang benar.
- [ ] LANG-AC03: Rilis menolak pasangan bahasa wajib yang hilang; hreflang dan canonical tidak saling salah arah.

## Pertanyaan follow-up

1. ID/EN tetap cukup atau perlu Jepang/bahasa lain?
2. Siapa penerjemah dan reviewer istilah teknis?
3. Apakah katalog/PDF harus diterjemahkan juga?
