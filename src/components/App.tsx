import React, { useState } from 'react'


import { gql, useQuery } from '@apollo/client'

import Hire from '../assets/undraw_Hire.svg'

const query = gql`
  query {
    hello
  }
`

export const App = () => {
  const [count, setCount] = useState(0)
  const { loading, error, data } = useQuery(query)

  if (loading) return <h3>Loading...</h3>
  // if (error) return <h3>{JSON.stringify(error)}</h3>

  return (
    <div className="App">
      <header className="App-header">
        <p>{data?.hello || error?.message} + vite + react!</p>
        <p>
          <button onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
        <img src={Hire} />
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
