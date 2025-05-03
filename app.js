// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();

// Set view engine dan views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Tetapkan layout default (pastikan file layout.ejs berada di direktori views)
app.set('layout', 'layout');

// Gunakan express-ejs-layouts
app.use(expressLayouts);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.render('home', { title: 'Beranda' });
});

// Routes
const studentRoutes = require('./routes/studentRoutes');
const lecturerRoutes = require('./routes/lecturerRoutes');

app.use('/students', studentRoutes);
app.use('/lecturers', lecturerRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
