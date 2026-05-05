// index.js
import { ApolloServer, gql } from 'apollo-server';

// El Schema define QUÉ datos tienes y de qué tipo son.
const typeDefs = gql`
# Esto es un tipo. Define la forma de un objeto.
    type Usuario {
        id: ID!
        nombre: String!
        email: String!
        edad: Int
    }

# Query: define todo lo que el cliente PUEDE LEER.
# Cómo los "GET" de REST.
    type Query {
        usuarios: [Usuario]
        usuario(id: ID!): Usuario
    }

#Mutation: define todo lo que el cliente PUEDE MODIFICAR.
#Cómo los "POST/PUT/DELETE" de REST.
    type Mutation {
        crearUsuario(nombre: String!, email: String!, edad: Int): Usuario
    }
`;