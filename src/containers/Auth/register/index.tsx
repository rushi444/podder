import React from 'react'
import { Box, ScaleFade } from '@chakra-ui/react'

import { RegisterForm } from './RegisterForm'
import { AuthContainer } from '../styles'

export const Register = () => {
  return (
    <AuthContainer>
      <Box w="50%" justifySelf="center">
        <ScaleFade in={true} initialScale={0.7}>
          <span style={{ fontSize: '3rem', color: 'teal' }}>
            Lets get started...
          </span>
          <RegisterForm />
        </ScaleFade>
      </Box>
    </AuthContainer>
  )
}
