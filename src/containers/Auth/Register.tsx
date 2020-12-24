import React from 'react'
import { Grid, Box } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { InputField } from '../../components/fields/InputField'

export const Register = () => {
  const { handleSubmit, control } = useForm({
    mode: 'onChange',
    defaultValues: { name: '' },
  })

  const onSubmit = (data: any) => console.log(data)
  return (
    <Grid templateColumns="50% 50%">
      <Box>Left Side ...</Box>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            name="name"
            control={control}
            rules={{
              required: 'This field is required dog...',
              minLength: {
                value: 2,
                message: 'Should be at least 2 characters',
              },
            }}
          />
          <Box>
            <input type="text" name="name" placeholder="email" />
          </Box>
          <Box>
            <input type="text" name="name" placeholder="pass" />
          </Box>
        </form>
      </Box>
    </Grid>
  )
}
