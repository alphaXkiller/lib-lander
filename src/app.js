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
require('smoothscroll-polyfill').polyfill()
8

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

  handleScroll = (e) =>{
    let scrollY = window.scrollY;
    let innerHeight = window.innerHeight;
    let docHeight = document.body.clientHeight;

    let scrolling = (scrollY) / (docHeight - (innerHeight) )
    let scrollingPerc = Math.round(scrolling*100)

    this.setState({
      marginT: scrollingPerc
    })

    // console.log(scrolling)

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
              style={{transform: 'translateY(' + this.state.marginT + '%)'}}
              >
              <div className='scroller'id='scroller'> Scroll Down </div>
            </div>
          </div>
          {/* SCROLLBAR */}

          {/* <!-- SOCIAL SIDEBAR --> */}
    			<div className="sidebar sbdesktop">
    				{/* <!-- SNAPS! --> */}
    				<div className="social_icon">
    					<a href="http://www.snapchat.com/add/LIBeautifulFest/"></a>
    					<div className="snapchat icon_out"></div>
    					<div className="snapchat icon_over"></div>
    				</div>

    				{/* <!-- TWEETS! --> */}
    				<div className="social_icon">
    					<a href="https://twitter.com/lifeisbeautiful/"></a>
    					<div className="twitter icon_out"></div>
    					<div className="twitter icon_over"></div>
    				</div>

    				{/* <!-- FB --> */}
    				<div className="social_icon">
    					<a href="https://www.facebook.com/LifeIsBeautifulFest/"></a>
    					<div className="facebook icon_out"></div>
    					<div className="facebook icon_over"></div>
    				</div>

    				{/* <!-- INSTA! --> */}
    				<div className="social_icon">
    					<a href="https://www.instagram.com/lifeisbeautiful/"></a>
    					<div className="instagram icon_out"></div>
    					<div className="instagram icon_over"></div>
    				</div>

    				{/* <!-- YOUTUBE --> */}
    				<div className="social_icon">
    					<a href="https://www.youtube.com/user/LifeIsBeauitful"></a>
    					<div className="youtube icon_out"></div>
    					<div className="youtube icon_over"></div>
    				</div>
    			</div>
    			{/* <!-- SOCIAL SIDEBAR --> */}

          <div className='row row-wrapper'>

            {/* <!-- GRID LINES --> */}
            <div className="large-up-7 gridSet">
              <div className="columns"><div className='hrv' /></div>
              <div className="columns"><div className='hrv' /></div>
              <div className="columns"><div className='hrv' /></div>
              <div className="columns"><div className='hrv' /></div>
              <div className="columns"><div className='hrv' /></div>
              <div className="columns"><div className='hrv' /></div>
              <div className="columns"><div className='hrv' /></div>
            </div>
            {/* <!-- GRID LINES --> */}

            {
              RouteFunctor.map( (route, key) => (
                <RouteActor key={key} {...route} />
              ))
            }
            
            <div className="green-radial" />
      			<div className="blue-radial" />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state, props)=> ({})


const mapDispatchToProps = (dispatch, getState)=> ({})


export default connect(mapStateToProps, mapDispatchToProps)(App)
