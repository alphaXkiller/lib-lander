import R                                from 'ramda'
import React                            from 'react'
import ReactDom                         from 'react-dom'
import { Provider }                     from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Thunk                            from 'redux-thunk'

import Reducers from './reducers/index.js'
import App      from './app.js'


const store = createStore(
  Reducers,
  applyMiddleware(Thunk)
)

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

