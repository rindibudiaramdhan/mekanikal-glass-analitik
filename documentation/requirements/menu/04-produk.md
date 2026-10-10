# Product — kategori, detail, custom dan produk baru

Status: **usulan adaptasi untuk follow-up**, kecuali temuan referensi, fakta yang tercantum pada sumber MGA, dan baseline yang disebutkan. P1/P2/P3 berlaku jika menu dipilih untuk rilis. [Panduan status](../README.md).

## Temuan referensi

Referensi memiliki sepuluh kategori. Sampel detail Beaker memiliki gambar serta prev/next; custom menawarkan jalur kontak. Daftar produk baru terpisah. Lihat sumber tambahan di bawah. Sumber: [halaman referensi](https://www.iwakiglassindonesia.com/en/product/category/beaker-flask).

Sumber tambahan: [detail Beaker](https://www.iwakiglassindonesia.com/en/product/beaker-low-form), [Custom](https://www.iwakiglassindonesia.com/en/product/Customize-Product), [Produk Baru](https://www.iwakiglassindonesia.com/en/product/new_product).

## Penyesuaian terhadap sumber MGA

CAT 3 dan 8–63 menggantikan kategori referensi sebagai dasar katalog MGA. Ada lima kelompok usulan dan [34 kelompok kandidat untuk pendataan](../10-inventaris-produk-sumber.csv). Angka ini bukan jumlah produk/SKU final. Tabel banyak berupa gambar; spesifikasi harus menjadi data HTML terstruktur setelah diperiksa PIC teknis. Rotary pada CAT 8–9/CP 8–9 perlu penyelesaian satuan water bath dan nilai vakum. Merek/kode sumber seperti BRAND/DURAN tidak otomatis menjadi merek/SKU MGA. [Pemetaan sumber dan konflik](../09-pemetaan-sumber-mga.md).

## Tujuan dan alur

Membantu calon pelanggan menemukan produk dan mengirim inquiry dengan konteks spesifikasi.

Pengunjung: membuka menu → menilai konten → menuju detail atau tindakan lanjutan. PIC bisnis/materi dan reviewer belum ditetapkan; harus ditentukan sebelum input konten final.

## Requirement fungsional

| ID | Prioritas | Kebutuhan |
| --- | --- | --- |
| PRODUCT-01 | P1 | Halaman katalog dan kategori menampilkan foto, nama, ringkasan dan tautan detail produk aktif. |
| PRODUCT-02 | P1 | Kategori dapat ditambah, diurut dan diarsip; label mengikuti inventaris MGA. |
| PRODUCT-03 | P2 | Pencarian nama/kode/kata kunci dan filter kategori; tentukan kebutuhan berdasarkan jumlah produk. |
| PRODUCT-04 | P2 | Pagination untuk katalog besar; perubahan filter mengembalikan ke halaman pertama. |
| PRODUCT-05 | P1 | Detail: nama, kode bila ada, deskripsi, foto/alt, aplikasi, material dan spesifikasi terstruktur dengan satuan. |
| PRODUCT-06 | P1 | Varian kapasitas/ukuran/joint/kemasan disimpan per SKU bila berlaku; setiap kategori boleh memiliki atribut berbeda. |
| PRODUCT-07 | P1 | CTA Minta Penawaran membawa ID/nama produk dan varian yang dipilih ke kontak atau pesan WhatsApp. |
| PRODUCT-08 | P2 | Dokumen teknis/katalog terkait dan produk terkait; prev/next boleh disediakan. |
| PRODUCT-09 | P1 | Status draft/aktif/diarsip; produk dihentikan menampilkan pemberitahuan atau redirect yang disetujui. |
| PRODUCT-10 | P2 | Produk Baru berasal dari penanda dan tanggal tampil pada produk, bukan input ulang data. |
| PRODUCT-11 | P1 | Custom mengarah ke layanan custom: cakupan, contoh, alur konsultasi, CTA. |
| PRODUCT-12 | P3 | Unggah gambar spesifikasi pada inquiry hanya jika dipilih; batas format/ukuran dan penanganan file harus ditetapkan. |

## Breakdown kategori MGA dari katalog

Kategori berikut merupakan usulan dari daftar isi CAT 3 dan halaman isinya. Ketersediaan produk, klasifikasi final, nilai/standar dan izin materi tetap harus disahkan. Sepuluh kategori referensi tetap tercatat pada analisis referensi, tidak menjadi daftar produk MGA.

| Kategori ID / EN | Halaman CAT | Keluarga dan atribut relevan | Follow-up |
| --- | --- | --- | --- |
| Rotary Evaporator / Rotary Evaporator | 8–9 | Sistem vertical glassware; kapasitas flask/botol, condenser, kecepatan, bath, pompa dan komponen included/optional | Unit suhu dan vakum yang benar; paket, produsen dan opsi custom |
| Alat Volumetrik / Volumetric Instruments | 10–17 | Volumetric flask, graduated/mixing cylinder, burette/automatic; kapasitas, graduasi, toleransi, suhu referensi, stopper/stopcock | Kelas/standar/sertifikat mana yang benar berlaku; kode produsen versus SKU MGA |
| Pengukuran Fisik / Physical Measurement | 18–26 | Botol ukur pada 19, sedimentation cone, hydrometer, thermometer; rentang, subdivisi, satuan, panjang, koneksi | Nama keluarga botol pada 19; rentang/standar/material pengisi dan kalibrasi aktual |
| Glassware Laboratorium Kimia / Chemical Laboratory Glassware | 27–39 | Beaker, flask, centrifuge/test tube, dishes, funnel, filtration, weighing bottle, desiccator, aspirator/accessories | Kapasitas/dimensi/bentuk, porositas jika berlaku, material per produk; tabung centrifuge tidak berarti menjual mesin centrifuge |
| Apparatus dan Komponen / Chemical Apparatus & Components | 40–63 | Flask joint/leher 1–4, dropping funnel, stirrer, head, condenser/column, adapter, ekstraksi, drying tube, stopcock, konektor dan Monodest | Joint per posisi, dimensi/kapasitas, material key, isi set, daya/tegangan dan kompatibilitas yang terbukti |

Custom tetap pintasan menuju Layanan; tidak dipaksa menjadi SKU standar. Produk Baru hanya jika dipilih dan memiliki data tanggal, tidak disimpulkan dari urutan halaman katalog.

## Requirement tambahan dari sumber MGA

| ID | Prioritas | Kebutuhan |
| --- | --- | --- |
| PRODUCT-13 | P1 | Simpan referensi dokumen/halaman dan status verifikasi internal; nilai ambigu tidak diterbitkan. |
| PRODUCT-14 | P1 | Bedakan SKU MGA, nomor katalog sumber, produsen/merek dan produksi sendiri/pengadaan/custom; klaim standar/kalibrasi memerlukan bukti. |
| PRODUCT-15 | P1 | Produk sistem/set menjelaskan komponen termasuk/opsional dan varian dengan atribut sesuai keluarga, bukan kapasitas universal. |
| PRODUCT-16 | P1 | Produk serupa pada beberapa halaman memakai ID induk yang konsisten setelah deduplikasi; tabel spesifikasi dirender sebagai HTML responsif, bukan screenshot PDF saja. |

## Update kategori dan SKU

1. Tambah kategori: tentukan ID, nama/slug ID/EN, urutan, deskripsi dan atribut relevan; kumpulkan minimal satu produk siap tayang.
2. Tambah produk induk: lengkapi data utama dan foto; tentukan relasi kategori serta dokumen.
3. Tambah varian: gunakan ID stabil/SKU unik; isi nilai/satuan tanpa mengubah data varian lain. Foto boleh diwariskan dari produk induk jika bentuknya sama, dengan pilihan override.
4. Ubah spesifikasi: PIC teknis menyetujui nilai; perbarui kedua bahasa dan PDF terkait agar tidak berbeda.
5. Pindahkan kategori atau arsip: cek menu, pencarian, featured, produk baru, dokumen dan URL lama sebelum rilis.

## Data dan bahan dari klien

Kategori: ID, nama ID/EN, slug, deskripsi, gambar dan urutan. Produk: ID, kategori, nama/slug ID/EN, deskripsi, material, foto, spesifikasi, varian SKU, dokumen terkait, status, penanda featured/new dan metadata. Harga, stok dan lead time hanya dimasukkan jika klien memutuskan publikasi dan menyediakan fakta.

Kontrak field/relasi: [model konten](../04-model-konten.md). Jumlah item, pemilik materi, sumber file, kelengkapan ID/EN, izin dan tenggat diisi pada [inventaris](../07-inventaris-materi.csv).

## Cara memperbarui

PIC produk menyerahkan tabel induk/varian beserta foto dan spesifikasi yang diverifikasi. Developer menambah data terstruktur lalu build/preview. CMS opsional menyediakan modul Kategori, Produk, Varian dan Dokumen. Mengubah satu produk memperbarui kategori, beranda pilihan, produk baru dan detail yang merujuk ID sama.

Setiap update mengikuti alur draft → review fakta/ID-EN → preview → persetujuan versi → rilis → pemeriksaan. Detail [SOP update dan opsi CMS](../03-update-konten-dan-cms.md).

## Kriteria penerimaan

- [ ] PRODUCT-AC01: Minimal satu produk tiap kategori dipakai untuk UAT, termasuk varian berbeda dan produk tanpa varian.
- [ ] PRODUCT-AC02: Satuan dan nilai spesifikasi konsisten di kedua bahasa; tabel dapat dibaca di mobile.
- [ ] PRODUCT-AC03: Inquiry membawa produk/varian yang dipilih; karakter khusus pada nama tidak merusak tautan.
- [ ] PRODUCT-AC04: Jika pencarian dipilih, uji nama, kode, hasil kosong dan reset filter; hanya produk aktif ditemukan.
- [ ] PRODUCT-AC05: Produk draft tidak tampil; URL lama ditangani saat slug atau status berubah.

- [ ] PRODUCT-AC06: Kode sumber tidak dianggap SKU MGA tanpa pemetaan; bukti produsen/hak materi/standar dapat ditelusuri.
- [ ] PRODUCT-AC07: UAT mencakup rotary, alat volumetrik, pengukuran fisik, glassware dan apparatus yang dipilih; nilai ambigu ditahan dan isi set jelas.

## Pertanyaan follow-up

1. Berapa kategori, produk induk, varian/SKU dan foto per produk untuk rilis awal?
2. Apakah harga/stock perlu ditampilkan atau seluruhnya melalui penawaran?
3. Apakah lima kategori dari CAT 3 dipakai; keluarga dan SKU mana yang tersedia untuk rilis?
4. Apakah rotary menjadi kategori sendiri dan thermometer/hydrometer berada dalam Pengukuran Fisik sesuai usulan?
5. Apakah custom, repair dan kalibrasi tersedia; mana layanan sendiri dan pihak ketiga?
6. Perlu search/filter, tabel SKU, PDF per produk, atau unggahan spesifikasi?
