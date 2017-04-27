import R                        from 'ramda'
import React, { Component }     from 'react'
import { connect }              from 'react-redux'
import { BrowserRouter, Link, Switch} from 'react-router-dom'

import {
  RouteFunctor,
  RouteActor
} from './routes.js'
import Header from './components/header.js'
import Grid from './components/shared-components/grid.js'

import './style/main.scss'
import apeLogo from './img/ape-logo_32.png'
import wendohLogo from './img/wendoh_32.png'

require('smoothscroll-polyfill').polyfill()

const REDIRECT_PATH = [
  'amazonexclusive',
  'redbullexclusive',
  'partner'
]

const REDIRECT_LINK = 'https://www.ticketfly.com/purchase/event/1477134'

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

  componentWillMount() {
    const pathname = R.slice(1, Infinity, window.location.pathname)
    R.compose(
      R.when(
        R.contains(R.__, REDIRECT_PATH),
        () => window.location.replace(REDIRECT_LINK)
      ),
      R.toLower,
      R.slice(1, Infinity)
    )(window.location.pathname)
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
              href="https://www.youtube.com/lifeisbeautifulfest"
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

            {/* <div className="green-radial" />
      			<div className="blue-radial" /> */}
          </div>
          {/* <!-- FOOTER --> */}
          <footer className='crowd'>
            <div className="large-12 column producers">
              <img src={`/assets/${apeLogo}`} /> <img src={`/assets/${wendohLogo}`} />
            </div>
            <div className="large-7 small-10 column footer-content">
              <h1>Life is beautiful</h1>
            </div>
            <div className="dj">
              <div className='row'>
                <div className='small-14 column'>
                  <p className='date'>SEPT<strong>.</strong> 22 <strong>—</strong> 24, 2017</p>
                  <div className="_button-wrapper">
                    <a href='https://www.ticketfly.com/purchase/event/1318649' target='_blank' className='btn cta2-activated'>TICKETS</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="libfooter desktop hide-for-small-only">
        			<ul>
        				<li><a href="mailto:LIBPress@rrpartners.com?subject=Life%20Is%20Beautiful%20Press%20Inquiry">Press</a></li>
        				<li>|</li>
        				<li><Link to='/sponsors'>Sponsors</Link></li>
        				<li>|</li>
        				<li><a href="/policy.html" rel="nofollow" target="_blank">Policy</a></li>
        			</ul>
        			<span className="copyright">© 2017 Life Is Beautiful. All Rights Reserved.</span>
        		</div>
          </footer>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state, props)=> ({})


const mapDispatchToProps = (dispatch, getState)=> ({})


export default connect(mapStateToProps, mapDispatchToProps)(App)
