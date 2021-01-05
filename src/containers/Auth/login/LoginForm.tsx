import React from 'react'
import { Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import { InputField } from '../../../components/fields/InputField'
import { loginDefaultValues, loginRules } from './formHelpers'
import { LOGIN } from '../../../graphql/mutations'
import { useAuthData } from '../../../hooks/useAuthData'

export const LoginForm = () => {
  const history = useHistory()
  const { setUserData } = useAuthData()
  const { handleSubmit, control } = useForm({
    mode: 'onChange',
    defaultValues: loginDefaultValues,
  })

  const [login, { data, loading }] = useMutation(LOGIN, {
    onCompleted: data => {
      localStorage.setItem('token', data.login.token)
      setUserData(data.login.user)
      history.push('/dashboard')
    },
  })

  const onSubmit = (formValues: FormValues) => {
    login({ variables: { input: formValues } })
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="email"
          label="Email"
          control={control}
          rules={loginRules.email}
        />
        <InputField
          name="password"
          label="Password"
          type="password"
          control={control}
          rules={loginRules.password}
        />
        <Button
          type="submit"
          isLoading={loading}
          loadingText="Submitting"
          colorScheme="teal"
        >
          Login
        </Button>
      </form>
  )
}

type FormValues = {
  email: string
  password: string
}
