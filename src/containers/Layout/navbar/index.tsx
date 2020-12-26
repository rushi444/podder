import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './ButtonContainer'

export const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="white"
      color="teal.500"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          <Link to="/">Podder</Link>
        </Heading>
      </Flex>
      <ButtonContainer />
    </Flex>
  )
}
