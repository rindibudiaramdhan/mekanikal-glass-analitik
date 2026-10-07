# Requirement lintas website dan penerimaan

Semua angka di bawah merupakan **target usulan**, perlu disepakati. Tidak ada klaim bahwa referensi telah memenuhi target ini.

| ID | Area | Kebutuhan dan cara menilai |
| --- | --- | --- |
| NFR-01 | Responsif | Uji lebar 360, 768 dan 1440 px; tidak ada scroll horizontal halaman. Tabel panjang boleh memakai area scroll berlabel. |
| NFR-02 | Navigasi | Desktop/mobile, submenu dan bahasa dapat dipakai dengan sentuhan/keyboard; fokus terlihat dan menu dapat ditutup. |
| NFR-03 | Aksesibilitas | Usulan target WCAG 2.2 AA pada halaman terpilih; kontras, label form, alt, error terkait field dan urutan heading diperiksa. |
| NFR-04 | Kinerja | Target lapangan usulan LCP ≤2,5 s, INP ≤200 ms, CLS ≤0,1 pada persentil 75 bila data pengguna cukup. Pengujian lab sebelum rilis bersifat indikatif, bukan jaminan metrik lapangan. |
| NFR-05 | Media | Gambar optimal/responsif, ukuran intrinsik ditetapkan; lazy load di luar layar awal; PDF/video tidak diunduh otomatis saat membuka halaman. |
| NFR-06 | SEO | Title/description, satu heading utama logis, canonical, hreflang ID/EN, sitemap hanya konten terbit, robots dan 404; preview tidak diindeks. |
| NFR-07 | URL | Slug konsisten; perubahan URL yang pernah publik memiliki redirect bila pengganti setara. URL tidak ditemukan memberi 404 yang benar. |
| NFR-08 | Form | Validasi server, batas panjang/rate, anti-spam dan kontrol submit ganda. Rahasia integrasi hanya di server. |
| NFR-09 | Privasi | Halaman privasi menjelaskan pengelola, data, tujuan, penyedia, retensi dan kanal permintaan terkait data sesuai proses aktual; teks ID/EN disetujui klien. |
| NFR-10 | Pengiriman | Respons sukses berarti layanan menerima request sesuai kontrak; bukti sampai penerima diuji. Ada status gagal dan kontak alternatif. |
| NFR-11 | Portal opsional | Autentikasi dan otorisasi file privat diuji; file tidak berada di folder publik atau cache publik. |
| NFR-12 | Operasional | Domain/hosting dan akun dimiliki pihak yang disepakati; HTTPS, preview, backup, catatan rilis dan rollback tersedia. |
| NFR-13 | Analitik opsional | Jika disetujui, ukur CTA WhatsApp, penawaran, unduhan dan form sukses; tidak kirim isi pesan/email/telepon ke event analitik. |
| NFR-14 | Kompatibilitas | Uji browser utama pada saat UAT: Chrome/Edge desktop serta Chrome Android dan Safari iOS bila perangkat tersedia; cakupan/version dicatat. |
| NFR-15 | Konten | Tidak ada placeholder, kontak contoh, klaim referensi yang dipindahkan, spesifikasi rekaan atau dokumen pribadi. |

## UAT yang harus disiapkan

| Skenario | Hasil yang diterima | Bukti |
| --- | --- | --- |
| Buka navigasi semua menu aktif | Halaman benar; submenu dan footer sesuai scope | Checklist route ID/EN |
| Ganti bahasa dari detail | Konten yang sama dalam bahasa pasangan | URL dan screenshot |
| Cari produk, jika fitur dipilih | Nama/kode ditemukan; empty state dan reset benar | Hasil contoh pencarian |
| Pilih varian lalu inquiry | Produk/varian sesuai konteks sampai penerima | ID request dan pesan uji |
| Form invalid dan penyedia gagal | Error jelas; input dipertahankan; tidak ada sukses palsu | Rekaman status/error |
| Unduh PDF/video | File/versi/bahasa benar; embed gagal punya link alternatif | File dan hasil cek |
| Publish update | Preview disetujui, ID/EN lengkap, konten terbit sesuai versi | Catatan rilis |
| Arsip/ganti slug | Daftar/relasi tetap benar; URL lama ditangani | Route dan relasi |
| Portal opsional, dua akun | Tidak dapat akses dokumen akun lain atau file setelah izin dicabut | Hasil uji akses URL langsung |
| Newsletter opsional | Subscribe/konfirmasi/unsubscribe sesuai status | Status pada layanan pengiriman |
| Rollback/restore | Versi sebelumnya dan media dapat dipulihkan | Catatan simulasi |

## Syarat siap rilis usulan

- [ ] Scope dan daftar menu disetujui; PIC penerima hasil bernama telah ditetapkan.
- [ ] Jumlah konten awal terpenuhi sesuai inventaris, termasuk kedua bahasa.
- [ ] Semua P1 untuk fitur dalam scope dan acceptance criteria per menu lolos.
- [ ] Tidak ada masalah kritis yang menghalangi akses, inquiry atau melindungi dokumen privat.
- [ ] Kontak, penerima form, PDF publik dan izin foto/logo disahkan klien.
- [ ] Operasional, akun, backup, pemulihan dan cara update diserahkan.
- [ ] Masalah sisa dicatat dengan dampak, pemilik dan target perbaikan yang disepakati.

Requirement ini bukan laporan hasil tes implementasi; website produksi belum diuji melalui pekerjaan analisis ini.
