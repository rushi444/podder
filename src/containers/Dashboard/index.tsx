import React from 'react'

import { Podcasts } from './Podcasts'
import { WelcomeHeader } from './WelcomeHeader'

export const Dashboard = () => {

  return (
    <div>
      <WelcomeHeader />
      <Podcasts />
    </div>
  )
}
