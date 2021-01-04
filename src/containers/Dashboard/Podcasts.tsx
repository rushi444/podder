import React from 'react'
import { useQuery } from '@apollo/client'

import { ALL_PODCASTS_QUERY } from '../../graphql/queries'
import { Grid, Heading } from '@chakra-ui/react'
import { Podcast } from './Podcast'

export const Podcasts = () => {
  const { data, loading, error } = useQuery(ALL_PODCASTS_QUERY)

  if (loading) return <div>Loading...</div>
  console.log('podders', data)
  return (
    <div>
      <Heading as="h3" size="lg" pb='3%'>
        Browse Podcasts
      </Heading>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={6}
      >
        {data.getAllPodcasts.map((podcast: any) => (
          <Podcast key={podcast.id} {...podcast} />
        ))}
      </Grid>
    </div>
  )
}
