import React from 'react'
import { Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import { InputField } from '../../../components/fields/InputField'
import {
  registerDefaultValues,
  registerRules,
  isPasswordMatch,
} from './formHelpers'
import { CREATE_USER } from '../../../graphql/mutations'
import { useAuthData } from '../../../hooks/useAuthData'
import { CheckBoxField } from '../../../components/fields/CheckBoxField'

export const RegisterForm = () => {
  const { setUserData } = useAuthData()
  const history = useHistory()

  const { handleSubmit, control, watch, register } = useForm({
    mode: 'onChange',
    defaultValues: registerDefaultValues,
  })

  const [createUser, { loading }] = useMutation(CREATE_USER, {
    onCompleted: data => {
      history.push('/onboard')
      setUserData(data?.createUser?.user)
    },
  })

  const pwd = watch('password')

  const onSubmit = (formValues: FormValues) => {
    createUser({ variables: { input: formValues } })
  }

  return (
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
      <CheckBoxField
        name="isSpeaker"
        ref={register}
        label="I'd like to be a podcast guest"
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
  )
}

type FormValues = {
  name: string
  email: string
  password: string
  password2: string
}
