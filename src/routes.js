import R                   from 'ramda'
import React               from 'react'
import { Route, Redirect } from 'react-router-dom'

import Home     from './containers/public/home.js'
import Lineup   from './containers/public/lineup.js'
import Vibe     from './containers/public/vibe.js'
import NotFound from './containers/public/404.js'
import Planning from './containers/public/planning.js'
import News     from './containers/public/news.js'
import Ticket   from './containers/public/ticket.js'

const RouteFunctor = [
  { path: '/', component: Home, exact: true},
  { path: '/lineup', component: Lineup },
  { path: '/vibe', component: Vibe },
  { path: '/planning', component: Planning },
  { path: '/news', component: News },
  { path: '/ticket', component: Ticket },
  { component: NotFound }
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
