import React from 'react'
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'

import PeopleSearch from '../../../assets/undraw_people_search.svg'

export const LandingOne = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }}>
      <Flex w={{ base: '90%', md: '50%' }}>
        <Image src={PeopleSearch} alt="people search image" />
      </Flex>
      <Flex w={{ base: '90%', md: '50%' }} justifyContent="center">
        <Box w={{ base: '90%', md: '70%' }} alignSelf="center">
          <Heading mb="1.5rem">The simple way to find your next guest</Heading>
          <p style={{ marginBottom: '1.5rem' }}>
            Discover knowledgable and engaged guest speakers to take your
            podcast to new lengths!
          </p>
          <Button colorScheme="teal">Get started</Button>
        </Box>
      </Flex>
    </Flex>
  )
}
