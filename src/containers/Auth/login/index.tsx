import React from 'react'
import { Box, ScaleFade, Heading } from '@chakra-ui/react'

import { LoginForm } from './LoginForm'
import { AuthContainer } from '../styles'
import { FormHeader } from '../FormHeader'

export const Login = () => {
  return (
    <AuthContainer>
      <Box w="50%" justifySelf="center">
        <ScaleFade in={true} initialScale={0.7}>
          <FormHeader>Welcome Back!</FormHeader>
          <LoginForm />
        </ScaleFade>
      </Box>
    </AuthContainer>
  )
}
