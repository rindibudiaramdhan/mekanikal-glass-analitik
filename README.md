# MGA — client demo

Website Astro statis dengan Inggris default, Indonesia, profil, katalog/detail produk, layanan custom, proyek, kontak dan draft privasi. Status: demo untuk review, bukan website produksi final.

## Menjalankan

Gunakan Node.js 22.12+ (disarankan Node 24 LTS) dan npm.

```bash
npm ci
npm run dev
```

Buka `http://localhost:4321/`. Untuk demo dari build:

```bash
npm run build
npm run preview
```

Jika npm di WSL mengarah ke instalasi Windows, aktifkan Node Linux melalui nvm terlebih dahulu. Lingkungan pengerjaan ini mempunyai `/home/rindi/.nvm/versions/node/v24.2.0/bin`.

## Update konten

Kontak, kategori, produk, proyek dan data EN/ID: `src/data/site.ts`. Layout bersama: `src/layouts/Layout.astro`. Gaya: `src/styles/global.css`. Konten halaman: `src/pages/[lang]/`. Aset demo: `public/images/`, berasal dari mockup dan sumber MGA yang sudah ada.

## Verifikasi

```bash
npm run check
npm run build
npx playwright install chromium
npx playwright test
```

Browser tests memeriksa rute EN/ID, pasangan bahasa, gambar, pencarian/filter, form WhatsApp dan layout mobile. Screenshot hasil uji berada di `docs/demo/`.

## Demo di Cloudflare Pages

Build command: `npm run build`; output: `dist`; Node: `24`. Dapat memakai Git integration atau unggah direktori `dist` melalui Direct Upload. Proyek hosting belum dibuat dalam pekerjaan ini; akses akun Cloudflare belum tersedia. Demo lokal tidak memerlukan domain. Serah terima yang disarankan: akun khusus milik klien, akses anggota untuk developer, repository dan domain dikuasai klien.

Preview memakai `noindex` pada metadata, robots.txt dan header. Ini bukan kontrol akses; jangan memasukkan materi privat ke aset publik. Sebelum rilis produksi, finalisasi konten/izin/privasi dan hapus kebijakan noindex setelah versi disetujui.

## Batas demo

Tiga entri produk representatif dan dua kandidat kasus proyek; spesifikasi, izin foto/aset produksi dan jumlah konten final belum lengkap. Tidak ada CMS, database inquiry, endpoint email atau unduhan PDF publik. Form kontak menyiapkan pesan WhatsApp, bukan mengirim atau menyimpan pesan. Pengguna harus mengirim pesan di WhatsApp. Nomor dan alamat berasal dari konfirmasi pengguna 8 Oktober 2026.
