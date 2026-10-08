# Rencana tahapan pengerjaan

Tanggal: **8 Oktober 2026 (Asia/Jakarta)**. Scope tahap pertama dan pendekatan preview disetujui pengguna; urutan berikut adalah rencana pelaksanaan. Tahap lanjutan adalah usulan, bukan komitmen fitur, biaya atau tanggal. Acuan terbaru: [keputusan dan kontak](11-keputusan-dan-kontak-terkonfirmasi.md).

## Tahap pertama: preview hingga rilis awal

| Milestone | Hasil yang dibuat | Syarat selesai / titik feedback | Pelaksana / dependensi |
| --- | --- | --- | --- |
| M1 — fondasi dan contoh visual | Struktur Astro yang direkomendasikan, rute EN/ID, Site Settings, header/footer, Beranda serta satu contoh detail produk | Preview desktop/mobile dapat ditinjau; bahasa dan CTA kontak berfungsi; pengguna menilai visual, pesan utama dan navigasi | Developer; gunakan mockup dan materi yang tersedia. Pemilihan hosting tidak menghambat preview lokal |
| M2 — cakupan seluruh halaman | Profil, katalog, Layanan Custom, Proyek, Kontak, draft Privasi; contoh konten berpasangan EN/ID | Setiap halaman tahap pertama dapat dinavigasi; penanda fakta yang belum disahkan jelas; demo alur produk → inquiry | Developer; jumlah final konten dapat menyusul. Pengguna/reviewer memberi feedback per halaman |
| M3 — revisi dan konten final | Revisi hasil demo, input produk/proyek prioritas, optimasi aset, terjemahan, keputusan mekanisme edit | Daftar koreksi ditutup atau ditunda secara eksplisit; klaim/foto/izin dan jumlah konten rilis terkonfirmasi | Developer + PIC bisnis/teknis/terjemahan; nama PIC belum ditetapkan |
| M4 — kesiapan rilis | Inquiry sesuai pilihan, SEO, aksesibilitas, uji mobile/kinerja, privasi final, setup hosting/domain, panduan update dan rollback | UAT bahasa/kontak/form lulus; penerima hasil menyetujui versi; domain aktif dan deployment siap | Developer + PIC inquiry + pemilik domain; dependensi pada daftar konfirmasi |
| M5 — rilis dan pemeriksaan | Versi disetujui diterbitkan, pemeriksaan URL/HTTPS/kontak/inquiry/EN-ID, serah terima | Bukti smoke check dan cara pemulihan dicatat; pemilik akun dan update jelas | Developer + pemilik akun/perwakilan pengguna |

Mulai M1–M2 tanpa menunggu pembelian domain atau seluruh SKU. Preview tidak mengklaim form berhasil mengirim sebelum backend tersedia; tampilkan status demonstrasi dan alternatif WhatsApp/email. Preview diberi noindex dan hanya memuat materi yang sesuai untuk dibagikan; gunakan pembatasan akses jika ada draft yang belum boleh dibuka umum.

## Siklus feedback cepat

1. Tampilkan M1 sebelum membangun seluruh halaman agar koreksi visual tidak menyebar.
2. Setiap demo mencantumkan versi, halaman yang siap, asumsi dan pertanyaan yang relevan.
3. Catat feedback per halaman: masalah, perubahan yang diminta, prioritas, keputusan, status dan bukti preview berikutnya.
4. Tuntaskan koreksi fungsi/bahasa/kontak lebih dahulu; kebutuhan halaman/fitur baru dinilai dampaknya dan dimasukkan ke tahap yang sesuai.
5. Perubahan preview boleh terus berjalan dalam scope yang diotorisasi. Persetujuan versi untuk produksi diminta setelah hasil konkret bisa ditinjau.

Durasi, tanggal target dan biaya jasa belum disepakati. Estimasi dibuat setelah prioritas produk, kapasitas pelaksana dan waktu review diketahui; tabel ini tidak menetapkan komitmen kalender.

## Tahapan setelah rilis awal — diusulkan

| Tahap | Prioritas hasil | Pemicu / syarat masuk | Kriteria selesai |
| --- | --- | --- | --- |
| 2 — kelengkapan katalog dan kemudahan update | Tambahan produk/varian, PDF publik/Unduhan; CMS sederhana bila dibutuhkan; perbaikan berdasarkan feedback | Materi, hak publikasi dan kebutuhan editor tersedia. Evaluasi CMS boleh dimajukan ke M3 bila diperlukan saat rilis | Konten EN/ID lengkap, unduhan lolos review, pengelola berhasil melakukan edit contoh bila CMS dipilih |
| 3 — konten pendukung dan penemuan produk | Alur Produksi tersendiri, panduan teknis, artikel, video; search/filter bila katalog memerlukannya | PIC penulis/reviewer dan materi rutin tersedia; prioritas berdasarkan kebutuhan pengunjung | Menu aktif memiliki konten yang disahkan; pencarian/filter atau konten diuji sesuai scope terpilih |
| 4 — integrasi bisnis sesuai kebutuhan | Analitik CTA, integrasi inquiry/CRM, distributor resmi, newsletter atau upload inquiry | Manfaat bisnis, pemilik proses, data dan biaya layanan disepakati per fitur | Alur end-to-end, hak akses dan operasional teruji |
| 5 — layanan pelanggan lanjutan | Portal sertifikat privat bila proses bisnis membutuhkannya | Proses penerbitan, relasi pelanggan-batch, izin, keamanan dan anggaran tersendiri | Akses pelanggan yang berhak, reset/pencabutan dan audit/backup teruji |

Tidak ada kewajiban mengaktifkan semua tahap. CMS tidak perlu menunggu integrasi bisnis/portal. E-commerce, pembayaran dan stok real-time tetap di luar baseline sampai diminta dan dinilai tersendiri.

## Risiko dan penanganan

| Risiko | Dampak | Penanganan / pemilik usulan |
| --- | --- | --- |
| Volume katalog/terjemahan belum final | Estimasi input dan waktu rilis berubah | Developer mulai contoh; PIC produk memilih prioritas sebelum M3 |
| Foto/klaim/PDF belum boleh publik | Konten harus diganti atau disembunyikan | PIC bisnis/teknis mereview sebelum M4; tidak menyalin lampiran privat |
| Domain/akun/inquiry belum siap | Menghambat rilis, bukan preview | Pemilik domain dan PIC inquiry melengkapi sebelum M4 |
| Admin dianggap termasuk tanpa keputusan | Tambahan pembangunan dan maintenance | Demo kebutuhan edit, pilih opsi yang paling kecil dan catat scope/biaya sebelum implementasi CMS |
