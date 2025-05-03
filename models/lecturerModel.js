// Array untuk menyimpan data dosen secara sementara (in-memory)
const lecturers = [];

/*
 * Fungsi generateId()
 * -------------------
 * Menghasilkan ID unik setiap kali menambahkan dosen baru.
 * Jika array dosen belum ada isinya, ID pertama adalah 1.
 * Jika sudah ada, ID dosen baru adalah ID dosen terakhir + 1.
 */
const generateId = () => {
  return lecturers.length ? lecturers[lecturers.length - 1].id + 1 : 1;
};

module.exports = {
  /*
   * getAll()
   * --------
   * Mengembalikan semua data dosen yang tersimpan di dalam array.
   * Fungsi ini digunakan untuk menampilkan daftar semua dosen.
   */
  getAll: () => lecturers,

  /*
   * add(lecturer)
   * -------------
   * Menambahkan data dosen baru ke dalam array.
   * Sebelum ditambahkan, fungsi ini menghasilkan ID unik untuk dosen tersebut.
   * Data dosen yang ditambahkan memiliki properti 'name', 'nim', dan 'id'.
   * Setelah menambahkan, fungsi mengembalikan data dosen yang baru ditambahkan.
   */
  add: (lecturer) => {
    lecturer.id = generateId();
    lecturers.push(lecturer);
    return lecturer;
  },

  /*
   * getById(id)
   * -----------
   * Mengambil data dosen berdasarkan ID.
   * Fungsi ini mencari apakah terdapat dosen yang memiliki ID sesuai
   * dengan parameter yang diberikan dan mengembalikannya.
   */
  getById: (id) => lecturers.find((l) => l.id == id),

  /*
   * update(id, newData)
   * -------------------
   * Memperbarui data dosen berdasarkan ID.
   * Fungsi ini mencari dosen yang memiliki ID yang sama dengan parameter id.
   * Jika ditemukan, properti 'name' dan 'nim' dosen diperbarui dengan nilai dari newData.
   */
  update: (id, newData) => {
    const lecturer = lecturers.find((l) => l.id == id);
    if (lecturer) {
      lecturer.name = newData.name;
      lecturer.nim = newData.nim;
    }
  },

  /*
   * remove(id)
   * ----------
   * Menghapus data dosen berdasarkan ID.
   * Fungsi ini menggunakan findIndex untuk menemukan indeks dari dosen dengan ID yang diberikan.
   * Jika dosen ditemukan (indeks tidak -1), elemen tersebut dihapus dari array menggunakan splice.
   */
  remove: (id) => {
    const index = lecturers.findIndex((l) => l.id == id);
    if (index !== -1) {
      lecturers.splice(index, 1);
    }
  },
};
