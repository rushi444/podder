import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

import { SEARCH_PODCASTS } from '../../graphql/queries'
import { Button, Flex, Grid, Heading } from '@chakra-ui/react'
import { Podcast } from './Podcast'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { Podcast as TPodcast } from '../../utils/types'
import { useHistory } from 'react-router-dom'
import { SearchField } from '../../components/fields/SearchField'

export const PodcastList = () => {
  const history = useHistory()

  const [searchQuery, setSearchQuery] = useState('')

  const { data, loading, error, refetch } = useQuery(SEARCH_PODCASTS, {
    variables: { input: { searchQuery: '' } },
  })

  if (loading) return <LoadingSpinner />

  const onAddPodcast = () => history.push('/addPodcast')

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    refetch({ input: { searchQuery: value } })
  }

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
      <SearchField onSearch={handleSearch} placeholder="Search podcasts..." />
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={6}
      >
        {data.searchPodcasts.map((podcast: TPodcast) => (
          <Podcast key={podcast.id} {...podcast} />
        ))}
      </Grid>
    </div>
  )
}
