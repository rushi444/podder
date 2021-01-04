import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuthData } from '../../hooks/useAuthData'

export const Dashboard = () => {
  const history = useHistory()
  const { user, getUser } = useAuthData()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) history.push('/login')
    if (!user?.id) getUser()
  }, [history, localStorage, user])

  return <div>dashhh</div>
}
