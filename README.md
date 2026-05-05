# 🚀 API GraphQL con Apollo Server

Una API GraphQL construida desde cero con Node.js y Apollo Server. Permite consultar y crear usuarios mediante queries y mutations.

---

## 📋 Requisitos

- Node.js v18 o superior
- npm

---

## ⚙️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/mi-api-graphql.git
cd mi-api-graphql

# Instalar dependencias
npm install
```

---

## ▶️ Uso

```bash
# Modo desarrollo (reinicia automáticamente al guardar cambios)
npm run dev

# Modo producción
npm start
```

El servidor corre en **http://localhost:4000**

---

## 🧪 Apollo Sandbox (Playground)

<img width="1358" height="676" alt="image" src="https://github.com/user-attachments/assets/d55140ea-d27e-4480-91f8-1eaa6912102b" />
---

## 📡 Queries disponibles

### Obtener todos los usuarios

```graphql
query {
  usuarios {
    id
    nombre
    email
    edad
  }
}
```

### Obtener un usuario por ID

```graphql
query($usuarioId: ID!) {
  usuario(id: $usuarioId) {
    id
    nombre
    email
  }
}
```
