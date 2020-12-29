import { Box } from '@chakra-ui/react'
import React from 'react'
import { LandingOne } from './LandingComponents/LandingOne'
import { LandingTwo } from './LandingComponents/LandingTwo'
import { HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer className="homeContainer">
      <Box
        w={{ base: '90%', md: '85%', lg: '70%' }}
        mt={{ base: '5%', md: '10%', lg: '5%' }}
      >
        <LandingOne />
        <LandingTwo />
      </Box>
    </HomeContainer>
  )
}
