# Rencana pengujian dan penerimaan

Status: rencana untuk aplikasi produksi. [Hasil validasi desain](../design/exports/validation.json) hanya mencakup pratinjau dan tidak membuktikan kesiapan produksi.

## Strategi

Uji fungsi penting secara otomatis: validasi konten dan pasangan bahasa, pemetaan rute, validasi formulir, serta kontrak sukses/gagal integrasi. Tambahkan uji perjalanan pengguna untuk jalur permintaan penawaran. Gunakan review manual untuk kualitas konten, visual, keterbacaan, dan penerimaan bisnis. Pilih alat setelah stack diputuskan.

## Matriks penerimaan

Semua skenario relevan dijalankan pada ID dan EN.

| Area | Skenario | Hasil yang diharapkan |
| --- | --- | --- |
| Navigasi | Buka rute langsung, refresh, logo, menu, dan tautan dalam | Halaman yang tepat terbuka; menu keyboard/mobile berfungsi |
| Bahasa | Ganti bahasa dari detail produk/proyek | Konten setara terbuka; URL dan bahasa dokumen sesuai |
| Rute invalid | Buka slug yang tidak terdaftar | 404 yang jelas dan jalan kembali tersedia |
| Konten | Cocokkan profil, produk, layanan, proyek dengan inventaris | Fakta dan spesifikasi sesuai versi yang disetujui |
| Penawaran | Buka dari produk | Produk terkait terbawa tanpa menghalangi perubahan kebutuhan |
| Formulir valid | Kirim data uji ke penerima pengujian | Status sesuai respons; pesan terbukti diterima; konteks utuh |
| Formulir invalid | Kosong, kontak salah, panjang berlebih | Penolakan di sisi server/penyedia; pesan bidang dapat dipahami |
| Gangguan | Timeout, jaringan putus, respons gagal, kirim berulang | Tidak ada sukses palsu; data isian dan opsi pemulihan ditangani |
| Penyalahgunaan | Uji batas permintaan pada lingkungan uji | Pembatasan bekerja tanpa membuka rahasia integrasi |
| Kontak | Klik WhatsApp/email dan unduh profil | Tujuan bisnis benar; pesan terkode benar; PDF versi publik |
| Responsif | Lebar 320, 390, 768, 1440 px; teks Inggris panjang | Tidak terpotong atau overflow; tombol dapat diakses |
| Aksesibilitas | Keyboard, fokus, label, error, zoom 200%, reduced motion | Alur dapat diselesaikan dan informasi tetap terbaca |
| SEO | Metadata per bahasa, canonical, hreflang, sitemap | Mengarah ke URL produksi yang benar dan halaman pasangan |
| Aset | Muat gambar/font/PDF dan periksa console/network | Tidak ada aset hilang, galat tak tertangani, atau data privat |
| Environment | Periksa preview dan produksi | Preview tidak mengirim ke penerima produksi; konfigurasi sesuai |

Browser awal yang diusulkan: Chromium dan Firefox desktop, Safari iOS, serta Chrome Android. Catat versi aktual dan perangkat; emulasi mobile melengkapi pemeriksaan perangkat nyata. Jika ada kombinasi belum diuji, tulis sebagai keterbatasan.

## Performa

Sepakati anggaran ukuran halaman, gambar, dan JavaScript sebelum QA final. Ukur beranda, katalog, dan detail dengan profil jaringan/perangkat yang dicatat; gunakan kondisi sama saat membandingkan hasil. Catat alat, versi, URL, waktu uji, hasil, dan tindak lanjut. Skor otomatis tunggal tidak menggantikan pemeriksaan alur nyata. Target angka belum ditetapkan dalam proyek ini.

## Pencatatan hasil

Simpan laporan per kandidat di `docs/quality/hasil-YYYY-MM-DD.md` ketika pengujian dilakukan. Isinya: commit/build, environment/URL, browser/perangkat, penguji, skenario, hasil Lulus/Gagal/Belum diuji, bukti, dan tautan bug. Gunakan data sintetis dan hilangkan informasi pribadi dari screenshot atau log.

## Tingkat bug dan keputusan rilis

- **Kritis:** kebocoran data atau website/alur inti tidak dapat digunakan. Hentikan rilis dan tangani segera.
- **Mayor:** fitur wajib gagal, misalnya formulir tidak diterima atau rute bahasa rusak. Wajib diperbaiki sebelum rilis.
- **Minor:** gangguan terbatas yang tidak memblokir alur. Catat penanggung jawab, dampak, dan keputusan penerimaan bila ditunda.

Gunakan [template bug](../templates/bug.md). Sesudah perbaikan, uji ulang skenario gagal dan alur yang terdampak.

## UAT dan syarat lulus

Pemilik bisnis memeriksa identitas perusahaan, produk, proyek, kedua bahasa, kontak, dan penerimaan pesan uji. Catat nama reviewer, tanggal, versi kandidat, hasil, serta pekerjaan tersisa. Rilis siap jika fitur wajib lulus, tidak ada bug kritis/mayor terbuka, konten disetujui, dan checklist operasional lengkap. Persetujuan desain sebelumnya tidak otomatis menjadi penerimaan build produksi.
