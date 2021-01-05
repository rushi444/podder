import React from 'react'

import { AddPodcastForm } from './AddPodcastForm'
import { FormWrapper } from '../../components/FormWrapper'

export const AddPodcast = () => {
  return (
    <FormWrapper title="Add a podcast...">
      <AddPodcastForm />
    </FormWrapper>
  )
}
