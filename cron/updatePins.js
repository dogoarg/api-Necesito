const { collection, getDocs, updateDoc } = require('firebase/firestore');
const cron = require('node-cron');

function generateRandomPin() {
  return Math.floor(1000 + Math.random() * 9000).toString(); // Genera un pin aleatorio de 4 dígitos
}

async function updatePins(db) {
  try {
    const baresSnapshot = await getDocs(collection(db, 'bares'));
    baresSnapshot.forEach(async (barDoc) => {
      const barRef = barDoc.ref;
      await updateDoc(barRef, { pin: generateRandomPin() });
    });
    console.log('Pins actualizados exitosamente');
  } catch (error) {
    console.error('Error al actualizar los pins:', error);
  }
}

module.exports = (db) => {
  //cron.schedule('0 */30 * * *', () => { // Cada 30 horas
    //console.log('Ejecutando tarea programada: Actualizar pins');
    //updatePins(db);
  //});

  cron.schedule('* * * * *', () => { // Cada minuto
    console.log('Ejecutando tarea programada: Actualizar pins');
    updatePins(db);
  });
};
