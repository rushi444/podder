import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Login } from '../containers/Auth/login'
import { Register } from '../containers/Auth/register'
import { Onboard } from '../containers/Auth/onboard'
import { Layout } from '../containers/Layout'
import { Home } from '../containers/Home'
import { Dashboard } from '../containers/Dashboard'
import { Podcasts } from '../containers/Podcasts'
import { AddPodcast } from '../containers/AddPodcast'

export const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/onboard" component={Onboard} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/podcasts" component={Podcasts} />
          <Route exact path="/addPodcast" component={AddPodcast} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
