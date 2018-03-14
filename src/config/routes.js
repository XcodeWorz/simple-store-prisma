import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ProductsList from '../pages/ProductsList'

export default () => (
  <Switch>
    <Route exact path="/" component={ProductsList}/>
  </Switch>
)
