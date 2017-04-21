import R                        from 'ramda'
import React, { Component }     from 'react'
import { connect }              from 'react-redux'
import { BrowserRouter, Switch} from 'react-router-dom'

import {
  RouteFunctor,
  RouteActor
} from './routes.js'
import Header from './components/header.js'
import Grid from './components/shared-components/grid.js'

import './style/main.scss'
require('smoothscroll-polyfill').polyfill()

const _openDrawer = () => document.getElementById('drawer')
  .getElementsByTagName('div')[2]
  .style
  .transform = 'translate(0, 0)'


const _closeDrawer = () => document.getElementById('drawer')
  .getElementsByTagName('div')[2]
  .style
  .transform = 'translate(-100%, 0)'


const _toggleDrawer = R.ifElse(
  R.equals(true),
  () => _openDrawer(),
  () => _closeDrawer()
)


class App extends Component {
  constructor() {
    super()
    this.state = {
      open_drawer: false,
      marginT: ''
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    let scrollY = window.scrollY,
      innerHeight = window.innerHeight,
      docHeight = document.body.clientHeight,
      parallax = document.querySelectorAll(".parallax"),
      crowd = document.querySelector('.crowd'),
      dj = document.querySelector('.dj'),
      speed = 0.15,
      scrolling = (scrollY) / ( docHeight - (innerHeight) ),
      scrollingPerc = (scrolling * 100);


    [].slice.call(parallax).map( (el,i) => {
      let windowYOffset = window.pageYOffset,
        elBackgrounPos = (windowYOffset * speed) + "px";
      el.style.marginTop = '-' + elBackgrounPos;
      el.style.marginBottom = elBackgrounPos;
    })


    if (scrollingPerc >= 90) {
      dj.style.backgroundPosition = 'center ' + (docHeight - (scrollY + innerHeight)) + 'px';

    } else if (scrollingPerc >= 50) {
      crowd.style.opacity = 1
    } else {
      dj.style.backgroundPosition = 'center 300px';
    }

    this.setState({
      marginT: scrollingPerc
    })

  }

  submit = e => {

  }


  onClickToggleDrawer = e => {
    this.setState({open_drawer: !this.state.open_drawer}, () =>
      _toggleDrawer(this.state.open_drawer)
    )
  }


  onClickCloseDrawer = (open, reason) => this.setState({
    open_drawer: false}, () => _closeDrawer()
  )


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

          {/* SCROLLBAR */}
          <div className='scrollbar'>
            <div
              id='bar'
              className='bar'
              style={{transform: 'translate3d(0,' + this.state.marginT + '%, 0)'}}
              >
              <div className='scroller'id='scroller'> Scroll Down </div>
            </div>
          </div>
          {/* SCROLLBAR */}

          {/* <!-- SOCIAL SIDEBAR --> */}
    			<div className="sidebar sbdesktop">
    				{/* <!-- SNAPS! --> */}
            <a 
              href="http://www.snapchat.com/add/LIBeautifulFest/" 
              target='_blank'
              className='social_icon'
            >
              <div className="snapchat icon_out"></div>
            </a>

    				{/* <!-- TWEETS! --> */}
            <a 
              href="https://twitter.com/lifeisbeautiful/" 
              target='_blank'
              className='social_icon'
            >
              <div className="twitter icon_out"></div>
            </a>

    				{/* <!-- FB --> */}
            <a 
              href="https://www.facebook.com/LifeIsBeautifulFest/" 
              target='_blank'
              className='social_icon'
            >
    				  <div className="facebook icon_out"></div>
            </a>

    				{/* <!-- INSTA! --> */}
            <a 
              href="https://www.instagram.com/lifeisbeautiful/" 
              target='_blank'
              className='social_icon'
            >
    					<div className="instagram icon_out"></div>
            </a>

    				{/* <!-- YOUTUBE --> */}
            <a 
              href="https://www.youtube.com/user/LifeIsBeauitful" 
              target='_blank'
              className='social_icon'
            >
    					<div className="youtube icon_out"></div>
            </a>
    			</div>
    			{/* <!-- SOCIAL SIDEBAR --> */}

          <div className='row row-wrapper'>

            {/* <!-- GRID LINES --> */}
            { Grid(null, 'content-wrapper') }
            {/* <!-- GRID LINES --> */}

            <Switch>
              {
                RouteFunctor.map( (route, key) => (
                  <RouteActor key={key} {...route} />
                ))
              }
            </Switch>

            <div className="green-radial" />
      			<div className="blue-radial" />
          </div>
          {/* <!-- FOOTER --> */}
          <footer className='crowd'>
            <div className="large-7 small-10 column footer-content">
              <h1>Life is beautiful</h1>
            </div>
            <div className="dj" />
          </footer>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state, props)=> ({})


const mapDispatchToProps = (dispatch, getState)=> ({})


export default connect(mapStateToProps, mapDispatchToProps)(App)
