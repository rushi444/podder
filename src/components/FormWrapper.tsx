import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Box, Flex, ScaleFade } from '@chakra-ui/react'
import { FormHeader } from './FormHeader'

type Props = {
  title: string
  children: ReactNode
}

export const FormWrapper = ({ title, children }: Props) => {
  return (
    <Container>
      <Box w={{ base: '80%', md: '50%' }} justifySelf="center">
        <ScaleFade in={true} initialScale={0.7}>
          <FormHeader>{title}</FormHeader>
          <Box height="100%" alignContent="center">
            {children}
          </Box>
        </ScaleFade>
      </Box>
    </Container>
  )
}

const Container = styled(Flex)`
  height: 100%;
  padding-top: 15%;
  justify-content: center;
`
