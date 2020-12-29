import React from 'react'
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

import PeopleSearch from '../../../assets/undraw_people_search.svg'

export const LandingOne = () => {
  const history = useHistory()
  const onGetStarted = () => history.push('/signup')

  return (
    <Flex direction={{ base: 'column', md: 'row' }} h={{ md: '50%' }}>
      <Flex w={{ base: '90%', md: '60%' }}>
        <Image src={PeopleSearch} alt="people search image" />
      </Flex>
      <Flex w={{ base: '90%', md: '40%' }} justifyContent="center">
        <Box w={{ base: '90%', md: '70%' }} alignSelf="center">
          <Heading mb="1.5rem">The simple way to find your next guest</Heading>
          <p style={{ marginBottom: '1.5rem' }}>
            Discover knowledgable and engaged guest speakers to take your
            podcast to new lengths!
          </p>
          <Button colorScheme="teal" onClick={onGetStarted}>
            Get started
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}
