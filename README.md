# MGA — aplikasi Astro

Kode website berada di `src/`, aset website di `public/`. Konfigurasi Astro, TypeScript, dependensi npm, dan pengujian Playwright berada di root repository.

Gunakan Node.js 22.12+ dan npm:

```bash
npm ci
npm run dev
```

Verifikasi dan build:

```bash
npm run check
npm run build
```

Output website: `dist/`. Status aplikasi saat ini masih demo untuk review.

Seluruh dokumen, requirements, catatan, BAST, mockup lama, dan artefak review berada di [documentation/](documentation/README.md). Folder tersebut tidak diperlukan untuk build Astro. Panduan lengkap menjalankan aplikasi dan pengujian tersedia di sana.
