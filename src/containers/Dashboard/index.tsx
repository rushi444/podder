import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { ALL_PODCASTS_QUERY } from '../../graphql/queries'
import { WelcomeHeader } from './WelcomeHeader'

export const Dashboard = () => {
  const { data, loading, error } = useQuery(ALL_PODCASTS_QUERY)

  return (
    <div>
      <WelcomeHeader />
    </div>
  )
}
