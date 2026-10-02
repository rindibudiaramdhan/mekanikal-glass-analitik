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
