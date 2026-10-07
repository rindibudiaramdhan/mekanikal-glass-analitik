# Technical Information, footer dan newsletter

Status: **usulan adaptasi untuk follow-up**, kecuali temuan referensi, fakta yang tercantum pada sumber MGA, dan baseline yang disebutkan. P1/P2/P3 berlaku jika menu dipilih untuk rilis. [Panduan status](../README.md).

## Temuan referensi

Referensi memiliki topik perawatan dan properti material; detail perawatan memuat gambar dan tautan topik berikutnya. Footer menyediakan tautan informasi, layanan dan identitas pabrik. Subscribe terlihat pada beranda, proses pengiriman belum diuji. Sumber: [halaman referensi](https://www.iwakiglassindonesia.com/en/technical_information).

## Penyesuaian terhadap sumber MGA

CAT memuat penjelasan penggunaan/standar dan tabel pada beberapa keluarga produk; materi itu menjadi sumber kandidat, bukan panduan teknis yang sudah disahkan. Reviewer harus memeriksa relevansi, produsen, hak penggunaan dan versi sebelum dijadikan panduan publik. Footer memakai kontak yang direkonsiliasi serta unduhan publik yang siap. Newsletter dan akun sosial belum memiliki bahan operasional terverifikasi dari dua PDF. [Pemetaan sumber](../09-pemetaan-sumber-mga.md).

## Tujuan dan alur

Menyediakan panduan teknis yang mudah dibaca serta navigasi penutup yang konsisten.

Pengunjung: membuka menu → menilai konten → menuju detail atau tindakan lanjutan. PIC bisnis/materi dan reviewer belum ditetapkan; harus ditentukan sebelum input konten final.

## Requirement fungsional

| ID | Prioritas | Kebutuhan |
| --- | --- | --- |
| TECH-01 | P2 | Daftar dan detail panduan: judul, isi terstruktur, gambar/tabel, sumber, reviewer dan tanggal revisi. |
| TECH-02 | P1 | Jika panduan dipilih, spesifikasi/pernyataan teknis wajib disetujui PIC kompeten sebelum tayang. |
| TECH-03 | P2 | Tautkan panduan ke produk/kategori relevan dan sediakan PDF opsional. |
| TECH-04 | P1 | Footer global: profil, produk/layanan, kontak, privasi dan unduhan jika aktif. |
| TECH-05 | P1 | Tautan footer hanya menuju halaman yang terbit; identitas dan kontak memakai settings global. |
| TECH-06 | P2 | Social media hanya akun bisnis yang dikonfirmasi. |
| TECH-07 | P3 | Newsletter: email valid, persetujuan pemasaran, konfirmasi langganan, deduplikasi, berhenti langganan dan PIC pengiriman. |
| TECH-08 | P3 | Kampanye memakai layanan email yang dipilih; scope subscribe tidak otomatis mencakup penulisan/pengiriman kampanye rutin. |

## Data dan bahan dari klien

Panduan: ID, judul/slug ID/EN, topik, isi, tabel, gambar/alt, sumber, reviewer, tanggal review/revisi dan relasi produk. Footer: menu aktif dan settings. Subscriber: email, status, waktu/sumber persetujuan, konfirmasi dan berhenti langganan, disimpan secara privat.

Kontrak field/relasi: [model konten](../04-model-konten.md). Jumlah item, pemilik materi, sumber file, kelengkapan ID/EN, izin dan tenggat diisi pada [inventaris](../07-inventaris-materi.csv).

## Cara memperbarui

PIC teknis meninjau nilai dan instruksi; developer/CMS mengubah panduan dan relasi. Footer ikut konfigurasi menu global. Subscriber dikelola melalui penyedia email atau modul privat yang dipilih, bukan daftar email publik; perubahan akun sosial dilakukan pada Site Settings.

Setiap update mengikuti alur draft → review fakta/ID-EN → preview → persetujuan versi → rilis → pemeriksaan. Detail [SOP update dan opsi CMS](../03-update-konten-dan-cms.md).

## Kriteria penerimaan

- [ ] TECH-AC01: Tabel/grafik memiliki teks penjelas; nilai dan satuan tidak hanya berupa gambar.
- [ ] TECH-AC02: Panduan yang diarsipkan tidak muncul pada daftar; tautan produk terkait tetap valid.
- [ ] TECH-AC03: Footer konsisten di semua halaman/bahasa.
- [ ] TECH-AC04: Jika newsletter dipilih, uji email salah/duplikat, konfirmasi dan unsubscribe; tidak ada kampanye ke status berhenti.

## Pertanyaan follow-up

1. Panduan apa yang relevan bagi MGA dan siapa reviewer teknisnya?
2. Ada akun sosial bisnis final?
3. Newsletter benar-benar dibutuhkan, siapa PIC dan berapa frekuensi kampanye?
