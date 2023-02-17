const { ApolloServer, gql } = require('apollo-server')

const users = [
    {
        name: 'Ana',
        active: true
    },
    {
        name: 'Marcis',
        active: false
    }
]

//query que pegue usuarios de uma base de dados :::: tem que definir um SCHEMA, o que da pra acessar e de que forma
// ! -> não pode ser nulo

const typeDefs = gql `

    type User {
        name: String!
        active: Boolean!
        email: String!
    }
    

`



const server = new ApolloServer({typeDefs,resolvers})

