# MTH Woodcraft Website

Laman web korporat statik dalam Bahasa Melayu untuk MTH Woodcraft. Dibina menggunakan HTML, CSS dan JavaScript tanpa framework atau backend.

## Cara pratonton

1. Ekstrak folder jika anda memuat turun ZIP.
2. Buka `index.html` melalui browser untuk pratonton asas.
3. Untuk hasil paling konsisten, jalankan server statik setempat dari folder ini, contohnya `python -m http.server 8000`, kemudian buka `http://localhost:8000`.

## Kandungan yang perlu disahkan sebelum pelancaran

- Gantikan semua visual ilustrasi di dalam galeri/perkhidmatan dengan foto projek sebenar. Website ini melabelkan visual contoh secara jelas supaya tidak mengelirukan pelanggan.
- Gantikan tanda visual logo dalam header/footer dengan logo rasmi MTH Woodcraft jika ada fail logo rasmi.
- Semak kembali cara terbaik untuk menyatakan pendaftaran DBKL, nama setiap pihak berkuasa tempatan dan skop perkhidmatan mengikut dokumen syarikat.
- Tambah tarikh/tahun, dokumentasi dan butiran projek sebenar untuk sorotan PETRONAS/MotoGP Sepang apabila gambar atau maklumat tersebut tersedia.
- Maklumat pengalaman 40+ tahun dan nama organisasi diambil daripada maklumat yang dibekalkan oleh pemilik; pastikan ia tepat dan dibenarkan untuk penerbitan.
- Alamat, nombor WhatsApp dan pautan Facebook sudah dimasukkan. Semak semuanya sebelum penerbitan.
- Waktu operasi tidak dimasukkan kerana belum diberikan.

## Fungsi

- Reka bentuk responsif telefon/tablet/desktop.
- Menu navigasi mudah alih.
- Penapis galeri dan lightbox imej.
- Borang pertanyaan yang membuka WhatsApp dengan mesej yang telah diisi. Borang tidak menghantar atau menyimpan data ke server.
- Pautan WhatsApp, Facebook dan Google Maps.
- Metadata asas SEO dan struktur data LocalBusiness.

## Keselamatan dan penerbitan

Laman statik ini tidak mempunyai pangkalan data, log masuk atau panel pentadbiran awam, jadi permukaan serangannya lebih kecil. Ini tidak menjamin keselamatan mutlak. Untuk penerbitan:

- Pilih hosting yang dipercayai dan aktifkan HTTPS/TLS.
- Gunakan domain milik syarikat dan kawal akses akaun hosting dengan kata laluan unik serta MFA.
- Aktifkan security headers pada hosting/CDN jika disokong, termasuk Content-Security-Policy yang sesuai, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, dan `Permissions-Policy` yang mematikan ciri yang tidak diperlukan.
- Jika menggunakan CDN atau hosting statik, semak tetapan cache, DNS, akaun, sandaran dan pengurusan domain.
- Jangan tambah borang yang menerima/menyimpan maklumat sensitif tanpa backend yang selamat dan notis privasi sesuai.
- Sebelum menggunakan domain sebenar, tambah URL canonical, sitemap XML dan daftarkan website dalam Google Search Console.

## Struktur

- `index.html` — kandungan, metadata dan struktur data
- `styles.css` — gaya responsif
- `script.js` — interaksi menu, galeri dan borang WhatsApp
- `assets/` — visual ilustrasi dan favicon
