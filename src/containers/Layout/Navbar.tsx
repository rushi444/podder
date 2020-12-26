import React from 'react'
import { Flex, Button, Box, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

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

      <Box>
        <Button bg="transparent" border="1px" mr="1rem">
          <Link to="/auth">Sign Up</Link>
        </Button>
        <Button bg="transparent" border="1px">
          Sign In
        </Button>
      </Box>
    </Flex>
  )
}
