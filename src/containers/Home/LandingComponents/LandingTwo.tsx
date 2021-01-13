import React from 'react'
import { Box, Heading, Image, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'

import Podcast from '../../../assets/undraw_podcast.svg'
import AudioConversation from '../../../assets/undraw_audio_conversation.svg'

export const LandingTwo = () => {
  return (
    <LandingTwoContainer direction={{ base: 'column', md: 'row' }}>
      <Box mr={{ base: 'none', md: '1rem' }}>
        <LandingTwoImg src={Podcast} alt="podcast host" />
        <Heading pb="1.5rem">For Hosts</Heading>
        <p style={{ paddingBottom: '1.5rem' }}>
          Search through a curated list of potential guest speakers based on
          topics covered in your podcast
        </p>
      </Box>
      <Box>
        <LandingTwoImg src={AudioConversation} alt="audio conversation" />
        <Heading pb="1.5rem">And Speakers</Heading>
        <p>
          Have your voice heard when you connect with podcasts that are excited
          to broadcast your knowledge
        </p>
      </Box>
    </LandingTwoContainer>
  )
}

const LandingTwoImg = styled(Image)`
  padding-bottom: 1.5rem;
  height: 325px;
  width: 475px;
`

const LandingTwoContainer = styled(Flex)`
  align-content: space-between;
  margin-top: 5rem;
`
