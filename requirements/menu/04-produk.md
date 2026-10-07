# Product — kategori, detail, custom dan produk baru

Status: **usulan adaptasi untuk follow-up**, kecuali temuan referensi dan baseline yang disebutkan. P1/P2/P3 berlaku jika menu dipilih untuk rilis. [Panduan status](../README.md).

## Temuan referensi

Referensi memiliki sepuluh kategori. Sampel detail Beaker memiliki gambar serta prev/next; custom menawarkan jalur kontak. Daftar produk baru terpisah. Lihat sumber tambahan di bawah. Sumber: [halaman referensi](https://www.iwakiglassindonesia.com/en/product/category/beaker-flask).

Sumber tambahan: [detail Beaker](https://www.iwakiglassindonesia.com/en/product/beaker-low-form), [Custom](https://www.iwakiglassindonesia.com/en/product/Customize-Product), [Produk Baru](https://www.iwakiglassindonesia.com/en/product/new_product).

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

## Breakdown setiap submenu produk

Tabel berikut adalah **usulan atribut dan pertanyaan**, bukan transkripsi spesifikasi IWAKI atau pernyataan ketersediaan MGA. Setiap kategori memakai PRODUCT-01 sampai PRODUCT-09; atribut wajib final mengikuti produk aktual yang disetujui PIC teknis. Kategori tanpa inventaris tidak perlu ditampilkan.

| Submenu referensi | Konten dan atribut yang perlu dikumpulkan | Follow-up spesifik |
| --- | --- | --- |
| Beaker & Flask | Jenis/bentuk, kapasitas, diameter/tinggi, bentuk dasar, leher/joint, stopper/cap bila ada, material, kode dan kemasan | Bentuk dan kapasitas apa yang tersedia; flask/beaker dibedakan sebagai subkategori atau filter? |
| Volumetric Ware | Jenis alat, volume nominal, toleransi beserta satuan, kelas/standar jika benar berlaku, suhu referensi bila relevan, graduasi, stopper/stopcock, opsi dokumen | Adakah Class A/standar/kalibrasi yang dapat dibuktikan; apakah sertifikat per produk atau batch? |
| Centrifuge | Jenis tabung, kapasitas, dimensi, dasar, penutup, material; batas penggunaan hanya jika tervalidasi | Apakah MGA menjual tabung kaca atau mesin centrifuge; parameter penggunaan apa yang boleh diklaim? |
| Condenser | Tipe, panjang efektif, joint, dimensi sambungan selang, material, foto/detail bentuk | Tipe apa yang dibuat; ukuran standar dan ukuran custom mana yang tersedia? |
| Funnel & Column | Jenis corong/kolom, volume/dimensi, joint, stopcock/frit jika ada, material dan aplikasi | Perlu memisahkan funnel dan column; atribut porositas/stopcock relevan pada produk mana? |
| Culture Tube | Volume/dimensi, jenis penutup, material, penggunaan yang disetujui, kemasan | Produk kultur apa yang tersedia; adakah klaim penggunaan/sterilisasi yang perlu reviewer? |
| Test Tube | Diameter/panjang/volume, bentuk dasar, penutup, material, graduasi bila ada, kemasan | Apakah kode dan ukuran dikelola per SKU; foto tabung mana yang membedakan varian? |
| Apparatus | Fungsi alat, susunan komponen, kapasitas sistem, sambungan, dimensi, diagram/PDF, bagian yang termasuk | Alat distilasi/ekstraksi apa yang ditawarkan; satu set atau komponen, termasuk pemanas/aksesori atau terpisah? |
| Others | Subtipe jelas, aplikasi, atribut sesuai barang; botol/aksesori tidak dipaksa memakai atribut tabung | Barang apa masuk Others; lebih mudah ditemukan sebagai kategori baru atau tetap Others? |
| Customize Product | Cakupan layanan, contoh kebutuhan, material/kemampuan, alur konsultasi, input gambar/spesifikasi jika diperlukan, CTA | Batas kemampuan custom, minimum order dan lead time boleh dipublikasikan atau hanya saat konsultasi? |

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

## Pertanyaan follow-up

1. Berapa kategori, produk induk, varian/SKU dan foto per produk untuk rilis awal?
2. Apakah harga/stock perlu ditampilkan atau seluruhnya melalui penawaran?
3. Kategori referensi mana yang benar-benar disediakan MGA?
4. Adakah produk non-glassware seperti rotary evaporator dan thermometer yang perlu kategori terpisah?
5. Apakah custom, repair dan kalibrasi tersedia; mana layanan sendiri dan pihak ketiga?
6. Perlu search/filter, tabel SKU, PDF per produk, atau unggahan spesifikasi?
