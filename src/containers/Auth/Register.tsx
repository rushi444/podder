import React from 'react'

import { Grid, Box } from '@chakra-ui/react'

export const Register = () => {
  return (
    <Grid templateColumns="50% 50%">
      <Box>Left Side ...</Box>
      <Box>
        <Box>
          <input type="text" name="name" placeholder="name" />
        </Box>
        <Box>
          <input type="text" name="name" placeholder="email" />
        </Box>
        <Box>
          <input type="text" name="name" placeholder="pass" />
        </Box>
      </Box>
    </Grid>
  )
}
