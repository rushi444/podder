import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Auth } from '../containers/Auth'
import { Layout } from '../containers/Layout'

export const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
