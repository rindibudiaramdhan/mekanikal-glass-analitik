# Rekomendasi teknologi dan hosting

Tanggal pemeriksaan sumber: **8 Oktober 2026 (Asia/Jakarta)**. Status: rekomendasi teknis berdasarkan arahan pengguna agar hemat waktu, tenaga dan pendanaan tanpa mengurangi kualitas; bukan persetujuan pembelian paket berbayar atau bukti akun telah disiapkan.

## Pilihan yang direkomendasikan

**Astro dengan output statis, TypeScript, CSS sederhana dan Cloudflare Pages Free.** Simpan konten pada content collections/JSON/Markdown dan kontak pada Site Settings. Pakai komponen bersama, HTML semantik dan JavaScript hanya untuk interaksi yang diperlukan. Reuse arahan visual/aset mockup `docs/design` yang layak; jangan mempublikasikan seluruh folder dokumentasi.

Astro mendukung content collections untuk mengelola dan memvalidasi konten; rute pada dasarnya dibuat saat build. Ini sesuai dengan profil/katalog yang tidak memerlukan data real-time. Alasan penghematan merupakan penilaian teknis untuk kebutuhan MGA, bukan hasil benchmark: template dapat dipakai ulang, konten terpisah dari layout, hosting tidak memerlukan proses aplikasi atau database yang selalu aktif. Sumber: [Astro content collections](https://docs.astro.build/en/guides/content-collections/) dan [routing](https://docs.astro.build/en/reference/routing-reference/).

Cloudflare Pages menyediakan distribusi global, SSL, deployment dan preview. Free plan memiliki 500 build per bulan dan batas 25 MiB per aset. Fungsi dinamis memakai kuota Workers tersendiri. Sumber: [Cloudflare Pages](https://www.cloudflare.com/products/pages/) dan [batas platform](https://developers.cloudflare.com/pages/platform/limits/). Periksa ulang paket/ketentuan saat aktivasi; hosting gratis tidak berarti seluruh operasional tanpa biaya.

| Alternatif | Pertimbangan untuk MGA | Kesimpulan |
| --- | --- | --- |
| Astro + Pages | Konten statis, template dan validasi terstruktur; tanpa maintenance server/database | Rekomendasi tahap awal |
| HTML/CSS/JS biasa | Mockup telah tersedia; mudah untuk demo kecil, tetapi pengulangan halaman/terjemahan dan validasi katalog menambah pekerjaan manual | Pertahankan sebagai referensi desain; gunakan template untuk aplikasi |
| WordPress + shared hosting | Editor tersedia; membutuhkan pengelolaan hosting, plugin, backup dan bilingual | Evaluasi jika editor mandiri menjadi kebutuhan utama dan pengelola sudah familiar |
| Next.js + layanan server | Berguna bila aplikasi dinamis menjadi dominan; menambah kompleksitas untuk profil/katalog ini | Belum diperlukan oleh scope awal |

Vercel Hobby dibatasi untuk penggunaan personal/nonkomersial, sehingga bukan acuan hosting gratis untuk website perusahaan. Sumber: [ketentuan Hobby](https://vercel.com/docs/plans/hobby).

## Biaya yang dipisahkan

| Komponen | Rekomendasi / perkiraan dasar | Yang belum pasti |
| --- | --- | --- |
| Hosting frontend | Target biaya layanan US$0/bulan pada Pages Free selama sesuai batas/ketentuan | Paket aktual dan kebutuhan penggunaan; tidak ada SLA berbayar yang diasumsikan |
| Domain | `mekanikalglassindoanalitik.com`, pembelian oleh pengguna | Harga pembelian/perpanjangan mengikuti registrar; tidak mengarang angka |
| Pengerjaan dan konten | Reuse mockup, komponen dan data terstruktur | Biaya jasa, volume input, terjemahan/fotografi dan revisi belum disepakati |
| Inquiry | WhatsApp dan email dapat digunakan sejak preview; form email produksi diputuskan terpisah | Penyedia pengiriman, kuota, sender, validasi/anti-spam dan biaya operasional |
| CMS | Tidak diwajibkan untuk membuat preview; evaluasi kebutuhan edit mandiri | Akun, integrasi, pelatihan, kuota/lisensi dan maintenance |
| PDF/media | Optimalkan aset publik; katalog sumber sekitar 83,2 MB tidak bisa langsung menjadi aset Pages | Target ukuran/kualitas PDF; storage tambahan bila tetap di atas 25 MiB |

Form tidak boleh melaporkan sukses jika hanya membuka WhatsApp/mailto. Gmail yang ditampilkan bukan kredensial SMTP atau konfigurasi penerima otomatis. Jika memilih form email, gunakan endpoint kecil dengan validasi server dan perlindungan spam, serta penyedia email yang biaya/kuotanya diperiksa saat dipilih. API key tetap dalam secrets server. Pengiriman sampai inbox diuji sebelum rilis.

## Kemudahan edit: bertahap sesuai kebutuhan

1. **Preview awal:** developer mengubah data terstruktur. Profil/kontak/sosial/menu/produk tidak tersebar di template; pasangan bahasa divalidasi.
2. **Jika pengelola perlu edit sendiri:** evaluasi CMS dengan form Site Settings, Produk, Proyek, Layanan dan Halaman EN/ID. Demo satu edit kontak dan satu produk sebelum memilih platform.
3. **Pilih platform berdasarkan total biaya:** periksa akun/editor, biaya lisensi, integrasi build, media, preview, riwayat, backup dan pelatihan. CMS berbasis Git dapat menjadi kandidat, tetapi autentikasi/build perlu dikonfigurasi; tidak dianggap gratis tanpa tenaga operasional.
4. **Admin khusus:** hanya bila CMS sederhana tidak memenuhi proses yang telah disepakati. Tidak otomatis masuk scope.

Kebutuhan calon CMS: edit kontak/alamat/nomor/email, URL sosial/QR, produk/kategori, foto, proyek dan teks EN/ID tanpa mengubah kode; draft/preview sebelum publish; validasi pasangan bahasa dan tautan; riwayat/perbaikan versi. Penerima backend serta secret bukan field publik. Kebutuhan menu edit dicatat, platform dan fitur final belum disetujui.

## Domain dan kualitas

Usulan canonical domain tanpa `www`, dengan redirect `www` ke domain utama. Domain root pada Pages memerlukan zone dan nameserver Cloudflare; subdomain bisa melalui CNAME. Pembelian dapat tetap di registrar pilihan pengguna. Catat DNS yang sudah ada sebelum perubahan agar layanan email tidak terganggu. Sumber: [custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/).

Tetap terapkan EN default, pergantian halaman setara EN/ID, SEO per bahasa, mobile, aksesibilitas, optimasi gambar/font, pengujian inquiry, preview dan rollback. Kriteria dalam [kualitas dan penerimaan](05-kualitas-dan-penerimaan.md) tetap berlaku. Target kinerja adalah target verifikasi, bukan klaim sudah tercapai.
