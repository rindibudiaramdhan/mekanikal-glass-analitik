# Deployment demo Astro ke Cloudflare

Diperbarui: 8 Oktober 2026. Pengguna memakai proyek Cloudflare Workers dengan static assets dan command `wrangler versions upload`. Astro statis dapat memakai proyek Workers yang sama; tidak wajib pindah ke Pages untuk demo.

## Konfigurasi dashboard Workers Builds

| Pengaturan | Nilai |
| --- | --- |
| Root directory | Root repository |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy --assets=./dist --name=mekanikal-glass-analitik --compatibility-date=2026-09-30` |
| Non-production / version upload command | `npx wrangler versions upload --assets=./dist --name=mekanikal-glass-analitik --compatibility-date=2026-09-30` |
| Build environment variable | `NODE_VERSION=24` |
| Repository / branch sebelumnya | `rindibudiaramdhan/mekanikal-glass-analitik` / `main`; konfigurasi aktif perlu dicocokkan pada dashboard |

`npm run build` menghasilkan `dist`. Jangan memakai `docs/design` untuk demo Astro terbaru karena folder tersebut merupakan mockup lama. `dist` tidak perlu di-commit; Cloudflare membuatnya saat build. Kode aplikasi, package.json dan package-lock.json harus tersedia di branch yang dibuild.

`versions upload` membuat versi tanpa otomatis memindahkan traffic versi aktif. Untuk URL aktif, gunakan deploy command atau deploy versi melalui dashboard. URL/version preview mengikuti pengaturan proyek dan output Cloudflare. Compatibility date tetap dapat memakai nilai pengguna; tidak perlu berubah setiap edit konten.

Sumber: [Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/), [static assets](https://developers.cloudflare.com/workers/static-assets/), [versions and deployments](https://developers.cloudflare.com/workers/versions-and-deployments/).

## Alternatif Pages

Paket `docs/demo/mga-cloudflare-demo.zip` masih dapat dipakai untuk proyek Pages Direct Upload terpisah. Panduan aplikasi ada pada [README](../README.md). Proyek hosting baru atau pindah platform tidak diperlukan untuk melanjutkan konfigurasi Workers yang sudah dipakai.

## Pemeriksaan sesudah deployment

Buka root → `/en/`, pasangan `/id/`, katalog/detail, Kontak, dan CTA WhatsApp. Periksa gambar serta mobile. Demo masih memakai noindex dan materi bertanda review; bukan versi produksi final. URL dan hasil deployment online belum diverifikasi oleh asisten. Catatan lama di bawah adalah konfigurasi mockup, bukan konfigurasi Astro terbaru.

---

## Riwayat konfigurasi mockup

# Catatan deployment

Diperbarui: 2 Oktober 2026.

## Hosting

Pratinjau desain website PT Mekanikal Glass Analitik dideploy di **Cloudflare Workers**, sesuai konfirmasi pengguna. Alur yang dipilih pada dashboard adalah Workers dengan static assets.

| Pengaturan | Nilai |
| --- | --- |
| Platform | Cloudflare Workers |
| Repository GitHub | `rindibudiaramdhan/mekanikal-glass-analitik` |
| Branch produksi | `main` |
| Nama proyek | `mekanikal-glass-analitik` |
| Direktori aset | `docs/design` |
| Build command | Kosong, karena berupa HTML/CSS/JavaScript statis |
| Compatibility date | `2026-09-30` |

URL deployment belum dicatat dalam repository dan belum diverifikasi oleh asisten.

## Perintah pada dashboard

Deploy command:

```bash
npx wrangler deploy --assets=./docs/design --name=mekanikal-glass-analitik --compatibility-date=2026-09-30
```

Preview command:

```bash
npx wrangler versions upload --assets=./docs/design --name=mekanikal-glass-analitik --compatibility-date=2026-09-30
```

Perintah di atas adalah pengaturan yang diberikan saat setup melalui dashboard. Preview mengunggah versi untuk ditinjau tanpa mempromosikannya menjadi versi produksi.

## Pembaruan desain

1. Ubah berkas desain di `docs/design`.
2. Commit dan push perubahan ke branch `main`.
3. Jika deployment otomatis pada integrasi GitHub aktif, Cloudflare menjalankan deployment ulang.
4. Periksa status deployment dan hasil tampilan pada URL proyek.

`compatibility-date` mengatur perilaku runtime Cloudflare. Nilai ini tidak mengunci desain dan tidak perlu diubah setiap kali HTML, CSS, JavaScript, atau gambar diperbarui.

## Halaman yang tersedia

- `/`: panel review desain.
- `/beranda.html`: beranda bahasa Indonesia.
- `/beranda.html?lang=en`: beranda bahasa Inggris.
- `/review-desain.pdf`: PDF review desain.

Aset deployment dibatasi pada `docs/design`. PDF company profile asli yang memuat dokumen pribadi tidak disertakan. Materi yang dideploy masih berupa pratinjau desain; halaman detail dan fitur website produksi belum selesai.
