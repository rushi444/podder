import React from 'react'
import {
  Box,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react'

import { useController, Control } from 'react-hook-form'

import { useMetaError } from '../../hooks/useMetaError'

type Props = {
  name: string
  label?: string
  control: Control
  rules?: any
  ref?: any
  type: string
}

export const CheckBoxField = (props: Props) => {
  const { label } = props

  const { field, meta } = useController(props)
  console.log(field.ref)
  const { errorMessage, hasError } = useMetaError(meta)

  return (
    <Box m="3% 0">
      <FormControl isInvalid={hasError}>
        <Checkbox {...field}>
          {label}
        </Checkbox>
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
    </Box>
  )
}
