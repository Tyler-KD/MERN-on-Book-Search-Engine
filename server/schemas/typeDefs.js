// typeDefs defines the GraphQL schema, which is the shape of the data graph.
// It outlines the types of data your API can return and the operations (queries and mutations) it supports.

const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
}
type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

input BookInput {
    authors: [String!]
    description: String
    bookId: ID
    image: String
    link: String
    title: String
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: BookInput): User
    removeBook(bookId: ID!): User
}
`;

module.exports = typeDefs;