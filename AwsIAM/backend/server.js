const express = require('express');
const cors = require('cors');

const { isAllowed } = require('./iamEngine');
const s3 = require('./services/s3Service');

const app = express();
app.use(cors());
app.use(express.json());

// Middleware de autenticación simulada
app.use((req, res, next) => {
const user = req.headers['x-user'];

if (!user) {
return res.status(401).json({ error: "Usuario no especificado" });
}

req.user = user;
next();
});

// Listar buckets
app.get('/buckets', (req, res) => {
if (!isAllowed(req.user, 's3:ListBuckets')) {
return res.status(403).json({ error: "Acceso denegado" });
}

res.json(s3.listBuckets());
});

// Eliminar bucket
app.delete('/buckets/:name', (req, res) => {
if (!isAllowed(req.user, 's3:DeleteBucket')) {
return res.status(403).json({ error: "Acceso denegado" });
}

const success = s3.deleteBucket(req.params.name);

res.json({ success });
});

app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));
