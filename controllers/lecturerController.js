/*
  Lecturer Controller

  Fungsi-fungsi di bawah mengelola operasi CRUD untuk dosen:
  1. index()   - Menampilkan daftar semua dosen.
  2. store()   - Menyimpan dosen baru.
  3. edit()    - Menampilkan formulir edit untuk dosen tertentu.
  4. update()  - Memperbarui data dosen.
  5. destroy() - Menghapus dosen.

  Setiap metode berinteraksi dengan model Lecturer untuk melakukan operasi yang dibutuhkan.
*/

const Lecturer = require('../models/lecturerModel');

/**
 * Menampilkan daftar semua dosen.
 * - Mengambil semua data dosen dari model.
 * - Mencetak data dosen ke konsol sebagai debug.
 * - Merender tampilan 'lecturer' dengan data dosen dan judul.
 */
exports.index = (req, res) => {
  const allLecturers = Lecturer.getAll();
  console.log('Data dosen:', allLecturers);
  res.render('lecturer', { lecturers: allLecturers, title: 'Data Dosen' });
};

/**
 * Menyimpan dosen baru.
 * - Mengambil nilai 'name' dan 'nim' dari body request.
 * - Menambahkan dosen baru ke model dan mencetak data dosen yang baru ditambahkan.
 * - Mengalihkan pengguna kembali ke halaman daftar dosen.
 */
exports.store = (req, res) => {
  const { name, nim } = req.body;
  if (name && nim) {
    const newLecturer = Lecturer.add({ name, nim });
    console.log('Lecturer added:', newLecturer);
  }
  res.redirect('/lecturers');
};

/**
 * Menampilkan formulir edit untuk dosen tertentu.
 * - Mengambil ID dosen dari parameter URL.
 * - Mencari dosen berdasarkan ID dan jika ditemukan merender tampilan 'lecturer_edit'.
 * - Jika tidak ditemukan, mengalihkan kembali ke halaman daftar dosen.
 */
exports.edit = (req, res) => {
  const { id } = req.params;
  const lecturer = Lecturer.getById(Number(id));
  if (lecturer) {
    res.render('lecturer_edit', { lecturer, title: 'Edit Data Dosen' });
  } else {
    res.redirect('/lecturers');
  }
};

/**
 * Memperbarui data dosen.
 * - Mengambil ID dosen dari parameter URL dan data baru dari body request.
 * - Mencetak log untuk permintaan update sebagai debug.
 * - Memperbarui data dosen menggunakan model dan mengalihkan ke halaman daftar dosen.
 */
exports.update = (req, res) => {
  const { id } = req.params;
  const { name, nim } = req.body;
  console.log('Update request for id:', id, 'with data:', { name, nim });
  Lecturer.update(Number(id), { name, nim });
  res.redirect('/lecturers');
};

/**
 * Menghapus dosen berdasarkan ID.
 * - Mengambil ID dosen dari parameter URL.
 * - Menghapus dosen menggunakan model.
 * - Mengalihkan kembali ke halaman daftar dosen.
 */
exports.destroy = (req, res) => {
  const { id } = req.params;
  Lecturer.remove(Number(id));
  res.redirect('/lecturers');
};
