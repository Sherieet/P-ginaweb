// 1. Importar la biblioteca express
const express = require('express');
const app = express();
const path = require('path');

// 2. Configurar la carpeta "public" para que sea accesible
// Aquí es donde los alumnos deben poner su index.html y style.css
app.use(express.static('public'));

// Middleware para leer datos de formularios (Semana 6)
app.use(express.urlencoded({ extended: true }));

// 3. Definir el puerto de escucha
const PORT = 3000;

// Ruta para procesar el formulario de contacto (Semana 6)
app.post('/enviar', (req, res) => {
    const { nombre, apellido, email, comentario } = req.body;
    console.log(`Datos recibidos: ${nombre} ${apellido} - ${email}`);
    res.send(`<h1>¡Gracias ${nombre}!</h1><p>Tu comentario ha sido recibido en el servidor.</p>`);
});

// 4. Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
    console.log("Presiona Ctrl+C para detener el servidor.");
});

// Este código es un middleware esencial en Express.js que permite a tu servidor analizar (parsear) automáticamente los datos enviados a través de formularios HTML.
app.use(express.urlencoded({ extended: true }));

app.post('/enviar', (req, res) => {
    const { nombre, apellido, email, comentario } = req.body;
    console.log(`Datos recibidos: ${nombre} ${apellido} - ${email}`);
    res.send(`<h1>¡Gracias ${nombre}!</h1><p>Tu comentario ha sido recibido en el servidor.</p>`);
});
