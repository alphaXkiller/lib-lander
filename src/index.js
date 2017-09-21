import R                                from 'ramda'
import React                            from 'react'
import ReactDom                         from 'react-dom'
import { Provider }                     from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Thunk                            from 'redux-thunk'
import MuiThemeProvider                 from 'material-ui/styles/MuiThemeProvider'
import ReactTouchTap                    from 'react-tap-event-plugin'

import Api      from './lib/restful.js'
import Reducers from './reducers/index.js'
import App      from './app.js'

ReactTouchTap()

const store = createStore(
  Reducers,
  applyMiddleware(Thunk)
)

Api({method: 'get', path: 'external_link'})
  .then(R.prop('data'))

  .then(R.find(R.propEq('path', R.toLower(window.location.pathname))))

  .then(R.ifElse(
    R.complement(R.isNil),
    obj => window.location.href = obj.external_link,
    () => ReactDom.render(
      <Provider store={store}>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </Provider>,
      document.getElementById('app')
    )
  ))
