const arrayUsers = [
    {
        nome: "Ana",
        ativo: true ,
        email: "ana@ana"
    },
    {
        nome:"Marcia",
        ativo: false
    }
]


const userResolvers = {
    Query: {
        users: () => arrayUsers,
        firstUser : () => arrayUsers[0]
    }
}

module.exports = userResolvers