// Array untuk menyimpan data siswa secara sementara (in-memory)
const students = [];

/*
 * Fungsi generateId()
 * -------------------
 * Menghasilkan ID unik setiap kali menambahkan siswa baru.
 * Jika array students kosong, ID pertama adalah 1.
 * Jika sudah ada, ID dosen baru adalah ID siswa terakhir + 1.
 */
const generateId = () => {
  return students.length ? students[students.length - 1].id + 1 : 1;
};

module.exports = {
  /**
   * getAll()
   * --------
   * Mengembalikan seluruh data siswa yang tersimpan di array.
   * Fungsi ini digunakan untuk menampilkan daftar semua siswa.
   *
   * @return {Array} Array yang berisi semua data siswa.
   */
  getAll: () => students,

  /**
   * add(student)
   * -------------
   * Menambahkan data siswa baru ke dalam array.
   * Sebelum ditambahkan, fungsi ini menghasilkan ID unik untuk siswa tersebut.
   * Data siswa yang ditambahkan memiliki properti 'name', 'nrp', dan 'id'.
   *   
   * @param {Object} student - Objek siswa dengan properti minimal 'name' dan 'nrp'.
   */
  add: (student) => {
    // Tetapkan ID unik untuk siswa baru
    student.id = generateId();
    // Tambahkan siswa ke array
    students.push(student);
  },

  /**
   * getById(id)
   * -----------
   * Mengambil data siswa berdasarkan ID.
   * Fungsi ini mencari apakah terdapat siswa yang memiliki ID sesuai
   * dengan parameter yang diberikan dan mengembalikannya.
   *
   * @param {Number} id - ID siswa yang ingin dicari.
   * @return {Object|undefined} Objek siswa bila ditemukan, undefined jika tidak.
   */
  getById: (id) => {
    return students.find((s) => s.id == id);
  },

  /**
   * update(id, newData)
   * -------------------
   * Memperbarui data siswa berdasarkan ID.
   * Fungsi ini mencari siswa yang memiliki ID yang sama dengan parameter id.
   * Jika ditemukan, properti 'name' dan 'nrp' siswa diperbarui dengan nilai dari newData.
   *
   * @param {Number} id - ID siswa yang akan diperbarui.
   * @param {Object} newData - Objek data baru yang berisi properti 'name' dan 'nrp'.
   */
  update: (id, newData) => {
    const student = students.find((s) => s.id == id);
    if (student) {
      student.name = newData.name;
      student.nrp = newData.nrp;
    }
  },

  /**
   * remove(id)
   * ----------
   * Menghapus data siswa berdasarkan ID.
   * Fungsi ini mencari indeks siswa dengan ID yang diberikan.
   * Jika siswa ditemukan, elemen tersebut dihapus dari array menggunakan splice.
   *
   * @param {Number} id - ID siswa yang akan dihapus.
   */
  remove: (id) => {
    const index = students.findIndex((s) => s.id == id);
    if (index !== -1) {
      students.splice(index, 1);
    }
  },
};
