import React, { useEffect } from 'react'
import { Heading } from '@chakra-ui/react'

import { useAuthData } from '../../hooks/useAuthData'

export const WelcomeHeader = () => {
  const {
    user: { name },
    getUser,
  } = useAuthData()

  useEffect(() => {
    getUser()
  }, [])
  
  return <Heading>{name && `Welcome ${name}`}</Heading>
}
