import React from 'react'
import { useLocation } from 'react-router-dom'

import { Register } from './register/Register'
import { AuthContainer } from './styles'

export const Auth = () => {
  const { state } = useLocation()
  return (
    <AuthContainer>
      <Register />
    </AuthContainer>
  )
}
