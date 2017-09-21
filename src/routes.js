import R                   from 'ramda'
import Qs                  from 'qs'
import React               from 'react'
import { Route, Redirect } from 'react-router-dom'

import Home     from './containers/public/home.js'
import Lineup   from './containers/public/lineup.js'
import Vibe     from './containers/public/vibe.js'
import NotFound from './containers/public/404.js'
import Planning from './containers/public/planning.js'
import News     from './containers/public/news.js'
import Post     from './containers/public/newsPost.js'
import Ticket   from './containers/public/ticket.js'
import Page     from './containers/public/page.js'
import Sponsors from './containers/public/sponsors.js'
import Neighborhood from './containers/public/neighborhood.js'

const INDEX_AFTER_QUESTION_MARK = 1

const _getQueryFromSearch = R.compose(
  R.when(R.isEmpty, R.always({})),
  Qs.parse,
  R.slice(INDEX_AFTER_QUESTION_MARK, Infinity)
)

const RouteFunctor = [
  { path: '/', component: Home, exact: true},
  { path: '/vibe', component: Vibe },
  { path: '/planning', component: Planning },
  { path: '/neighborhood', component: Neighborhood },
  { path: '/news/:slug', component: Post },
  { path: '/news', component: News },
  { path: '/ticket', component: Ticket },
  { path: '/tickets', component: Ticket },
  { path: '/sponsors', component: Sponsors },
  { path: '/:slug', component: Page },
  { component: NotFound }
]


const RouteActor = route => {
  if (route.external_link) {
    window.location.href = route.external_link
    return <Route path={route.path}/>
  }

  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={ props => {
        const query = _getQueryFromSearch(props.location.search)
        const _props = R.merge({ query }, props)

        props.history.listen(() => window.scroll(0, 0))

        return <route.component {..._props} routes={route.sub_routes}/>
      }}
    />
  )
}

export {
  RouteFunctor,
  RouteActor
}
