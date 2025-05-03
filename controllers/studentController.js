// Mengimpor model Student untuk mengakses operasi CRUD pada data siswa.
const Student = require('../models/studentModel');

/**
 * index()
 * -------
 * Fungsi ini mengambil semua data siswa dari model dan merender tampilan 'student'
 * dengan data tersebut.
 *
 * @param {Request} req - Objek request dari client.
 * @param {Response} res - Objek response untuk mengirim respons ke client.
 */
exports.index = (req, res) => {
  // Mengambil seluruh data siswa yang tersimpan di model.
  const allStudents = Student.getAll();
  console.log('Daftar siswa:', allStudents); // Debug: cetak data siswa di konsol.
  
  // Merender view 'student' dengan mengirimkan data siswa dan judul.
  res.render('student', { students: allStudents, title: 'Data Siswa' });
};

/**
 * store()
 * -------
 * Fungsi ini menangani penambahan data siswa baru.
 * Data diambil dari request body, kemudian ditambahkan ke dalam model.
 *
 * @param {Request} req - Objek request dari client.
 * @param {Response} res - Objek response untuk mengirim respon ke client.
 */
exports.store = (req, res) => {
  // Mengambil nilai 'name' dan 'nrp' dari form input.
  const { name, nrp } = req.body;
  
  // Jika data 'name' dan 'nrp' valid (tidak kosong), tambahkan siswa ke model.
  if (name && nrp) {
    Student.add({ name, nrp });
    console.log('Siswa baru ditambahkan:', { name, nrp });
  }
  
  // Setelah penambahan data, pengguna dialihkan ke halaman daftar siswa.
  res.redirect('/students');
};

/**
 * edit()
 * ------
 * Fungsi ini menampilkan form edit untuk siswa tertentu.
 * Data siswa diambil berdasarkan ID yang diberikan dalam parameter URL.
 *
 * @param {Request} req - Objek request dari client.
 * @param {Response} res - Objek response untuk mengirim respons ke client.
 */
exports.edit = (req, res) => {
  // Mengambil ID siswa dari parameter URL.
  const { id } = req.params;
  
  // Mengambil data siswa berdasarkan ID.
  const student = Student.getById(id);
  
  // Jika siswa ditemukan, render tampilan form edit dengan data siswa dan judul.
  if (student) {
    res.render('student_edit', { student, title: 'Edit Data Siswa' });
  } else {
    // Jika tidak ditemukan, alihkan kembali ke halaman daftar siswa.
    res.redirect('/students');
  }
};

/**
 * update()
 * --------
 * Fungsi ini memproses pembaruan data siswa.
 * Data update (name dan nrp) diambil dari form input dan diterapkan ke model.
 *
 * @param {Request} req - Objek request dari client.
 * @param {Response} res - Objek response untuk mengirim respons ke client.
 */
exports.update = (req, res) => {
  // Mengambil ID siswa yang ingin diperbarui dari parameter URL.
  const { id } = req.params;
  // Mengambil data baru 'name' dan 'nrp' dari form input.
  const { name, nrp } = req.body;
  
  // Jika data baru valid, perbarui data siswa di model.
  if (name && nrp) {
    Student.update(id, { name, nrp });
    console.log(`Data siswa dengan ID ${id} telah diperbarui menjadi:`, { name, nrp });
  }
  
  // Setelah update, alihkan pengguna kembali ke halaman daftar siswa.
  res.redirect('/students');
};

/**
 * destroy()
 * ---------
 * Fungsi ini menghapus data siswa berdasarkan ID.
 *
 * @param {Request} req - Objek request dari client.
 * @param {Response} res - Objek response untuk mengirim respons ke client.
 */
exports.destroy = (req, res) => {
  // Mengambil ID siswa dari parameter URL.
  const { id } = req.params;
  
  // Menghapus data siswa dari model.
  Student.remove(id);
  console.log(`Siswa dengan ID ${id} telah dihapus.`);
  
  // Setelah penghapusan, alihkan pengguna kembali ke halaman daftar siswa.
  res.redirect('/students');
};
