import { ApolloClient, InMemoryCache } from '@apollo/client'

import config from '../aws-exports'

const { endpoint } = config.aws_cloud_logic_custom[0]

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000/dev/graphql'
      : endpoint + '/graphql',
})
