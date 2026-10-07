# Contact Us dan distributor

Status: **usulan adaptasi untuk follow-up**, kecuali temuan referensi dan baseline yang disebutkan. P1/P2/P3 berlaku jika menu dipilih untuk rilis. [Panduan status](../README.md).

## Temuan referensi

Halaman menampilkan kontak perusahaan, lokasi, distributor per negara, area detail distributor dan form dengan persetujuan privasi. Interaksi modal/filter dan routing penerima belum terverifikasi. Sumber: [halaman referensi](https://www.iwakiglassindonesia.com/en/article/contactus).

## Tujuan dan alur

Menerima kebutuhan pelanggan dan memudahkan tim bisnis menindaklanjutinya.

Pengunjung: membuka menu → menilai konten → menuju detail atau tindakan lanjutan. PIC bisnis/materi dan reviewer belum ditetapkan; harus ditentukan sebelum input konten final.

## Requirement fungsional

| ID | Prioritas | Kebutuhan |
| --- | --- | --- |
| CONTACT-01 | P1 | Nama perusahaan, alamat, email, telepon/WhatsApp bisnis, jam operasi dan tautan peta. |
| CONTACT-02 | P1 | Form: nama, perusahaan opsional, email atau WhatsApp yang dapat dihubungi, produk/kebutuhan, jumlah opsional dan pesan. |
| CONTACT-03 | P1 | Konteks produk/layanan terisi dari CTA; pengunjung boleh mengubah kebutuhan. |
| CONTACT-04 | P1 | Validasi browser dan server; satu kontak valid minimal, pesan wajib, batas panjang dan perlindungan spam. |
| CONTACT-05 | P1 | Status mengirim, berhasil diterima dan gagal; cegah klik ganda, pertahankan input saat gagal, sediakan kontak alternatif. |
| CONTACT-06 | P1 | Penerima email/PIC ditetapkan; bukti pengiriman sampai inbox diuji terpisah dari respons endpoint. |
| CONTACT-07 | P1 | Halaman privasi menjelaskan pemakaian data form; persetujuan pemasaran dipisah jika newsletter dipilih. |
| CONTACT-08 | P2 | Distributor: daftar resmi, filter negara/wilayah, detail alamat/email/telepon/website dan kontak. |
| CONTACT-09 | P2 | Jika inquiry diarahkan ke distributor, penerima dihitung dari konfigurasi server, tidak dipercaya dari input pengunjung. |
| CONTACT-10 | P3 | Inbox lead dalam CMS/CRM, export, status follow-up dan notifikasi tambahan hanya bila dipilih. |
| CONTACT-11 | P3 | Lampiran spesifikasi opsional dengan format/ukuran yang disetujui dan kontrol akses. |

## Data dan bahan dari klien

Kontak global: alamat, koordinat/URL peta, email, nomor, jam. Distributor: ID, nama, negara/wilayah, alamat, website, email bisnis, telepon, status dan urutan. Inquiry: ID, waktu, konteks, data kontak, pesan, persetujuan, status pengiriman; tidak ditaruh pada file konten publik.

Kontrak field/relasi: [model konten](../04-model-konten.md). Jumlah item, pemilik materi, sumber file, kelengkapan ID/EN, izin dan tenggat diisi pada [inventaris](../07-inventaris-materi.csv).

## Cara memperbarui

PIC bisnis mengesahkan kontak dan daftar distributor. Developer/CMS mengubah satu konfigurasi global agar header, footer dan kontak konsisten. Perubahan penerima formulir diuji dengan pesan uji di lingkungan yang disepakati. Akses daftar inquiry hanya untuk petugas yang ditentukan, bukan seluruh editor konten.

Setiap update mengikuti alur draft → review fakta/ID-EN → preview → persetujuan versi → rilis → pemeriksaan. Detail [SOP update dan opsi CMS](../03-update-konten-dan-cms.md).

## Kriteria penerimaan

- [ ] CONTACT-AC01: Uji pengiriman valid sampai penerima bisnis dan respons gagal saat penyedia tidak tersedia.
- [ ] CONTACT-AC02: Form menolak kontak salah/kosong dan input berlebihan; klik ganda tidak menimbulkan pengiriman berulang tanpa kontrol.
- [ ] CONTACT-AC03: Klik WhatsApp/telepon/email/peta sesuai kontak final; tidak ada nomor contoh.
- [ ] CONTACT-AC04: Jika distributor dipilih, filter menampilkan data sesuai wilayah dan keadaan kosong; tidak ada rekanan yang dilabel distributor tanpa konfirmasi.

## Pertanyaan follow-up

1. Kontak, alamat, pin peta, jam dan penerima formulir final?
2. Apakah penawaran langsung ke MGA atau diarahkan ke distributor?
3. Siapa PIC inquiry, target waktu respons, cara menyimpan dan masa retensi data?
4. Perlu lampiran, CRM, notifikasi WhatsApp atau cukup email?
5. Ada distributor resmi atau hanya rekanan/pelanggan; wilayah mana yang dilayani?
