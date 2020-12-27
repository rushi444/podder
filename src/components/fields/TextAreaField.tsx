import React from 'react'
import { useController, Control } from 'react-hook-form'
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from '@chakra-ui/react'

import { useMetaError } from '../../hooks/useMetaError'

type Props = {
  name: string
  label: string
  control: Control
}

export const TextAreaField = (props: Props) => {
  const { label } = props
  const { field, meta } = useController(props)
  const { errorMessage, hasError } = useMetaError(meta)
  return (
    <Box m="3% 0">
      <FormControl isInvalid={hasError}>
        <FormLabel>{label}</FormLabel>
        <Textarea {...field} />
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
    </Box>
  )
}
