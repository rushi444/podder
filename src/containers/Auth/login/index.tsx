import React from 'react'
import { FormWrapper } from '../../../components/FormWrapper'

import { LoginForm } from './LoginForm'

export const Login = () => {
  return (
    <FormWrapper title="Welcome back!">
      <LoginForm />
    </FormWrapper>
  )
}
