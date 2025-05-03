const express = require('express');
const router = express.Router();
const lecturerController = require('../controllers/lecturerController');

// Tampilkan semua data dosen
router.get('/', lecturerController.index);

// Tambah dosen baru
router.post('/add', lecturerController.store);

// Tampilkan form edit dosen
router.get('/edit/:id', lecturerController.edit);

// Proses update data dosen
router.post('/update/:id', lecturerController.update);

// Hapus data dosen
router.get('/delete/:id', lecturerController.destroy);

module.exports = router;
