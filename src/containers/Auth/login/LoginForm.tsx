import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'

import { InputField } from '../../../components/fields/InputField'
import { loginDefaultValues, loginRules } from './formHelpers'
import { LOGIN } from '../../../graphql/mutations'

export const LoginForm = () => {
  const { handleSubmit, control } = useForm({
    mode: 'onChange',
    defaultValues: loginDefaultValues,
  })

  const [login, { data, loading }] = useMutation(LOGIN, {
    onCompleted: data => {
      localStorage.setItem('token', data.login.token)
    },
  })

  const onSubmit = (formValues: FormValues) => {
    login({ variables: { input: formValues } })
  }

  console.log(data)
  return (
    <Box height="100%" alignContent="center">
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
    </Box>
  )
}

type FormValues = {
  email: string
  password: string
}
