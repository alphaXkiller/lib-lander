import R                    from 'ramda'
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { BrowserRouter}     from 'react-router-dom'

import { 
  RouteFunctor, 
  RouteActor 
} from './routes.js'

import './style/main.scss'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {
            RouteFunctor.map( (route, key) => (
              <RouteActor key={key} {...route} />
            ))
          }
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state, props)=> ({})


const mapDispatchToProps = (dispatch, getState)=> ({})


export default connect(mapStateToProps, mapDispatchToProps)(App)
