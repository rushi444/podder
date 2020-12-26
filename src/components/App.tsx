import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Register } from '../containers/Auth/register'
import { Layout } from '../containers/Layout'

export const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route exact path="/signup" component={Register} />
          <Route exact path='/signin' render={() => <div>Sign in page</div>} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
