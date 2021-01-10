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
  ref: any
}

export const CheckBoxField = (props: Props) => {
  const { name, ref, label } = props

  return (
    <Box m="3% 0">
      <Checkbox name={name} ref={ref}>
        {label}
      </Checkbox>
    </Box>
  )
}
