import React from 'react'
import { Grid, Box } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { InputField } from '../../../components/fields/InputField'
import {
  registerDefaultValues,
  registerRules,
  isPasswordMatch,
} from './formHelpers'

export const Register = () => {
  const { handleSubmit, control, register, watch } = useForm({
    mode: 'onChange',
    defaultValues: registerDefaultValues,
  })

  const pwd = watch('password')

  const onSubmit = (data: any) => console.log(data)
  return (
    <Grid templateColumns="50% 50%">
      <Box>Left Side ...</Box>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            name="name"
            control={control}
            rules={registerRules.name}
          />
          <InputField
            name="email"
            control={control}
            rules={registerRules.email}
          />
          <InputField
            name="password"
            type="password"
            control={control}
            rules={registerRules.password}
          />
          <InputField
            name="password2"
            type="password"
            control={control}
            rules={{
              ...registerRules.password2,
              validate: isPasswordMatch(pwd),
            }}
          />
        </form>
      </Box>
    </Grid>
  )
}
