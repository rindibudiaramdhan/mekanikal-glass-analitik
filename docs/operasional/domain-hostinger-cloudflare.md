# Pemasangan domain Hostinger ke Cloudflare Worker

Dicatat: 10 Oktober 2026.

Domain `mekanikalglassindoanalitik.com` dibeli di Hostinger dan dihubungkan ke website pada Cloudflare Worker `mekanikal-glass-analitik`. Domain tetap terdaftar dan diperpanjang di Hostinger, sedangkan DNS dikelola di Cloudflare.

## Konfigurasi yang digunakan

| Komponen | Nilai |
| --- | --- |
| Registrar domain | Hostinger |
| Pengelola DNS | Cloudflare |
| Platform website | Cloudflare Workers dengan static assets |
| Nama Worker | `mekanikal-glass-analitik` |
| Environment custom domain | Production |
| Domain utama | `mekanikalglassindoanalitik.com` |
| Nameserver | `dahlia.ns.cloudflare.com`, `hunts.ns.cloudflare.com` |
| URL website | <https://mekanikalglassindoanalitik.com> |

Nameserver di atas khusus untuk domain ini. Saat memasang domain lain, gunakan nameserver yang diberikan Cloudflare untuk domain tersebut.

## Langkah pemasangan

### 1. Tambahkan domain ke Cloudflare

1. Login ke Cloudflare dan pilih **Add a domain / Add site**.
2. Masukkan domain utama tanpa `https://` atau path.
3. Pilih paket yang dibutuhkan; domain ini menggunakan Free.
4. Periksa record DNS yang diimpor dari Hostinger.
5. Salin dua nameserver yang diberikan Cloudflare.

Jika domain memakai email, pastikan record MX dan TXT untuk email ikut tersalin sebelum mengganti nameserver.

### 2. Ganti nameserver di Hostinger

1. Buka hPanel → **Domains → Domain portfolio → Manage** pada domain.
2. Buka **DNS / Nameservers → Change nameservers**.
3. Masukkan dua nameserver dari Cloudflare, lalu simpan.
4. Tunggu status domain di Cloudflare menjadi **Active**.

Setelah aktif, ubah record DNS di Cloudflare. Perpanjangan domain tetap dilakukan di Hostinger.

### 3. Hubungkan domain ke Worker

1. Buka **Workers & Pages → mekanikal-glass-analitik → Domains**.
2. Pada **Custom Domains and Routes**, pilih **Add Domain**.
3. Pilih `mekanikalglassindoanalitik.com`.
4. Biarkan **Subdomain** kosong untuk domain utama.
5. Pilih **Production**, lalu klik **Add domain**.

Pada tampilan dashboard lain, menu ini dapat berada di **Settings → Domains & Routes → Add → Custom Domain**.

Cloudflare membuat record DNS Worker dan sertifikat HTTPS secara otomatis. Custom domain Production tidak memerlukan URL Production `workers.dev` untuk diaktifkan.

## Kendala: hostname sudah memiliki record DNS

Saat pemasangan pertama muncul pesan:

```text
Hostname 'mekanikalglassindoanalitik.com' already has externally managed DNS records (A, CNAME, etc). Delete them first or try a different hostname.
```

Record awal yang ditemukan:

| Tipe | Nama | Tujuan | Tindakan saat pemasangan |
| --- | --- | --- | --- |
| A | `mekanikalglassindoanalitik.com` | `2.57.91.91` | Dihapus agar domain utama dapat dihubungkan ke Worker |
| CNAME | `www` | `mekanikalglassindoanalitik.com` | Dipertahankan pada sesi ini |

Untuk menangani konflik serupa:

1. Buka domain di Cloudflare → **DNS → Records**.
2. Simpan nilai record lama sebagai cadangan.
3. Hapus record A, AAAA, atau CNAME yang berbenturan pada hostname yang akan dipasang, setelah memastikan tujuan lama tidak lagi diperlukan.
4. Ulangi **Add Domain** pada Worker.

Menghapus record hosting lama melepas hostname dari server tersebut. Lanjutkan pemasangan custom domain segera setelahnya. Jangan menghapus record MX atau TXT yang masih digunakan untuk email dan verifikasi.

Setelah berhasil, DNS domain utama menampilkan record bertipe **Worker**, tujuan `mekanikal-glass-analitik`, berstatus **Proxied**, dan terkunci karena dikelola Cloudflare.

## Kendala: website masih menampilkan halaman parkir Hostinger

Setelah custom domain terpasang, browser pada Wi-Fi masih menampilkan halaman parkir Hostinger. Browser handphone menggunakan paket data sudah menampilkan website MGA.

Perbedaan ini menunjukkan cache DNS lama pada jalur jaringan Wi-Fi; kemungkinan berada di router atau resolver penyedia internet. Lokasi cache tidak diuji secara terpisah. Konfigurasi domain dan Worker tidak perlu diubah untuk menyelesaikan kondisi ini.

Langkah penanganan:

1. Bandingkan akses menggunakan Wi-Fi dan data seluler.
2. Di Windows, buka Command Prompt dan bersihkan cache DNS perangkat:

   ```cmd
   ipconfig /flushdns
   ```

3. Tutup seluruh jendela browser, buka kembali, lalu coba website.
4. Restart router untuk mencoba membersihkan cache lokal router. Jika cache berada di penyedia internet, restart belum tentu langsung menyelesaikannya.
5. Jika diperlukan, ubah DNS perangkat atau router ke `1.1.1.1` dan `1.0.0.1`, kemudian sambungkan ulang perangkat.
6. Alternatifnya, tunggu cache DNS lama kedaluwarsa.

Incognito membantu menguji cache browser, tetapi tetap memakai jaringan dan resolver DNS yang sama.

## Hasil verifikasi

- Nameserver publik sudah menunjuk ke Cloudflare.
- DNS publik domain utama sudah mengembalikan IP Cloudflare.
- Akses HTTPS langsung melalui IP Cloudflare menghasilkan redirect `302` dari `/` ke `/en/`.
- Halaman `/en/` menampilkan judul **Laboratory glassware & custom solutions | MGA** dan konten Mekanikal Glass Analitik.
- Pengguna mengonfirmasi website tampil melalui browser handphone dengan paket data.
- Pada pengujian pengguna, Wi-Fi masih menampilkan Hostinger. Hasil setelah restart router atau pembaruan cache belum dikonfirmasi.

URL untuk pemeriksaan:

- Domain utama: <https://mekanikalglassindoanalitik.com>
- Bahasa Inggris: <https://mekanikalglassindoanalitik.com/en/>
- Bahasa Indonesia: <https://mekanikalglassindoanalitik.com/id/> — belum diverifikasi dalam sesi pemasangan domain ini.

## Pemasangan `www` sebagai custom domain

Pada akhir sesi, `www` masih berupa CNAME menuju domain utama. Akses `www` belum diverifikasi; CNAME tersebut saja tidak membuktikan hostname `www` sudah terhubung sebagai custom domain Worker.

Untuk memasangnya secara eksplisit:

1. Simpan nilai CNAME `www`, lalu hapus record tersebut di **DNS → Records**.
2. Buka Worker → **Domains → Add Domain**.
3. Pilih domain yang sama dan isi **Subdomain** dengan `www`.
4. Pilih **Production**, lalu tambahkan domain.
5. Uji <https://www.mekanikalglassindoanalitik.com> setelah pemasangan dan sertifikat selesai.

Langkah ini belum dilakukan atau diverifikasi pada sesi yang didokumentasikan.

## Referensi

- [Cloudflare Workers: Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)
- [Hostinger: mengganti nameserver](https://www.hostinger.com/support/1696789-how-to-change-nameservers-at-hostinger/)
- [Panduan deployment proyek](../deployment.md)

Proyek ini menggunakan Workers. Jika memakai proyek Pages terpisah, pemasangan dilakukan melalui **Custom domains → Set up a domain** pada proyek Pages; lihat [panduan custom domain Pages](https://developers.cloudflare.com/pages/configuration/custom-domains/).
