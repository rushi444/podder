import React from 'react'
import { Box } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { CREATE_PODCAST } from '../../graphql/mutations'

export const AddPodcastForm = () => {
  const history = useHistory()
  const { handleSubmit, control } = useForm({
    mode: 'onChange',
    defaultValues: {},
  })

  const [createPodcast, { loading }] = useMutation(CREATE_PODCAST, {
    onCompleted: () => {
      history.push('/podcasts')
    },
  })

  return <Box>add</Box>
}
