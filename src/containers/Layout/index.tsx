import React, { FC, ReactNode } from 'react'

import { Navbar } from './Navbar'

type Props = {
  children?: ReactNode
}

export const Layout: FC = ({ children }: Props) => {
  return (
    <div style={{ width: '100%', height: '100%'}}>
      <Navbar />
      {children}
    </div>
  )
}
