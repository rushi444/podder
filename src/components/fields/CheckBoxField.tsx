import React, { forwardRef, ForwardedRef } from 'react'
import { Box, Checkbox } from '@chakra-ui/react'

type Props = {
  name: string
  label?: string
}

export const CheckBoxField = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const { name, label } = props

    return (
      <Box m="3% 0">
        <Checkbox name={name} ref={ref}>
          {label}
        </Checkbox>
      </Box>
    )
  }
)
