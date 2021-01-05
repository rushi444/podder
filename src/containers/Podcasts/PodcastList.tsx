import React from 'react'
import { useQuery } from '@apollo/client'

import { ALL_PODCASTS_QUERY } from '../../graphql/queries'
import { Button, Flex, Grid, Heading } from '@chakra-ui/react'
import { Podcast } from './Podcast'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { Podcast as TPodcast } from '../../utils/types'
import { useHistory } from 'react-router-dom'

export const PodcastList = () => {
  const history = useHistory()
  const { data, loading, error } = useQuery(ALL_PODCASTS_QUERY)

  if (loading) return <LoadingSpinner />

  const onAddPodcast = () => history.push('/addPodcast')

  return (
    <div>
      <Flex justifyContent="space-between">
        <Heading as="h3" size="lg" pb="3%">
          Browse Podcasts
        </Heading>
        <Button colorScheme="teal" onClick={onAddPodcast}>
          Add Podcast
        </Button>
      </Flex>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={6}
      >
        {data.getAllPodcasts.map((podcast: TPodcast) => (
          <Podcast key={podcast.id} {...podcast} />
        ))}
      </Grid>
    </div>
  )
}
