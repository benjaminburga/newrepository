const express = require('express');
const app = express();
const path = require('path');

// Configuración de EJS y archivos estáticos
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la raíz
app.get('/', (req, res) => {
  res.render('index'); // Asegúrate de que existe "views/index.ejs"
});

// Manejo de rutas no definidas
app.get('*', (req, res) => {
  res.status(404).send('Página no encontrada');
});

// Inicia el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
