import React from 'react'
import Results from '../../pages/Results'
import Poll from '../../pages/Poll'
import NoMatch from '../../pages/NoMatch'
import Home from '../../pages/Home'
import SignUp from '../../pages/SignUp'
import Login from '../../pages/Login'
import {Route, Switch} from 'react-router-dom'

const Content = () =>
  <div>
    <h1> Content </h1>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/poll/new' component={Poll} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/login' component={Login} />
      <Route path='/poll/:id/results' component={Results} />
      <Route path='/poll/:id' component={Poll} />
      <Route component={NoMatch} />
    </Switch>
  </div>

export default Content