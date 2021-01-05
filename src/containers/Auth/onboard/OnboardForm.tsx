import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import { UPSERT_PROFILE } from '../../../graphql/mutations'
import { TextAreaField } from '../../../components/fields/TextAreaField'
import { ImageUploadField } from '../../../components/fields/ImageUploadField'

export const OnboardForm = () => {
  const history = useHistory()
  const { handleSubmit, control } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      bio: '',
    },
  })

  const [imageUrl, setImageUrl] = useState('')

  const [upsertProfile, { loading }] = useMutation(UPSERT_PROFILE, {
    onCompleted: () => history.push('/dashboard'),
  })

  const onSubmit = (formValues: FormValues) => {
    upsertProfile({
      variables: {
        input: {
          ...formValues,
          profilePic: imageUrl,
        },
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ImageUploadField
        label="Add a profile picture"
        setImageUrl={setImageUrl}
      />
      <TextAreaField
        name="bio"
        label="Intoduce yourself..."
        control={control}
      />
      <Button mr=".5rem" onClick={() => history.push('/dashboard')}>
        Save for later
      </Button>
      <Button
        type="submit"
        isLoading={loading}
        loadingText="Loading"
        colorScheme="teal"
      >
        Next
      </Button>
    </form>
  )
}

type FormValues = {
  bio: string
}
