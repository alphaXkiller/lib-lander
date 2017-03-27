import R from 'ramda'
import React from 'react'
import { Link } from 'react-router-dom'

import AppBar   from 'material-ui/AppBar'
import Drawer   from 'material-ui/Drawer'
import Menu     from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

import ConstantMenu from '../constants/menu.js'

const MAP_IMAGE = 'https://snazzy-maps-cdn.azureedge.net/assets/38-shades-of-grey.png?v=20170324050112'


const DRAWER_CONTAINER_STYLE = {
  width: '100%', 
  top: '64px', 
  transform: 'translate(-100%, 0px)', 
  paddingBottom: '64px',
  backgroundColor: 'transparent'
}


const SUB_MENU_STYLE = {
  fontSize: '12px',
  lineHeight: '24px',
  minHeight: '0',
  color: 'white'
}

const _buyTicketIcon = () => (
  <div>Buy Ticket</div>
)


const _renderMenuSection = onClickCloseDrawer => (
  <section className='row align-middle'>
    <div className='small-6  medium-7 columns'>
      {
        R.map( item => (
          <Link 
            key={item.text} 
            to={item.path}
            onTouchTap={onClickCloseDrawer}
          >
            <MenuItem 
              style={{
                fontSize   : '30px',
                fontWeight : 'bold',
                color      : 'white'
              }}
              primaryText={item.text} 
            />
          </Link>
        ))(ConstantMenu.main)
      }
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
      {
        R.map( item => (
          <Link 
            key={item.text}
            to={item.path}
          >
            <MenuItem 
              style={SUB_MENU_STYLE}
              primaryText={item.text} 
            />
          </Link>
        ))(ConstantMenu.sub.left)
      }
    </div>
    <div className='small-4 columns'>
      {
        R.map( item => (
          <Link 
            key={item.text}
            to={item.path}
          >
            <MenuItem 
              style={SUB_MENU_STYLE}
              primaryText={item.text} 
            />
          </Link>
        ))(ConstantMenu.sub.right)
      }
    </div>
  </section>
)


const _renderJoinParty = props => (
  <form onSubmit={props.submit}>
    <div className='row'>
      <input 
        type='text' 
        placeholder='YOUREMAIL@ADDRESS.COM' 
        className='small-4 columns'
      />
      <input 
        type='submit' 
        className='small-3 columns button' 
        value='JOIN THE PARTY' 
      />
    </div>
  </form>
)

const Header = props => {
  return (
    <div>
      <AppBar 
        onLeftIconButtonTouchTap={props.onClickToggleDrawer}
        title='LIFE IS BEAUTIFUL'
        style={{background: 'transparent'}}
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
          <div className='row row-wrapper'>
            <div className='medium-3 columns'>
              { _renderMenuSection(props.onClickCloseDrawer) }
              { _renderMapSection() }
              { _renderGeneralInfo() }
              { _renderJoinParty(props.submit) }
              <p style={{color: 'white'}}>
                <i className='fa fa-copyright' />
                LIFE IS BEAUTIFUL. ALL RIGHTS RESERVED.
              </p>
            </div>
            <div className='medium-4 columns hide-for-small-only'>
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
