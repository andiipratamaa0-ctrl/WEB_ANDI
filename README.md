# UKM Esport Universitas Pertiba — Proyek UTS

**Nama mahasiswa:** (isi nama lengkap)  
**NIM:** 2559201005  
**Mata kuliah:** Pemrograman Web Dasar  
**Tema:** B — Profil organisasi kampus  
**Nama proyek:** UKM Esport Universitas Pertiba

## Deskripsi

Website profil multi-halaman dengan tema esports modern. Website ini dibuat menggunakan HTML semantik, satu file CSS eksternal, dan JavaScript murni tanpa framework. Konten program, visi, misi, dan struktur pengurus pada beberapa bagian masih berupa draf proyek dan harus dikonfirmasi dengan data UKM yang sebenarnya sebelum dikumpulkan sebagai profil organisasi nyata.

## Struktur folder

```text
2559201005-UKM-Esport-Universitas-Pertiba/
├── index.html
├── tentang.html
├── katalog.html
├── kontak.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── logo-esport.svg
│   ├── hero-arena.svg
│   └── program-*.svg
├── bukti/
│   └── README.md
└── README.md
```

## Cara menjalankan

1. Ekstrak ZIP proyek.
2. Buka folder proyek di Visual Studio Code.
3. Buka `index.html` di browser, atau gunakan ekstensi Live Server jika tersedia.
4. Uji keempat tautan navigasi dan ukuran layar desktop serta HP.
5. Pastikan internet tersedia untuk memuat Google Fonts dan peta Google Maps. Konten utama dan ilustrasi lokal tetap tersedia tanpa keduanya.

## Fitur

- Empat halaman: Beranda, Tentang, Program, dan Kontak.
- Navigasi yang sama pada setiap halaman.
- HTML semantik: `header`, `nav`, `main`, `section`, `article`, dan `footer`.
- Tabel informasi kontak umum kampus menggunakan `thead` dan `tbody`.
- Formulir dengan `label`, `required`, `type="email"`, `type="tel"`, `pattern="[0-9]{10,13}"`, `minlength`, dan `maxlength`.
- CSS eksternal dengan Flexbox, Grid, variabel CSS, media query HP dan desktop, hover, transition, dan keyframes.
- JavaScript bonus: hamburger menu, validasi tambahan dengan pesan di bawah kolom, serta pencarian/filter/urut katalog dengan array objek.
- Katalog memiliki enam item fallback di HTML sehingga tetap terlihat jika JavaScript tidak aktif.

## Catatan data yang wajib dikonfirmasi

1. **Nama dan status UKM:** pastikan nama resmi organisasi dan statusnya sebagai UKM di Universitas Pertiba.
2. **Sejarah:** ganti narasi draf pada `tentang.html` dengan tahun pembentukan, latar belakang, dan sejarah yang benar.
3. **Visi dan misi:** ganti rumusan usulan dengan visi dan misi yang disepakati atau disahkan.
4. **Pengurus:** ganti `Nama Ketua`, `Nama Wakil Ketua`, dan `Nama Sekretaris` dengan nama serta foto pengurus aktif. Jangan kumpulkan placeholder sebagai data final.
5. **Program kerja:** enam kartu di `katalog.html` adalah rancangan contoh, bukan klaim bahwa kegiatan tersebut telah dilaksanakan. Sesuaikan dengan program kerja resmi.
6. **Kontak dan media sosial:** telepon, email, dan alamat pada halaman Kontak adalah kontak umum Universitas Pertiba, bukan kontak khusus UKM. Tambahkan akun media sosial dan kontak UKM yang benar setelah dikonfirmasi.
7. **Nama mahasiswa:** isi nama lengkap pada bagian identitas README.

## Sumber aset gambar

Logo, ilustrasi hero, dan enam ilustrasi program pada folder `img/` merupakan aset SVG orisinal yang disusun khusus untuk rancangan proyek ini; tidak mengambil foto atau gambar berlisensi dari situs lain. Jika diganti dengan foto kegiatan nyata, cantumkan URL sumber dan lisensinya di bagian ini.

## Referensi informasi kampus

Informasi alamat dan kontak umum kampus merujuk situs resmi Universitas Pertiba: https://pertiba.ac.id/  
Situs tersebut mencantumkan alamat Jl. Adhyaksa No. 09, Pangkalpinang, telepon (0717) 9100899, dan email info@pertiba.ac.id. Informasi ini tidak boleh dianggap sebagai kontak khusus UKM.

Situs resmi kampus: https://pertiba.ac.id/

## Validasi W3C

Lakukan validasi untuk setiap halaman secara terpisah:

- https://validator.w3.org/nu/ — pilih **File Upload** atau **Direct Input**.
- Validasi `index.html`, `tentang.html`, `katalog.html`, dan `kontak.html`.
- Perbaiki semua error sebelum mengambil screenshot.
- Simpan empat screenshot hasil validasi ke folder `bukti/`.

Catatan: validator online perlu dijalankan oleh mahasiswa; hasil validasi tidak diklaim sudah didapatkan dari pembuatan file ini.

## Usulan riwayat commit Git

Jalankan commit bertahap, jangan hanya satu commit terakhir. Contoh:

```bash
git init
git add index.html tentang.html katalog.html kontak.html
git commit -m "Membuat empat halaman utama"
git add css/style.css
git commit -m "Menambahkan desain responsif"
git add img/
git commit -m "Menambahkan aset ilustrasi lokal"
git add js/script.js
git commit -m "Menambahkan interaksi JavaScript"
git add README.md bukti/README.md
git commit -m "Melengkapi dokumentasi proyek UTS"
```

## Pengingat demo 5 menit

- Menit 1: jelaskan tujuan website dan pilihan tema.
- Menit 2: tunjukkan empat halaman dan navigasi.
- Menit 3: jelaskan elemen semantik, tabel, dan formulir HTML5.
- Menit 4: jelaskan Flexbox, Grid, media query, dan variabel CSS.
- Menit 5: demonstrasikan hamburger, pencarian/filter katalog, dan validasi formulir.

**Penting:** formulir saat ini hanya demo validasi di browser. Belum ada backend atau pengiriman email. Jangan menyatakan formulir sudah mengirim pesan.
