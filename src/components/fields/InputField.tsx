import React from 'react'
import { useController, Control } from 'react-hook-form'
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react'

import { useMetaError } from '../../hooks/useMetaError'

type Props = {
  name: string
  control: Control
  rules?: any
  ref?: any
  type?: string
}

export const InputField = (props: Props) => {
  const { type = 'text' } = props
  const { field, meta } = useController(props)
  const { errorMessage, hasError } = useMetaError(meta)
  return (
    <Box>
      <FormControl isInvalid={hasError}>
        <FormLabel>{props.name}</FormLabel>
        <Input {...field} type={type} />
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
    </Box>
  )
}
