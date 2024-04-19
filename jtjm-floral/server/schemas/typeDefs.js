const typeDefs = `
type User {
  _id: ID
  username: String
  email: String
  password: String
}

type Service {
    _id: ID
  service: String
  description: String
  price: Int
}

type Reserve {
  _id: ID
  name: String
  service: String
  description: String
  price: Int
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addReserve(name: String!, service: String!, description: String!, price: Int!): Reserve
  removeReserve(reserveId: ID!): Reserve
}`

module.exports = typeDefs;