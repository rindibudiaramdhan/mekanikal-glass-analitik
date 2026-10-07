# Beranda

Status: **usulan adaptasi untuk follow-up**, kecuali temuan referensi, fakta yang tercantum pada sumber MGA, dan baseline yang disebutkan. P1/P2/P3 berlaku jika menu dipilih untuk rilis. [Panduan status](../README.md).

## Temuan referensi

Pengantar, keunggulan, sertifikat, produk pilihan, FAQ, distributor, logo pengguna, kontak dan subscribe terlihat pada halaman publik. Ringkasan observasi lengkap ada di [analisis referensi](../01-analisis-referensi.md). Sumber: [halaman referensi](https://www.iwakiglassindonesia.com/en/public/home).

## Penyesuaian terhadap sumber MGA

CAT 4–7 dan CP 3–7, 13–14 menyediakan pengantar, kemampuan, proses dan kandidat proyek. Hero tetap memprioritaskan kredibilitas/profil dan tautan katalog. Produk pilihan merujuk lima kategori katalog MGA, bukan sepuluh kategori IWAKI. Warna hijau, navy dan emas terlihat pada CP 3–7; nilai warna/font final tetap mengikuti desain yang ditinjau. Logo lampiran pengguna 7 Oktober menjadi acuan utama; foto pada PDF tetap bahan sumber sampai file asli/hak penggunaan tersedia. Angka tenaga ahli, sertifikasi, rekanan dan klaim kualitas tidak ditampilkan otomatis. [Bukti dan batas sumber](../09-pemetaan-sumber-mga.md).

## Tujuan dan alur

Memberi gambaran bidang usaha dan membantu pengunjung menuju profil, produk atau kontak.

Pengunjung: membuka menu → menilai konten → menuju detail atau tindakan lanjutan. PIC bisnis/materi dan reviewer belum ditetapkan; harus ditentukan sebelum input konten final.

## Requirement fungsional

| ID | Prioritas | Kebutuhan |
| --- | --- | --- |
| HOME-01 | P1 | Hero berisi judul, ringkasan, foto asli dan CTA profil/produk/kontak; tautan menuju halaman yang relevan. |
| HOME-02 | P1 | Ringkasan kemampuan MGA dengan tautan profil dan produksi/layanan. |
| HOME-03 | P1 | Produk/layanan pilihan memakai referensi ID produk aktif; urutan dapat diubah. |
| HOME-04 | P1 | Proyek/rekanan pilihan mengikuti baseline MGA dan izin publikasi. |
| HOME-05 | P2 | Sertifikat perusahaan dan dokumen analisis hanya jika MGA memiliki materi sah yang disetujui. |
| HOME-06 | P2 | FAQ dengan pertanyaan, jawaban, urutan dan tautan konsultasi; dapat dibuka melalui keyboard. |
| HOME-07 | P2 | Blok distributor hanya jika jaringan resmi tersedia; data sama dengan halaman kontak. |
| HOME-08 | P1 | Kontak ringkas dan CTA; alamat/nomor memakai data global. |
| HOME-09 | P3 | Subscribe ditambahkan jika newsletter dipilih; keberadaan input tidak cukup tanpa pengelolaan pelanggan. |

## Data dan bahan dari klien

Hero ID/EN, foto/alt, daftar keunggulan, ID produk pilihan, ID proyek, FAQ, sertifikat publik, logo berizin, urutan dan status blok. Kontak berasal dari Site Settings, bukan disalin per halaman.

Kontrak field/relasi: [model konten](../04-model-konten.md). Jumlah item, pemilik materi, sumber file, kelengkapan ID/EN, izin dan tenggat diisi pada [inventaris](../07-inventaris-materi.csv).

## Cara memperbarui

PIC marketing mengirim teks/foto ID/EN dan urutan blok. Developer memperbarui data beranda dan relasi konten; bila CMS dipilih editor memakai modul Beranda. Sertifikat, produk, rekanan dan kontak diubah pada sumber datanya agar seluruh penggunaan ikut terbarui.

Setiap update mengikuti alur draft → review fakta/ID-EN → preview → persetujuan versi → rilis → pemeriksaan. Detail [SOP update dan opsi CMS](../03-update-konten-dan-cms.md).

## Kriteria penerimaan

- [ ] HOME-AC01: CTA membuka tujuan yang benar di kedua bahasa; tidak ada placeholder atau klaim IWAKI pada MGA.
- [ ] HOME-AC02: Produk yang diarsipkan otomatis tidak tampil sebagai pilihan; relasi penggantinya dapat dipilih.
- [ ] HOME-AC03: Blok tanpa konten disembunyikan tanpa ruang kosong; urutan mobile tetap logis.

## Pertanyaan follow-up

1. Bagian referensi mana yang paling disukai: susunan, foto, warna, atau fitur?
2. Apa pesan utama dan tindakan utama pengunjung?
3. Apakah ada sertifikat, FAQ, logo pengguna dan daftar distributor yang boleh tayang?
