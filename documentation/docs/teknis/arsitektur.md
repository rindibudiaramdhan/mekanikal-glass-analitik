# Arsitektur dan batas sistem

Status: arahan usulan; stack produksi belum dipilih.

## Kondisi saat ini

Pratinjau memakai HTML, CSS, dan JavaScript biasa di `documentation/docs/design`. Bahasa Inggris diaktifkan melalui `?lang=en` dan atribut terjemahan di HTML. Navigasi beranda menuju bagian pada halaman yang sama. Kontak memakai `mailto:`; endpoint formulir belum tersedia. Konfigurasi hosting pratinjau mengikuti [deployment](../deployment.md).

## Kebutuhan arsitektur produksi

| Area | Kebutuhan | Keputusan implementasi |
| --- | --- | --- |
| Halaman | Profil, katalog, layanan, proyek, kontak, privasi | Pilih cara render/build yang sesuai konten dan hosting |
| Bahasa | URL ID/EN terpisah, halaman setara, metadata tiap bahasa | Tetapkan peta rute dan perilaku rute tidak ditemukan |
| Konten | Pembaruan oleh developer, struktur produk/proyek konsisten | Pilih file terstruktur serta validasinya; admin di luar lingkup awal |
| Permintaan | Formulir mengirim ke penerima yang ditetapkan | Pilih backend atau penyedia, kontrak respons, serta batas penggunaan |
| Aset | Foto optimal dan profil yang aman dipublikasikan | Tentukan direktori sumber dan keluaran publik |
| Hosting | Preview terpisah dari produksi | Konfirmasi akun, domain, build output, secrets, dan rollback |

Evaluasi opsi berdasarkan jumlah halaman, kemudahan pembaruan, dukungan bahasa, kebutuhan server, biaya operasional, dan kemampuan pengelola. Simpan alasan pilihan di [catatan keputusan](keputusan/README.md). Periksa dokumentasi resmi platform pada saat implementasi untuk perintah dan kompatibilitas versi yang dipilih.

## Alur permintaan penawaran yang direncanakan

Pengunjung mengisi formulir → validasi browser → endpoint/penyedia memvalidasi kembali dan membatasi penyalahgunaan → layanan menerima permintaan → antarmuka menampilkan hasil sesuai kontrak respons → penerima bisnis menindaklanjuti.

- Validasi server mencakup panjang, bidang wajib, dan format kontak. Jangan mengandalkan validasi browser saja.
- Status sukses berarti layanan menerima permintaan sesuai kontraknya. Bukti bahwa pesan sampai ke penerima tetap diuji terpisah.
- Tentukan batas waktu, penanganan percobaan ulang/pengiriman ganda, kegagalan penyedia, dan alternatif kontak.
- Rahasia integrasi berada di server/platform secrets. Log menghindari isi pesan dan kontak pribadi; gunakan ID permintaan untuk penelusuran.
- Tetapkan siapa yang dapat mengakses data, tempat penyimpanan, serta masa retensi sebelum produksi.
- Jika memakai penyedia tanpa backend milik sendiri, pastikan kemampuan validasi dan pembatasannya memenuhi kebutuhan yang sama.

## Struktur aplikasi yang diusulkan

Contoh tanggung jawab direktori berikut disesuaikan dengan stack; direktori ini belum dibuat:

```text
src/
  components/   komponen antarmuka bersama
  layouts/      kerangka halaman
  pages/        rute atau padanannya dalam framework
  content/      profil, produk, layanan, dan proyek
  i18n/         label antarmuka dan pemetaan bahasa
  lib/          validasi serta integrasi
  styles/       token dan gaya global
public/         aset yang memang boleh diakses publik
tests/          pengujian otomatis sesuai risiko
documentation/docs/           dokumentasi dan pratinjau desain yang sudah ada
```

Output deployment produksi harus ditetapkan eksplisit. Jangan otomatis menyalin seluruh `docs` ke aset publik. Tentukan apakah URL pratinjau lama dipertahankan saat website produksi dirilis.

## Kontrak konten minimum

Produk: ID stabil, kategori, slug per bahasa, nama, ringkasan, spesifikasi beserta satuan, foto/alt, dan status publikasi. Proyek: ID stabil, slug per bahasa, judul, kebutuhan, lingkup, foto/alt, serta persetujuan publikasi. Profil: fakta perusahaan terverifikasi dan kontak bisnis.

Gunakan ID stabil untuk memasangkan terjemahan; slug boleh berbeda. Rilis menolak data wajib atau pasangan bahasa yang hilang. Konten HTML dari sumber luar harus disanitasi sebelum dirender; atribut HTML pada mockup bukan kontrak penyimpanan konten produksi.
