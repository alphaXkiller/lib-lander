import R                   from 'ramda'
import React               from 'react'
import { Route, Redirect } from 'react-router-dom'

import Home from './containers/public/home.js'

const RouteFunctor = [
  { path: '/', component: Home, exact: true},
]


const RouteActor = route => {
  return (
    <Route 
      path={route.path} 
      exact={route.exact} 
      render={ props => (
        <route.component {...props} routes={route.sub_routes}/>
      )}
    />
  )
}

export {
  RouteFunctor,
  RouteActor
}
