const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Bienvenido a la API de MozoCall');
});

// Aquí puedes añadir más rutas para manejar los bares, mesas, etc.

module.exports = router;
