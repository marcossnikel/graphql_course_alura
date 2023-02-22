const {GraphQLScalarType} = require('graphql')



const userResolvers = {

    RolesType:{
        ESTUDANTE: "ESTUDANTE",
        DOCENTE: "DOCENTE",
        COORDENACAO: "COORDENACAO"
    },

    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'Create an new data type, ISO format',
        serialize: (value) => value.toISOString(),
        parseValue: (value) => new Date(value),
        parseLiteral: (ast) => new Date(ast.value)
    }),

    Query: {
        users: (root,args,{ dataSources }) => dataSources.usersAPI.getUsers(),
        userById: (root,{id},{dataSources}) => dataSources.usersAPI.getUserById(id)
    },
    Mutation: {
        
        createUser: (root, {user}, {dataSources}) => {
            return dataSources.usersAPI.createUser(user)
        },

        updateUser: (root, newData, {dataSources}) => {
            return dataSources.usersAPI.updateUser(newData)
        },

        deleteUser: (root,{id},{dataSources}) =>{
            return dataSources.usersAPI.deleteUser(id)
        }
        
    }
}

module.exports = userResolvers