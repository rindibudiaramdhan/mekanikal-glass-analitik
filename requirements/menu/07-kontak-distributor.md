# Contact Us dan distributor

**Pembaruan 8 Oktober 2026:** scope tahap pertama dan preview telah disetujui. Inggris menjadi default dengan tombol English/Indonesia. Kontak publik dan domain sudah ditetapkan; CMS, routing inquiry, volume konten dan jadwal belum final. [Keputusan terbaru](../11-keputusan-dan-kontak-terkonfirmasi.md), [tahapan](../12-rencana-tahapan-pengerjaan.md), [teknologi/hosting](../13-rekomendasi-teknologi-dan-hosting.md), dan [konfirmasi tersisa](../14-konfirmasi-lanjutan.md) mengungguli usulan lama yang berbeda. Catatan di bawah dipertahankan sebagai konteks historis.

Status: **usulan adaptasi untuk follow-up**, kecuali temuan referensi, fakta yang tercantum pada sumber MGA, dan baseline yang disebutkan. P1/P2/P3 berlaku jika menu dipilih untuk rilis. [Panduan status](../README.md).

## Temuan referensi

Halaman menampilkan kontak perusahaan, lokasi, distributor per negara, area detail distributor dan form dengan persetujuan privasi. Interaksi modal/filter dan routing penerima belum terverifikasi. Sumber: [halaman referensi](https://www.iwakiglassindonesia.com/en/article/contactus).

## Penyesuaian terhadap sumber MGA

CAT 2 dan CP 3/78 menyediakan kontak office/workshop dan alamat Bandung. Email berbeda antar sumber, sehingga nomor/email utama, routing penerima, ejaan nama PIC, pin lokasi dan jam harus disahkan sebelum integrasi. Simpan kontak yang disetujui dalam Site Settings dengan label Office/Workshop; jangan memilih email berdasarkan urutan PDF. Alamat Cibeunying pada sejarah bukan otomatis alamat saat ini. Daftar rekanan CP 76–77 bukan daftar distributor resmi. [Rincian konflik kontak](../09-pemetaan-sumber-mga.md).

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

## QR code MGA

Pengguna memberikan gambar QR berlogo MGA pada 7 Oktober 2026 dan meminta penambahannya pada website. Penempatan usulan: blok halaman Kontak dengan judul/label sesuai tujuan; footer dapat menampilkan pintasan ke blok tersebut. Pengguna mengonfirmasi tujuan sebagai Instagram resmi MGA. Username/URL akun dan hasil scan belum diverifikasi. Label usulan: “Instagram Resmi MGA” / “MGA Official Instagram”; tombol alternatif: “Buka Instagram” / “Open Instagram”.

| ID | Prioritas | Kebutuhan |
| --- | --- | --- |
| CONTACT-12 | P1 | Tampilkan gambar QR yang diberikan pada halaman Kontak setelah tujuan, label dan tautan alternatif diverifikasi. |
| CONTACT-13 | P1 | Sertakan tautan/tombol menuju tujuan yang sama agar pengunjung ponsel dapat membuka tanpa memindai layar sendiri; label ID/EN menjelaskan tujuan. |
| CONTACT-14 | P1 | Pertahankan pola, logo, rasio persegi, kontras hitam/putih dan ruang putih tepi QR; jangan crop, stretch, recolor atau menutup modul. Ukuran tampil ditetapkan berdasarkan uji scan desktop/mobile. |
| CONTACT-15 | P1 | Simpan sumber QR dan URL tujuan yang telah diverifikasi pada Site Settings; penggantian gambar/URL diuji bersama agar tidak berbeda tujuan. |

- [ ] CONTACT-AC05: Pemindaian gambar QR pada ukuran tampil desktop/mobile berhasil menuju tujuan yang disahkan; perangkat dan ukuran uji dicatat.
- [ ] CONTACT-AC06: Tautan alternatif membuka tujuan yang sama dengan hasil scan; label/alt ID/EN sesuai tujuan dan dapat digunakan dengan keyboard.
- [ ] CONTACT-AC07: Gambar tidak terpotong atau berubah rasio dan ruang putih tetap utuh; gambar gagal dimuat tetap menyediakan tautan alternatif.

Gambar tersedia sebagai lampiran chat; file aset produksi/path lokal belum disiapkan. Username/URL Instagram resmi dan hasil scan belum diketahui. Keberadaan QR tidak menambah integrasi backend atau mengubah alur inquiry dengan sendirinya.

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
