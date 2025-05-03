const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.index);
router.post('/add', studentController.store);
router.get('/edit/:id', studentController.edit);
router.post('/update/:id', studentController.update);
router.get('/delete/:id', studentController.destroy);

module.exports = router;
