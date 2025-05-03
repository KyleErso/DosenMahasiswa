Nama : Evan Kristian Pratama

NRP : 2372047

# Dosen Mahasiswa

Aplikasi **Dosen Mahasiswa** adalah proyek tugas Pemrograman Web Lanjut (PWL) yang mengelola data mahasiswa dan dosen wali tanpa koneksi basis data. Data disimpan secara in-memory dan dioperasikan melalui operasi CRUD (Create, Read, Update, Delete) yang lengkap. Proyek ini dibuat secara perorangan dengan pendekatan clean code dan menggunakan Node.js, Express, dan EJS.

## Fitur

- **Halaman Beranda:** Menampilkan halaman utama dengan informasi dasar.
- **Manajemen Mahasiswa:**  
  - Tambah data mahasiswa  
  - Edit data mahasiswa 
  - Hapus data mahasiswa 
- **Manajemen Dosen Wali:**  
  - Tambah data dosen  
  - Edit data dosen 
  - Hapus data dosen 
- **Tampilan Dinamis:** View engine EJS dengan layout yang mudah dikustomisasi menggunakan Express-EJS-Layouts dan Bootstrap.

## Teknologi yang Digunakan

- **Node.js:** Runtime environment untuk menjalankan JavaScript di sisi server.
- **Express:** Framework web minimalis untuk mengatur routing, middleware, dan response.
- **EJS:** Templating engine untuk menghasilkan tampilan HTML dinamis.
- **Bootstrap:** Library CSS untuk tampilan responsif dan komponen UI (misalnya modal).

## Instalasi & Cara Menjalankan

1. **Clone Repository:**

   ```bash
   git clone https://github.com/username/DosenMahasiswa.git
   cd DosenMahasiswa
   ```

2. **Instal Dependensi:**

   Pastikan Anda telah menginstall [Node.js](https://nodejs.org/). Kemudian jalankan:

   ```bash
   npm install
   ```

3. **Jalankan Aplikasi:**

   Mulai server dengan perintah:

   ```bash
   npm start
   ```

   Buka browser dan akses [http://localhost:3000](http://localhost:3000) untuk melihat aplikasi.

## Struktur Proyek

```
DosenMahasiswa/
├── controllers/         # Logika CRUD untuk mahasiswa dan dosen wali
├── models/              # Model data (in-memory dan/atau JSON)
├── public/              # File statis: CSS, gambar, JavaScript client-side
├── routes/              # Definisi routing untuk mahasiswa dan dosen wali
├── views/               # Template EJS untuk tampilan frontend
│   ├── layout.ejs       # Layout utama untuk halaman
│   ├── home.ejs         # Halaman beranda
│   ├── student.ejs      # Tampilan manajemen mahasiswa
│   ├── lecturer.ejs     # Tampilan manajemen dosen wali
└── app.js               # Konfigurasi dan inisialisasi Express
```

## Kontribusi

Proyek ini dibuat sebagai tugas perorangan. Bila Anda memiliki saran atau masukan, silakan buat issue atau fork repository ini.

---

Selamat mencoba dan semoga bermanfaat!
