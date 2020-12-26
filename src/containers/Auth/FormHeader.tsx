import React from 'react'

type Props = {
  children: string
}

export const FormHeader = ({ children }: Props) => (
  <span style={{ fontSize: '3rem', color: 'teal' }}>{children}</span>
)
