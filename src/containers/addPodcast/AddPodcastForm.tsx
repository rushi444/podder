import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { CREATE_PODCAST } from '../../graphql/mutations'
import { InputField } from '../../components/fields/InputField'
import { ImageUploadField } from '../../components/fields/ImageUploadField'
import { Button } from '@chakra-ui/react'

export const AddPodcastForm = () => {
  const history = useHistory()
  const { handleSubmit, control } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      info: '',
      podcastLink: '',
    },
  })

  const [imageUrl, setImageUrl] = useState('')

  const [createPodcast, { loading }] = useMutation(CREATE_PODCAST, {
    onCompleted: () => {
      history.push('/podcasts')
    },
  })

  const onSubmit = (formValues: FormValues) => {
    createPodcast({ variables: { input: { ...formValues, imageUrl } } })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ImageUploadField label="Logo" setImageUrl={setImageUrl} />
      <InputField
        name="name"
        label="Podcast Name"
        control={control}
        rules={{ required: 'Required!' }}
      />
      <InputField
        name="info"
        label="What's this podcast about?"
        control={control}
      />
      <InputField
        name="podcastLink"
        label="Link to podcast"
        control={control}
        rules={{ required: 'Required!' }}
      />
      <Button
        type="submit"
        isLoading={loading}
        loadingText="Loading"
        colorScheme="teal"
      >
        Create Podcast
      </Button>
    </form>
  )
}

type FormValues = {
  name: string
  info: string
  podcastLink: string
}
