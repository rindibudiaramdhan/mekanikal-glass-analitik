# Download — Video, Catalog, Certificates

Status: **usulan adaptasi untuk follow-up**, kecuali temuan referensi, fakta yang tercantum pada sumber MGA, dan baseline yang disebutkan. P1/P2/P3 berlaku jika menu dipilih untuk rilis. [Panduan status](../README.md).

## Temuan referensi

Referensi menyediakan tab video embed YouTube, katalog dengan form sebelum unduhan, serta sertifikat dengan username/password. Pengiriman form, hasil unduhan dan akses setelah login belum diuji. Sumber: [halaman referensi](https://www.iwakiglassindonesia.com/en/download).

Sumber tambahan: [Catalog](https://www.iwakiglassindonesia.com/en/download/catalog), [Certificates](https://www.iwakiglassindonesia.com/en/download/certificate).

## Penyesuaian terhadap sumber MGA

Dua PDF telah tersedia sebagai bahan: CAT 63 halaman sekitar 83,2 MB; CP 78 halaman sekitar 35,4 MB. Katalog menjadi kandidat unduhan publik bersama profil, tetapi file rilis memerlukan review hak foto/tabel, koreksi kontak, bahasa, versi dan optimasi. Company profile lengkap memuat lampiran legal/pribadi menurut inventaris sebelumnya; siapkan versi publik terpisah. Daftar isi CAT 3 menyebut “Proof Of Business Legality”; itu bukan bukti sertifikat kalibrasi pelanggan atau kebutuhan login. Tidak ada URL video yang terverifikasi dalam pemeriksaan ini. [Bukti dan batas sumber](../09-pemetaan-sumber-mga.md).

## Tujuan dan alur

Menyediakan materi publik dan, bila dibutuhkan, dokumen pelanggan dengan aturan akses terpisah.

Pengunjung: membuka menu → menilai konten → menuju detail atau tindakan lanjutan. PIC bisnis/materi dan reviewer belum ditetapkan; harus ditentukan sebelum input konten final.

## Requirement fungsional

| ID | Prioritas | Kebutuhan |
| --- | --- | --- |
| DOWNLOAD-01 | P1 | Daftar unduhan publik: judul, jenis, bahasa, versi/tanggal, ringkasan, format/ukuran dan tombol unduh. |
| DOWNLOAD-02 | P1 | Company profile publik mengikuti baseline; katalog tambahan mengikuti materi klien. |
| DOWNLOAD-03 | P2 | Video: judul, ringkasan, thumbnail dan URL embed; tampilkan alternatif tautan bila embed gagal. |
| DOWNLOAD-04 | P1 | Pilih katalog bebas unduh atau melalui form; baseline usulan adalah unduhan publik langsung. |
| DOWNLOAD-05 | P2 | Jika katalog melalui form: nama, email, perusahaan opsional, telepon opsional dan persetujuan yang relevan. Alamat hanya jika ada tujuan yang disetujui. |
| DOWNLOAD-06 | P2 | Setelah form valid diterima, tampilkan akses unduh/link sesuai alur yang dipilih; error tidak boleh berpura-pura berhasil. |
| DOWNLOAD-07 | P1 | Sertifikat perusahaan publik terpisah dari sertifikat produk/batch pelanggan. |
| DOWNLOAD-08 | P3 | Portal sertifikat opsional: login, reset sandi, daftar dokumen sesuai izin, pencarian batch/kode dan unduhan. |
| DOWNLOAD-09 | P3 | Portal memvalidasi izin di server pada setiap unduhan; file tidak disajikan lewat URL publik permanen. |
| DOWNLOAD-10 | P3 | Admin portal mengelola pelanggan, dokumen, relasi batch, pencabutan akses dan riwayat akses. |
| DOWNLOAD-11 | P1 | Penggantian PDF menggunakan versi tercatat; tautan publik tetap stabil atau dialihkan sesuai kebijakan. |

## Data dan bahan dari klien

Dokumen publik: ID, judul ID/EN, bahasa file, tipe, file, ukuran, versi, tanggal, kategori/produk terkait dan status. Video: judul, URL, thumbnail, urutan. Portal opsional: dokumen/batch, pemilik pelanggan, izin, masa akses dan riwayat. Username/password bukan field konten publik.

Kontrak field/relasi: [model konten](../04-model-konten.md). Jumlah item, pemilik materi, sumber file, kelengkapan ID/EN, izin dan tenggat diisi pada [inventaris](../07-inventaris-materi.csv).

## Cara memperbarui

PIC dokumen menyerahkan PDF final versi publik. Developer memeriksa, mengganti file, metadata dan tautan; CMS opsional melalui Media/Dokumen. Jika portal dipilih, petugas berwenang mengunggah dokumen privat dan menetapkan penerima; dokumen privat tidak ikut build aset publik. Perubahan video memakai URL penyedia yang disetujui.

Setiap update mengikuti alur draft → review fakta/ID-EN → preview → persetujuan versi → rilis → pemeriksaan. Detail [SOP update dan opsi CMS](../03-update-konten-dan-cms.md).

## Kriteria penerimaan

- [ ] DOWNLOAD-AC01: File yang dipilih terunduh sesuai judul, bahasa dan versi; file hilang menampilkan informasi yang jelas.
- [ ] DOWNLOAD-AC02: Form katalog, bila dipilih, diuji valid/tidak valid/gagal dan akses unduhan setelah penerimaan.
- [ ] DOWNLOAD-AC03: Portal, bila dipilih, diuji dengan dua akun: akun A tidak dapat mengakses dokumen B melalui daftar maupun URL langsung.
- [ ] DOWNLOAD-AC04: Cabut akses lalu uji URL lama; logout dan sesi kedaluwarsa menghalangi akses privat.

## Pertanyaan follow-up

1. Hanya profil publik atau juga katalog, video dan sertifikat?
2. Katalog bebas unduh atau perlu data lead; siapa menindaklanjuti dan menyimpannya?
3. Sertifikat yang dimaksud milik perusahaan atau tiap produk/batch/pelanggan?
4. Siapa pemilik akun, penerbit sertifikat, pemberi izin, dan pelaksana reset akses?
5. Berapa file, ukuran dan frekuensi pembaruan; perlu riwayat versi?
