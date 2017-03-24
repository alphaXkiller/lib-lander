import R                    from 'ramda'
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { BrowserRouter}     from 'react-router-dom'

import { 
  RouteFunctor, 
  RouteActor 
} from './routes.js'
import Header from './components/header.js'

import './style/main.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      open_drawer: false
    }
  }


  submit = e => {

  }


  onClickToggleDrawer = e => {
    this.setState({open_drawer: !this.state.open_drawer}, () => {
      if (this.state.open_drawer)
        document.getElementById('drawer')
          .getElementsByTagName('div')[2]
          .style
          .transform = 'translate(0, 0)'
      else
        document.getElementById('drawer')
          .getElementsByTagName('div')[2]
          .style
          .transform = 'translate(-100%, 0)'
    })
  }


  onClickCloseDrawer = (open, reason) => {
    this.setState({open_drawer: false})
  }


  render() {
    return (
      <BrowserRouter>
        <div>
          {
            Header({
              open_drawer         : this.state.open_drawer,
              submit              : this.submit,
              onClickToggleDrawer : this.onClickToggleDrawer,
              onClickCloseDrawer  : this.onClickCloseDrawer
            })
          }
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
