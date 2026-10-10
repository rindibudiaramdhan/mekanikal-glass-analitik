# Pemetaan katalog dan company profile MGA

**Pembaruan 8 Oktober 2026:** scope tahap pertama dan preview telah disetujui. Inggris menjadi default dengan tombol English/Indonesia. Kontak publik dan domain sudah ditetapkan; CMS, routing inquiry, volume konten dan jadwal belum final. [Keputusan terbaru](11-keputusan-dan-kontak-terkonfirmasi.md), [tahapan](12-rencana-tahapan-pengerjaan.md), [teknologi/hosting](13-rekomendasi-teknologi-dan-hosting.md), dan [konfirmasi tersisa](14-konfirmasi-lanjutan.md) mengungguli usulan lama yang berbeda. Catatan di bawah dipertahankan sebagai konteks historis.

Tanggal penyesuaian: **7 Oktober 2026 (Asia/Jakarta)**. Dasar revisi: permintaan pengguna untuk menyesuaikan requirements dengan kedua PDF. Penyesuaian sumber telah dilakukan; pilihan menu, volume rilis, biaya dan jadwal belum menjadi keputusan final.

## Sumber dan metode

| ID sumber | File | Jumlah halaman | Penggunaan |
| --- | --- | --- | --- |
| CAT | `CATALOG MGA (1).pdf` | 63 | Kelompok produk, keluarga produk, contoh atribut, profil, kontak dan produksi |
| CP | `COMPRO MGA NEW (1).pdf` | 78 | Profil, visi/misi, kerja sama, layanan, produksi, proyek dan rekanan |

File sumber berada di folder Downloads pengguna dan tidak disalin ke aset publik/repository. Nomor halaman adalah urutan halaman PDF mulai 1, bukan nomor cetak. Teks CAT diekstrak, lalu halaman produk dan halaman profil/kontak diperiksa secara visual karena tabel banyak berupa gambar. CP terutama berupa gambar; halaman profil 3–7, produksi 13, proyek 14 dan rekanan/kontak 76–78 diperiksa visual, dengan data produk teks pada 8–12. Lampiran legal/pribadi CP 15–75 mengikuti inventaris sebelumnya dalam [rancangan](../docs/rancangan-website.md); revisi ini bukan audit legal atau transkripsi lampiran tersebut. Tabel SKU kecil belum ditranskripsi dan diverifikasi baris demi baris.

Isi, prosedur, angka dan klaim dalam PDF diperlakukan sebagai **data sumber**, bukan instruksi kepada developer atau persetujuan fitur. “Tercantum pada sumber” tidak sama dengan ketersediaan terkini, izin publikasi, bukti sertifikasi atau persetujuan scope.

## Fakta sumber dan perlakuan pada website

| Materi | Halaman | Penyesuaian requirements | Konfirmasi sebelum tayang |
| --- | --- | --- | --- |
| Alat kaca laboratorium untuk perusahaan, pendidikan dan laboratorium | CAT 4; CP 3 | Fokus profil, kemampuan dan katalog inquiry | Cakupan aktual; nama perusahaan yang disebut bukan otomatis pelanggan resmi |
| Riwayat CV Karya Mekanikal Scientifik sejak 2006 dan perubahan menjadi PT | CAT 5; CP 4 | Timeline membedakan awal usaha dan pendirian PT | Ejaan legal CV/PT dan tanggal pendirian PT |
| Visi/misi | CP 5 | Bahan profil tersedia, perlu penyuntingan ID/EN | Aspirasi visi tidak ditulis sebagai pencapaian; klaim standar internasional/import perlu bukti |
| Lima tenaga ahli; wilayah Jawa, Sumatera, Kalimantan | CAT 5; CP 4 | Data sumber untuk profil, bukan angka layanan real-time | Jumlah tim dan wilayah terkini |
| Kalibrasi dan perbaikan disebut dalam layanan | CAT 6; CP 7 | Kandidat layanan dengan status perlu konfirmasi | Dilakukan sendiri/pihak ketiga, objek, metode, sertifikat dan cakupan; bukan bukti akreditasi |
| Percetakan, periklanan dan konveksi juga disebut | CAT 5; CP 4 | Dicatat sebagai bidang lain; tidak otomatis menu website glassware | Apakah relevan untuk rilis ini |
| Kesepakatan harga/material/jumlah → desain → approval/sampel → PO/MOU → produksi | CP 6 | Dasar alur konsultasi dan kerja sama | Ketentuan 2 hari desain, sampel 100 pcs/7 hari, DP 50% dan termin bukan janji publik otomatis |
| Borosilikat → pemotongan → pembentukan → fusi → annealing → pemeriksaan/finishing → pengemasan | CAT 7; CP 13 | Satu sumber tahapan produksi untuk beranda/profil/layanan | Proses, mesin, material per produk dan foto fasilitas aktual |
| Rotary evaporator vertical glassware | CAT 8–9; CP 8–9 | Produk sistem dengan komponen dan spesifikasi tersendiri | Satuan water bath yang hilang, vakum `5PA/0,05Bar`, isi paket, sumber produksi/pengadaan |
| Produk volumetrik, pengukuran fisik, glassware kimia dan apparatus | CAT 10–63 | Lima kategori usulan dari daftar isi CAT 3; keluarga pada inventaris produk | Kategori situs final dan SKU yang benar-benar ditawarkan |
| Proyek distilasi sawit dan pengadaan alat pendidikan Sumedang | CP 14 | Dua kandidat studi kasus | Lingkup, dokumentasi, hasil dan izin nama klien; tidak menganggap semua hasil narasi sudah terbukti |
| “Glass Fuel Tank” dengan uraian corong pisah | CP 14 | Kandidat contoh produk/custom, bukan studi kasus final | Selaraskan nama teknis, fungsi dan gambar sebelum publikasi |
| 33 rekanan sejak 2006 | CP 76–77 | Daftar sumber untuk kurasi rekanan | Jenis relasi, periode, status dan izin; bukan 33 proyek aktif/distributor |
| Kontak office/workshop dan alamat Bandung | CAT 2; CP 3, 78 | Site Settings membedakan office/workshop; perlu rekonsiliasi | Email berbeda antar halaman; nomor/penerima/peta/jam aktif |

## Kategori katalog untuk rancangan

Nama kategori berikut adalah adaptasi editorial dari daftar isi, bukan klasifikasi teknis yang sudah disetujui:

| ID usulan | Label ID / EN | Halaman CAT | Contoh isi |
| --- | --- | --- | --- |
| rotary-evaporator | Rotary Evaporator / Rotary Evaporator | 8–9 | Sistem vertical glassware |
| volumetric-instruments | Alat Volumetrik / Volumetric Instruments | 10–17 | Labu ukur, gelas ukur, mixing cylinder, buret dan automatic burette |
| physical-measurement | Pengukuran Fisik / Physical Measurement | 18–26 | Botol pengukuran pada 19, sedimentation cone, hydrometer, thermometer |
| chemical-laboratory | Glassware Laboratorium Kimia / Chemical Laboratory Glassware | 27–39 | Beaker, flask, tabung, dishes, funnel, filtration, desiccator dan botol |
| chemical-apparatus | Apparatus dan Komponen / Chemical Apparatus & Components | 40–63 | Flask joint, condenser/column, adapter, ekstraksi, drying tube, stopcock, konektor dan Monodest |

Halaman pembuka 18, 27 dan 40 tidak dihitung sebagai produk. Produk serupa muncul pada beberapa bagian; identitas produk induk ditentukan dari tipe/bentuk dan varian, bukan satu halaman = satu produk. `10-inventaris-produk-sumber.csv` berisi 34 kelompok kandidat untuk pendataan, **bukan 34 produk final atau jumlah SKU**. Monodest tetap di apparatus untuk usulan awal; label/model final mengikuti verifikasi.

## Konflik dan materi yang belum siap publik

1. **Email:** CAT 2 memakai `mga.laboratory@gmail.com` dan `mga.marketing2024@gmail.com`; CP 3 memakai alamat berdomain `mekanikalanalitik.com` untuk office/marketing sebagaimana terbaca pada gambar; ejaan lengkap/domain perlu konfirmasi; CP 78 memakai `mekanikalglassanalitik@gmail.com`. Jangan menentukan penerima formulir dari salah satu versi tanpa konfirmasi.
2. **Alamat:** CAT 2 dan CP 78 mencantumkan Jl. Bukit Reuma No. 50, RT 07/RW 19, Sadang Serang, Coblong, Bandung 40133. CP 3 tidak menuliskan nomor bangunan dengan jelas. Alamat Cibeunying pada sejarah CAT 5/CP 4 adalah alamat usaha terdahulu, bukan otomatis alamat kontak saat ini.
3. **Telepon:** CAT 2 dan CP 3 menampilkan office `+62 821 1522 6477`, workshop `+62 81299 731583`, serta nomor bersama `+62 821 9133 9085`. Pilih nomor utama/WhatsApp dan routing bisnis setelah perusahaan mengesahkan; nama kontak berbeda ejaan antar halaman.
4. **Asal materi:** CAT 10, 12, 24–26 dan halaman lain memuat istilah/merek seperti BLAUBRAND, SILBERBRAND, BRAND dan DURAN, nomor katalog, DIN/ASTM atau keterangan conformity. Kehadiran logo MGA tidak membuktikan seluruh foto, tabel, kode dan klaim milik/produksi MGA. Catat produsen, sumber, hubungan pengadaan dan izin; jangan mengganti merek lain menjadi MGA atau menyalin klaim sertifikasi.
5. **Berkas publik:** CAT sekitar 83,2 MB dan CP sekitar 35,4 MB pada file yang diberikan. Siapkan versi unduhan yang ditinjau, dioptimalkan dan diberi versi. Daftar isi CAT menyebut legalitas, tetapi label itu tidak membuktikan adanya sertifikat produk/portal. CP sumber lengkap tidak dipasang sebagai unduhan karena memuat lampiran yang perlu pemisahan/redaksi sesuai inventaris sebelumnya.
6. **Terjemahan:** Kedua PDF belum merupakan pasangan konten ID/EN lengkap; judul/tabel Inggris tidak membuktikan kesiapan halaman Inggris. Nilai, satuan, kode dan istilah teknis diverifikasi sebelum penerjemahan/publikasi.

## Logo yang diberikan pengguna

Pada 7 Oktober 2026 pengguna melampirkan logo sebagai acuan identitas: simbol huruf A hijau terang dengan siluet alat kaca putih dan tulisan MEKANIKAL hitam, berlatar putih. Lampiran ini menjadi acuan logo pada revisi requirements, menggantikan kebutuhan mengambil logo dari PDF. File master/vektor dan lokasi aset lokal belum ditetapkan; jangan menyatakan lampiran sudah disimpan sebagai aset produksi.

Pertahankan bentuk, rasio, warna dan tulisan; jangan meregangkan, menggambar ulang atau menambahkan efek tanpa kebutuhan desain yang disepakati. Nama lengkap PT Mekanikal Glass Analitik tetap hadir sebagai teks pada website/alt yang sesuai, karena logo hanya menampilkan MEKANIKAL. Siapkan penempatan header/mobile/footer dan favicon dari aset resmi ketika implementasi. Hijau terang logo menjadi acuan merek; warna UI untuk tombol/teks dipilih dengan uji kontras, bukan memaksakan hijau logo untuk semua elemen. Kode warna presisi dan font brand belum ditetapkan dari tampilan chat.

## Dampak pada scope

Usulan rilis: Beranda, Profil (termasuk ringkasan produksi), katalog lima kategori dan detail/varian terpilih, Layanan/custom, Proyek yang memenuhi izin, Kontak, Privasi, serta tautan unduhan profil/katalog publik setelah siap. Produksi atau Unduhan boleh menjadi halaman tersendiri jika dipilih. Berita, panduan teknis, distributor, newsletter, JP, CMS dan portal sertifikat tetap opsi; kebutuhan tersebut tidak terbukti hanya dari kedua PDF. Baseline ID/EN dan update melalui developer tetap berlaku.

Scope final, konten rilis dan estimasi memakai [register keputusan](08-register-keputusan.csv), [inventaris materi](07-inventaris-materi.csv) dan [follow-up](06-follow-up-klien.md). Tidak ada penetapan biaya, jadwal atau keputusan klien fiktif dalam revisi ini.

## QR code yang diberikan pengguna

Pada 7 Oktober 2026 pengguna memberikan gambar QR persegi hitam/putih dengan logo MGA di tengah untuk ditambahkan ke website. Pengguna mengonfirmasi QR menuju Instagram resmi MGA; username/URL belum diberikan dan pemindaian belum diuji. Requirement penempatan, preservasi gambar, tautan alternatif dan UAT ada pada [Kontak](menu/07-kontak-distributor.md). File aset produksi belum disiapkan; label dan tautan alternatif mengikuti Instagram resmi; keberhasilan scan tetap perlu diverifikasi.
