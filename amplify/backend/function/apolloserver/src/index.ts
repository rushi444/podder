import { ApolloServer } from 'apollo-server-lambda'

import { schema } from './api/schema'
import { createContext } from './api/context'

const server = new ApolloServer({
  schema,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    ...createContext(),
  }),
  introspection: true,
})

export const handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
})
