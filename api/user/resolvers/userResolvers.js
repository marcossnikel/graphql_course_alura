
const userResolvers = {
    Query: {
        users: (root,args,{ dataSources }) => dataSources.usersAPI.getUsers(),
        userById: (root,{id},{dataSources}) => dataSources.usersAPI.getUserById(id)
    },
    Mutation: {
        createUser: (root, user, {dataSources}) => {
            return dataSources.usersAPI.createUser(user)
        }
    }
}

module.exports = userResolvers