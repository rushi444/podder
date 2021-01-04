import React from 'react'
import { PodcastList } from './PodcastList'
import { PodcastsContainer } from './styles'

export const Podcasts = () => {
  return (
    <PodcastsContainer>
      <PodcastList />
    </PodcastsContainer>
  )
}
