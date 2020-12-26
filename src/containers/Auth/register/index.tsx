import React from 'react'
import { Box, ScaleFade } from '@chakra-ui/react'

import { RegisterForm } from './RegisterForm'
import { AuthContainer } from '../styles'
import { FormHeader } from '../FormHeader'

export const Register = () => {
  return (
    <AuthContainer>
      <Box w="50%" justifySelf="center">
        <ScaleFade in={true} initialScale={0.7}>
          <FormHeader>Lets get started...</FormHeader>
          <RegisterForm />
        </ScaleFade>
      </Box>
    </AuthContainer>
  )
}
