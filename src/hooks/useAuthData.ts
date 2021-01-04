import create from 'zustand'

import { ME_QUERY } from '../graphql/queries'
import { client } from '../lib/apolloClient'

type User = {
  id?: string
  name?: string
  email?: string
}

type StoreProps = {
  user: User
  setUserData: (user: User) => void
  getUser: () => void
}

export const useAuthData = create<StoreProps>(set => ({
  user: {},
  setUserData: (user: User) => set({ user }),
  getUser: async () => {
    const { data } = await client.query({ query: ME_QUERY })
    set({ user: data.me })
  },
}))
