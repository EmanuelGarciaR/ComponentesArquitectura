const express = require('express');
const app = express();

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: "Hola desde API usando Docker 🚀" });
});

app.get('/api/test', (req, res) => {
  res.json({ status: "OK" });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});