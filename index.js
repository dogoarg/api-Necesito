require('dotenv').config();
const express = require('express');
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const firebaseConfig = require('./config/firebaseConfig');
const scheduleUpdatePins = require('./cron/updatePins');

const app = express();
const port = process.env.PORT || 3000;

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

scheduleUpdatePins(db);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
