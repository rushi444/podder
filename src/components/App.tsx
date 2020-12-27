import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Login } from '../containers/Auth/login'
import { Register } from '../containers/Auth/register'
import { Onboard } from '../containers/Auth/onboard'
import { Layout } from '../containers/Layout'

export const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/onboard" component={Onboard} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
