import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'

import { InputField } from '../../../components/fields/InputField'
import {
  registerDefaultValues,
  registerRules,
  isPasswordMatch,
} from './formHelpers'
import { CREATE_USER } from '../../../graphql/mutations'

export const RegisterForm = () => {
  const { handleSubmit, control, watch } = useForm({
    mode: 'onChange',
    defaultValues: registerDefaultValues,
  })

  const [createUser, { data, loading }] = useMutation(CREATE_USER)

  const pwd = watch('password')

  const onSubmit = (formValues: FormValues) => {
    createUser({ variables: { input: formValues } })
  }

  return (
    <Box height="100%" alignContent="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="name"
          label="Name"
          control={control}
          rules={registerRules.name}
        />
        <InputField
          name="email"
          label="Email"
          control={control}
          rules={registerRules.email}
        />
        <InputField
          name="password"
          label="Password"
          type="password"
          control={control}
          rules={registerRules.password}
        />
        <InputField
          name="password2"
          label="Re-enter Password"
          type="password"
          control={control}
          rules={{
            ...registerRules.password2,
            validate: isPasswordMatch(pwd),
          }}
        />
        <Button
          type="submit"
          isLoading={loading}
          loadingText="Submitting"
          colorScheme="teal"
        >
          Sign up
        </Button>
      </form>
    </Box>
  )
}

type FormValues = {
  name: string
  email: string
  password: string
  password2: string
}
