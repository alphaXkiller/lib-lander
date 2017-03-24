import R from 'ramda'
import React from 'react'
import { Link } from 'react-router-dom'

import AppBar   from 'material-ui/AppBar'
import Drawer   from 'material-ui/Drawer'
import Menu     from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

const MAP_IMAGE = 'https://snazzy-maps-cdn.azureedge.net/assets/38-shades-of-grey.png?v=20170324050112'

const DRAWER_CONTAINER_STYLE = {
  width: '100%', 
  top: '64px', 
  transform: 'translate(-100%, 0px)', 
  paddingBottom: '64px' 
}

const _buyTicketIcon = () => (
  <div>Buy Ticket</div>
)


const _renderMenuSection = () => (
  <section className='row align-middle'>
    <div className='small-6  medium-7 columns'>
      <Link to='/'><MenuItem primaryText='HOME' /></Link>
      <Link to=''><MenuItem primaryText='LINEUP' /></Link>
      <Link to=''><MenuItem primaryText='VIBE' /></Link>
      <Link to=''><MenuItem primaryText='NEWS' /></Link>
      <Link to=''><MenuItem primaryText='PLANNING' /></Link>
      <Link to=''><MenuItem primaryText='MERCH' /></Link>
    </div>
    <div className='small-1 columns hide-for-medium'>
      <i className='fa fa-snapchat-ghost' />
      <i className='fa fa-twitter' />
      <i className='fa fa-book' />
      <i className='fa fa-instagram' />
      <i className='fa fa-youtube-play' />
    </div>
  </section>
)


const _renderMapSection = () => (
  <img 
    className='hide-for-medium'
    src={MAP_IMAGE}
  />
)


const _renderGeneralInfo = props => (
  <section className='row'>
    <div className='small-3 columns'>
      <Link to=''><MenuItem primaryText='ABOUT' /></Link>
      <Link to=''><MenuItem primaryText='HISTORY' /></Link>
      <Link to=''><MenuItem primaryText='CONTACT' /></Link>
      <Link to=''><MenuItem primaryText='MEDIA' /></Link>
      <Link to=''><MenuItem primaryText='IMPACT' /></Link>
      <Link to=''><MenuItem primaryText='FAQ' /></Link>
    </div>
    <div className='small-4 columns'>
      <Link to=''><MenuItem primaryText='PARTNERS' /></Link>
      <Link to=''><MenuItem primaryText='VOLUNTEERS' /></Link>
      <Link to=''><MenuItem primaryText='JOBS' /></Link>
      <Link to=''><MenuItem primaryText='INTERNSHIPS' /></Link>
      <Link to=''><MenuItem primaryText='CHARITY' /></Link>
      <Link to=''><MenuItem primaryText='LEGAL' /></Link>
    </div>
  </section>
)


const _renderJoinParty = props => (
  <form className='row' onSubmit={props.submit}>
    <div className='input-group'>
      <input 
        type='text' 
        placeholder='YOUREMAIL@ADDRESS.COM' 
        className='input-group-field'
      />
      <input type='submit' className='input-group-button' value='JOIN THE PARTY' />
    </div>
  </form>
)

const Header = props => {
  return (
    <div>
      <AppBar 
        onTouchTap={props.onClickToggleDrawer}
        title='LIFE IS BEAUTIFUL'
        iconElementRight={_buyTicketIcon()}
      />
      <div id='drawer'>
        <Drawer
          docked={false}
          open={props.open_drawer}
          overlayStyle={{ top: '64px' }}
          containerStyle={DRAWER_CONTAINER_STYLE}
          onRequestChange={props.onClickCloseDrawer}
        >
          <div className='row'>
            <div className='small-12 medium-3'>
              { _renderMenuSection() }
              { _renderMapSection() }
              { _renderGeneralInfo() }
              { _renderJoinParty(props.submit) }
              <p>
                <i className='fa fa-copyright' />
                LIFE IS BEAUTIFUL. ALL RIGHTS RESERVED.
              </p>
            </div>
            <div className='medium-4 hide-for-small-only'>
              <div>
                <img src={MAP_IMAGE} />
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  )
}

export default Header
