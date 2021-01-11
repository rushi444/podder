import { ApolloServer } from 'apollo-server'

import { schema } from './src/schema'
import { createContext } from './src/context'

const server = new ApolloServer({
  schema,
  context: createContext,
  playground: {
    endpoint: '/graphql',
  },
})

server.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at: http://localhost:4000/graphql`)
)
