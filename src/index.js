const { GraphQLServer } = require('graphql-yoga')

// 1
const typeDefs = `
type Query {
  info: String!,
  data: String
}
`

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    data: () => null

  }
}

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))