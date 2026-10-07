# Requirement website PT Mekanikal Glass Analitik

Tanggal analisis referensi: **6 Oktober 2026**. Penyesuaian terhadap katalog dan company profile: **7 Oktober 2026 (Asia/Jakarta)**. Status: **draft untuk follow-up klien; belum merupakan scope, harga, atau jadwal yang disetujui**.

Sumber utama konten: `CATALOG MGA (1).pdf` (63 halaman) dan `COMPRO MGA NEW (1).pdf` (78 halaman). [Pemetaan sumber MGA](09-pemetaan-sumber-mga.md) mencatat halaman, konflik dan batas verifikasi. [IWAKI Glass Indonesia](https://www.iwakiglassindonesia.com/) tetap referensi pola navigasi/fitur. Identitas, konten, kategori, klaim sertifikasi, dan kebijakan bisnis harus memakai fakta MGA yang dikonfirmasi.

## Cara menggunakan dokumen

1. Baca analisis referensi dan perbandingan dengan rancangan proyek yang sudah ada.
2. Diskusikan setiap menu bersama klien; putuskan dipakai saat peluncuran, ditunda, atau tidak diperlukan.
3. Isi daftar follow-up dan inventaris materi. Tentukan jumlah konten awal, pemilik materi, dan pemberi persetujuan.
4. Pilih mekanisme update. Baseline proyek masih melalui developer tanpa halaman admin; CMS merupakan opsi perubahan scope.
5. Setelah jawaban terkumpul, finalisasi backlog, kriteria penerimaan, estimasi, dan scope peluncuran.

## Daftar dokumen

| Dokumen | Isi |
| --- | --- |
| [Analisis referensi](01-analisis-referensi.md) | Peta menu, sumber, temuan, keterbatasan verifikasi |
| [Scope dan sitemap](02-scope-dan-sitemap.md) | Adaptasi MGA, baseline terdahulu, opsi tambahan, batas scope |
| [Requirement per menu](menu/README.md) | Halaman, fitur, data, update, acceptance criteria, follow-up |
| [Cara update konten](03-update-konten-dan-cms.md) | SOP developer, alternatif CMS, hak akses dan operasional |
| [Model konten](04-model-konten.md) | Field, relasi, validasi, kebutuhan penerjemahan |
| [Kualitas dan penerimaan](05-kualitas-dan-penerimaan.md) | Persyaratan lintas halaman serta skenario UAT |
| [Follow-up klien](06-follow-up-klien.md) | Pertanyaan per menu, keputusan dan dampak scope |
| [Inventaris materi](07-inventaris-materi.csv) | Daftar bahan yang dapat langsung diisi |
| [Register keputusan](08-register-keputusan.csv) | Catatan jawaban, persetujuan dan status scope |
| [Pemetaan sumber MGA](09-pemetaan-sumber-mga.md) | Fakta PDF, kategori katalog, konflik kontak dan batas publikasi |
| [Inventaris produk sumber](10-inventaris-produk-sumber.csv) | 34 kelompok kandidat dengan halaman dan atribut; bukan daftar SKU final |

## Arti status dan prioritas

- **Teramati:** ada pada halaman publik referensi yang berhasil dibaca. Perilaku backend belum tentu teruji.
- **Baseline proyek:** tercatat pada dokumen lokal sebelum analisis ini; sumbernya ditautkan.
- **Usulan:** rekomendasi kebutuhan MGA, perlu persetujuan klien.
- **Belum terverifikasi:** belum dapat dibuktikan melalui pemeriksaan publik.
- **P1:** kebutuhan penting bila menu dipilih untuk rilis; bukan otomatis semua menu wajib rilis.
- **P2:** peningkatan setelah kebutuhan utama jelas.
- **P3:** fitur lanjutan dengan estimasi terpisah.

Fakta bertanda **tercantum pada sumber MGA** telah ditemukan pada PDF; tetap memerlukan verifikasi keadaan terkini dan izin publikasi. Semua requirement per menu merupakan **usulan adaptasi**, kecuali paragraf temuan referensi dan keterangan baseline. Kolom wajib pada model konten berarti wajib ketika jenis konten tersebut digunakan. Pemilik bisnis, PIC materi, reviewer, tenggat, jumlah konten, anggaran, dan target peluncuran belum ditetapkan.
