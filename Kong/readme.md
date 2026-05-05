# 🚀 Kong API Gateway Demo

## 📌 Descripción

Este proyecto demuestra una implementación básica de un API Gateway utilizando Kong Gateway conectado a una API desarrollada en Node.js.

Kong actúa como intermediario entre el cliente y el backend, permitiendo gestionar el tráfico, aplicar seguridad y controlar el acceso a los servicios.

---

## 🧱 Arquitectura del sistema

Cliente (Postman / Navegador)
⬇
Kong Gateway (Puerto 8000)
⬇
API Node.js (Puerto 3000)

---

## 📁 Estructura del proyecto

```
kong-demo/
│
├── docker-compose.yml   # Configuración de Kong y base de datos
├── server.js            # API backend en Node.js
├── README.md            # Documentación del proyecto
```

---

## ⚙️ Requisitos

Antes de comenzar, asegúrate de tener instalado:

* Docker
* Node.js
* Visual Studio Code (opcional)
* Postman o curl para pruebas

---

## 🚀 Instalación y ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd kong-demo
```

---

### 2️⃣ Levantar Kong con Docker

```bash
docker-compose up -d
```

🔎 Esto iniciará:

* Base de datos PostgreSQL
* Kong Gateway
* API de administración de Kong

📌 Puertos importantes:

* `8000` → Proxy (por donde pasan las requests)
* `8001` → Admin API (configuración)

---

### 3️⃣ Configurar y ejecutar la API

Inicializa el proyecto Node.js:

```bash
npm init -y
npm install express
```

Ejecuta el servidor:

```bash
node server.js
```

📌 La API estará disponible en:

```
http://localhost:3000
```

---

### 4️⃣ Registrar el servicio en Kong

Kong necesita saber dónde está tu API.

```bash
curl -i -X POST http://localhost:8001/services \
  --data name=mi-api \
  --data url=http://host.docker.internal:3000
```

---

### 5️⃣ Crear una ruta en Kong

Define cómo acceder a tu API desde Kong:

```bash
curl -i -X POST http://localhost:8001/routes \
  --data paths[]=/mi-api \
  --data service.name=mi-api
```

---

## 🧪 Pruebas

### Probar desde navegador o curl:

```bash
curl http://localhost:8000/mi-api/api/saludo
```

📌 Resultado esperado:

```json
{
  "mensaje": "Hola desde mi API usando Kong 🚀"
}
```

---

## ⚙️ (Opcional) Agregar Rate Limiting

Puedes limitar el número de peticiones:

```bash
curl -X POST http://localhost:8001/services/mi-api/plugins \
  --data "name=rate-limiting" \
  --data "config.minute=5"
```

📌 Esto permite máximo 5 requests por minuto.

---

## ❗ Solución de problemas

### 🔴 Error: No conecta con la API

* En Windows/Mac usa:

```
host.docker.internal
```

* En Linux usa la IP de tu máquina:

```
http://172.x.x.x:3000
```

---

### 🔴 Error: Puerto ocupado

Verifica que no haya servicios usando:

* `8000`
* `8001`
* `5432`
* `3000`

---

### 🔴 Kong no inicia correctamente

Ejecuta:

```bash
docker-compose down
docker-compose up -d
```

---

## 📚 Conceptos clave

* Kong NO reemplaza tu backend
* Kong actúa como intermediario (API Gateway)
* Permite aplicar seguridad, monitoreo y control de tráfico

---

## 🎯 Qué demuestra este proyecto

✔ Implementación real de Kong Gateway
✔ Conexión a un backend en Node.js
✔ Enrutamiento de peticiones
✔ Uso de Docker para despliegue

---

## 🧠 Explicación para presentación

Puedes decir:

> “Kong se conecta a mi API registrándola como un servicio y luego creando rutas que permiten que las solicitudes pasen primero por el gateway antes de llegar al backend.”

---

## 👨‍💻 Autor

Proyecto académico para demostración de API Gateway con Kong.
