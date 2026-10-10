# About Us — Company Profile

Status: **usulan adaptasi untuk follow-up**, kecuali temuan referensi, fakta yang tercantum pada sumber MGA, dan baseline yang disebutkan. P1/P2/P3 berlaku jika menu dipilih untuk rilis. [Panduan status](../README.md).

## Temuan referensi

Halaman referensi berisi sejarah, produk/fasilitas, keterkaitan kelompok usaha, sertifikasi dan visi/misi. Sumber: [halaman referensi](https://www.iwakiglassindonesia.com/en/article/company_profile).

## Penyesuaian terhadap sumber MGA

Bahan profil telah tersedia: CAT 4–5 dan CP 3–4 untuk bidang usaha/sejarah, CP 5 untuk visi/misi, CAT 7/CP 13 untuk produksi. Tahun 2006 adalah awal usaha CV; tanggal pendirian PT masih perlu konfirmasi. Ejaan CV pada dokumen memakai “Scientifik”; final mengikuti dokumen legal yang disahkan, bukan normalisasi tanpa pemeriksaan. Visi menjadi aspirasi, bukan klaim bahwa perusahaan sudah terkemuka/bersertifikasi. Lima tenaga ahli, jangkauan wilayah, bahan impor dan bidang percetakan/konveksi perlu konfirmasi relevansi/keadaan terkini. CP 15–75 tidak otomatis menjadi galeri atau unduhan publik. [Pemetaan sumber](../09-pemetaan-sumber-mga.md).

## Tujuan dan alur

Memperlihatkan identitas, riwayat dan bukti kemampuan MGA.

Pengunjung: membuka menu → menilai konten → menuju detail atau tindakan lanjutan. PIC bisnis/materi dan reviewer belum ditetapkan; harus ditentukan sebelum input konten final.

## Requirement fungsional

| ID | Prioritas | Kebutuhan |
| --- | --- | --- |
| PROFILE-01 | P1 | Profil legal dan bidang usaha berdasarkan informasi yang diverifikasi. |
| PROFILE-02 | P1 | Sejarah berbentuk narasi atau timeline; pisahkan sejarah usaha sejak 2006 dari tanggal pendirian PT yang belum dipastikan. |
| PROFILE-03 | P1 | Kemampuan/fasilitas dan foto workshop, dengan tautan produksi atau layanan. |
| PROFILE-04 | P1 | Visi/misi bila materi tersedia; bagian kosong disembunyikan. |
| PROFILE-05 | P2 | Ringkasan legalitas dan sertifikasi publik, masing-masing memiliki sumber dan izin. |
| PROFILE-06 | P1 | CTA menuju kontak; unduhan company profile memakai PDF versi publik. |

## Data dan bahan dari klien

Nama legal, ringkasan, sejarah/tahun, visi/misi, lokasi, kemampuan, foto/alt, dokumen publik, ID sertifikat dan relasi layanan. Nama entitas tetap sama pada ID/EN.

Kontrak field/relasi: [model konten](../04-model-konten.md). Jumlah item, pemilik materi, sumber file, kelengkapan ID/EN, izin dan tenggat diisi pada [inventaris](../07-inventaris-materi.csv).

## Cara memperbarui

Perwakilan perusahaan menyetujui perubahan fakta dan legalitas. Developer mengganti teks dua bahasa, timeline dan foto. Bila CMS dipilih gunakan modul Profil; perubahan sertifikat melalui modul Dokumen, tidak mengunggah PDF sumber lengkap secara otomatis.

Setiap update mengikuti alur draft → review fakta/ID-EN → preview → persetujuan versi → rilis → pemeriksaan. Detail [SOP update dan opsi CMS](../03-update-konten-dan-cms.md).

## Kriteria penerimaan

- [ ] PROFILE-AC01: Tahun dan nama badan usaha konsisten pada beranda, profil dan PDF.
- [ ] PROFILE-AC02: PDF publik dapat dibuka dan tidak membawa dokumen pribadi dari sumber.
- [ ] PROFILE-AC03: Tidak ada afiliasi atau sertifikasi referensi yang diklaim sebagai milik MGA.

## Pertanyaan follow-up

1. Tanggal pendirian PT, sejarah CV, alamat dan visi/misi final?
2. Fasilitas/sertifikasi mana yang aktual dan boleh dipublikasikan?
3. Siapa reviewer profil legal dan PDF publik?
