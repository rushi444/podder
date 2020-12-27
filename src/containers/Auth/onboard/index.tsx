import React from 'react'
import { Box, ScaleFade } from '@chakra-ui/react'

import { FormHeader } from '../FormHeader'
import { AuthContainer } from '../styles'
import { OnboardForm } from './OnboardForm'

export const Onboard = () => {
  return (
    <AuthContainer>
      <Box w="50%" justifySelf="center">
        <ScaleFade in={true} initialScale={0.7}>
          <FormHeader>Tell us about a bit about yourself...</FormHeader>
          <OnboardForm />
        </ScaleFade>
      </Box>
    </AuthContainer>
  )
}
