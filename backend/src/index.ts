import { ApolloServer } from 'apollo-server'

import { schema } from './schema'
import { createContext } from './context'

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
