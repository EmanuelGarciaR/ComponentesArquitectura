// index.js
import { ApolloServer, gql } from 'apollo-server';

// El Schema define QUÉ datos tienes y de qué tipo son.
const typeDefs = gql`
// Esto es un tipo. Define la forma de un objeto.
    type Usuario {
        id: ID!
        nombre: String!
        email: String!
        edad: Int
    }

// Query: define todo lo que el cliente PUEDE LEER.
// Cómo los "GET" de REST.
    type Query {
        usuarios: [Usuario]
        usuario(id: ID!): Usuario
    }

//Mutation: define todo lo que el cliente PUEDE MODIFICAR.
//Cómo los "POST/PUT/DELETE" de REST.
    type Mutation {
        crearUsuario(nombre: String!, email: String!, edad: Int): Usuario
    }
`;





// ==============Ahora los Resolvers===========

// Datos de ejemplo
const usuariosDB = [
    { id: '1', nombre: 'Ana García', email: 'ana@email.com', edad: 28 },
    { id: '2', nombre: 'Carlos López', email: 'carlos@email.com', edad: 34 },
    { id: '3', nombre: 'María Rodríguez', email: 'maria@email.com', edad: 25 },
];

// Los resolvers son funciones que "resuelven" cada campo del schema.
// El objeto tiene que tener la MISMA estructura que los tipos especiales del schema.
const resolvers = {
    Query: {
    // _ es el "parent" (no se usa en resolvers raíz), _args son los argumentos
    usuarios: () => {
        return usuariosDB;
    },

    // Esta función se llama cuando el cliente hace: query { usuario(id: "1") { ... } }
    // args.id contiene el valor que el cliente pasó
    usuario: (_, args) => {
        return usuariosDB.find(u => u.id === args.id);
    },
},

    Mutation: {
    // args contiene nombre, email y edad que envió el cliente
        crearUsuario: (_, args) => {
            const nuevoUsuario = {
                id: String(usuariosDB.length + 1),
                nombre: args.nombre,
                email: args.email,
                edad: args.edad,
            };
            usuariosDB.push(nuevoUsuario);
            return nuevoUsuario;
        },
    },
};