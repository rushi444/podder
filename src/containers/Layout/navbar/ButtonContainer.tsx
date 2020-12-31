import React, { useMemo } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'

export const ButtonContainer = () => {
  const { pathname } = useLocation()

  const showButtonContainer = useMemo(() => showButtonsArr.includes(pathname), [
    pathname,
    showButtonsArr,
  ])

  return showButtonContainer ? (
    <Box>
      {pathname !== '/signup' && (
        <Button bg="transparent" border="1px" m="0 .5rem">
          <Link to="/signup">Sign Up</Link>
        </Button>
      )}
      {pathname !== '/signin' && (
        <Button bg="transparent" border="1px" m="0 .5rem">
          <Link to="/signin"> Sign In</Link>
        </Button>
      )}
    </Box>
  ) : (
    <Box>
      <Button bg="transparent" color="black" m="0 .5rem">
        <Link to="/podcasts">Podcasts</Link>
      </Button>
      <Button bg="transparent" color="black" m="0 .5rem">
        <Link to="/speakers">Speakers</Link>
      </Button>
      <Button bg="transparent" color="black" m="0 .5rem">
        <Link to="/account">Account</Link>
      </Button>
    </Box>
  )
}

const showButtonsArr = ['/', '/signup', '/signin']
