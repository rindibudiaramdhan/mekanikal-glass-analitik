# Adaptasi MGA — Layanan dan Proyek

Status: **usulan adaptasi untuk follow-up**, kecuali temuan referensi, fakta yang tercantum pada sumber MGA, dan baseline yang disebutkan. P1/P2/P3 berlaku jika menu dipilih untuk rilis. [Panduan status](../README.md).

## Temuan referensi

Referensi custom mengarahkan konsultasi ke kontak. Halaman Layanan dan Proyek di bawah mengikuti rancangan MGA lokal, bukan menu utama yang teramati pada IWAKI. Sumber: [halaman referensi](https://www.iwakiglassindonesia.com/en/product/Customize-Product).

Baseline: [rancangan MGA](../../docs/rancangan-website.md).

## Penyesuaian terhadap sumber MGA

CAT 6/CP 7 menyebut kalibrasi/perbaikan sebagai kandidat layanan; kemampuan aktual dan pelaksana sendiri/pihak ketiga belum disahkan. CP 6 menjadi bahan alur kerja sama (material/jumlah/harga → desain → approval/sampel → PO/MOU → produksi); angka DP, durasi desain/sampel, MOQ dan termin tidak otomatis menjadi syarat publik. CP 14 menyediakan dua kandidat studi kasus: supply kebutuhan distilasi sawit dan pengadaan alat pendidikan Sumedang. “Glass Fuel Tank” dengan uraian corong pisah perlu koreksi teknis dan penentuan apakah produk atau contoh custom. CP 76–77 berisi 33 rekanan sejak 2006; klasifikasi, periode dan izin dikurasi sebelum tayang. [Bukti halaman](../09-pemetaan-sumber-mga.md).

## Tujuan dan alur

Mempertahankan kebutuhan MGA untuk menjelaskan custom dan menunjukkan pengalaman pekerjaan.

Pengunjung: membuka menu → menilai konten → menuju detail atau tindakan lanjutan. PIC bisnis/materi dan reviewer belum ditetapkan; harus ditentukan sebelum input konten final.

## Requirement fungsional

| ID | Prioritas | Kebutuhan |
| --- | --- | --- |
| MGA-01 | P1 | Layanan berisi cakupan custom/pengadaan yang telah diverifikasi, foto, alur konsultasi dan CTA. |
| MGA-02 | P1 | Pisahkan layanan yang tersedia dari layanan yang belum dikonfirmasi seperti repair/kalibrasi. |
| MGA-03 | P1 | Daftar/detail proyek: kebutuhan, lingkup pengerjaan, produk/layanan, dokumentasi dan hasil yang dapat dibuktikan. |
| MGA-04 | P1 | Nama/logo pelanggan hanya tampil dengan izin; sediakan proyek anonim jika dibutuhkan. |
| MGA-05 | P1 | Rekanan bukan otomatis distributor atau pelanggan proyek; simpan jenis relasi. |
| MGA-06 | P2 | Filter proyek per jenis pekerjaan jika jumlah konten memerlukan. |
| MGA-07 | P1 | CTA membawa konteks layanan/proyek ke konsultasi; 2–3 proyek pilihan merupakan usulan jumlah awal, bukan materi yang sudah siap. |

## Data dan bahan dari klien

Layanan: ID, nama/slug ID/EN, cakupan, pengecualian bisnis, alur, foto dan CTA. Proyek: ID, judul/slug, kebutuhan, lingkup, hasil, foto/alt, tanggal opsional, relasi layanan/produk, jenis hubungan klien, izin publikasi dan status.

Kontrak field/relasi: [model konten](../04-model-konten.md). Jumlah item, pemilik materi, sumber file, kelengkapan ID/EN, izin dan tenggat diisi pada [inventaris](../07-inventaris-materi.csv).

## Cara memperbarui

PIC proyek mengirim narasi dan foto; perusahaan mengesahkan informasi pelanggan dan hasil. Developer/CMS menambah layanan/proyek, lalu memilih ID proyek yang ditampilkan di beranda. Catatan izin disimpan sebagai metadata internal, bukan dokumen publik.

Setiap update mengikuti alur draft → review fakta/ID-EN → preview → persetujuan versi → rilis → pemeriksaan. Detail [SOP update dan opsi CMS](../03-update-konten-dan-cms.md).

## Kriteria penerimaan

- [ ] MGA-AC01: Proyek memiliki materi nyata dan izin; tidak ada hasil/angka placeholder.
- [ ] MGA-AC02: Identitas proyek anonim tidak bocor pada alt, filename atau metadata.
- [ ] MGA-AC03: Detail layanan dan proyek dapat diakses dari daftar serta CTA memberi konteks yang tepat.

## Pertanyaan follow-up

1. Apakah Layanan dan Proyek tetap menu tersendiri meski mengikuti referensi?
2. Layanan aktual apa yang tersedia; bagaimana tahapan pemesanan yang boleh dipublikasikan?
3. Proyek mana yang siap, hasil apa yang dapat dibuktikan, serta apakah nama/foto klien boleh tayang?
