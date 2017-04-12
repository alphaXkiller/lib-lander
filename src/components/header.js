import R from 'ramda'
import React from 'react'
import { Link } from 'react-router-dom'

import AppBar   from 'material-ui/AppBar'
import Drawer   from 'material-ui/Drawer'
import Menu     from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'

import ConstantMenu from '../constants/menu.js'
import Grid from './shared-components/grid.js'

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
  color: 'white',
  padding: 0
}


const APP_BAR_STYLE = {
  position: 'fixed',
  top: '0',
  backgroundColor: 'rgba(4,5,8,0.5)'
}

const _buyTicketIcon = () => (
  <div className="_button-wrapper">
    <a href="#" className="btn cta2-activated">Buy Tickets</a>
  </div>
)


const _renderMenuSection = onClickCloseDrawer => (
  <section className='row row-wrapper'>
    <div style={{zIndex: '10', paddingTop: '50px'}}>
      <div className='small-14  medium-12 columns'>
        {
          R.map( item => (
            <Link
              key={item.text}
              to={item.path}
              onTouchTap={onClickCloseDrawer}
            >
              <MenuItem
                innerDivStyle={{padding: '0'}}
                style={{
                  fontSize   : '30px',
                  fontWeight : 'bold',
                  color      : 'white',
                  minHeight  : '60px'
                }}
                primaryText={item.text}
              />
            </Link>
          ))(ConstantMenu.main)
        }
      </div>
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
    <div className='small-5 columns'>
      {
        R.map( item => (
          <Link
            key={item.text}
            to={item.path}
          >
            <MenuItem
              innerDivStyle={{padding: '0'}}
              style={SUB_MENU_STYLE}
              primaryText={item.text}
            />
          </Link>
        ))(ConstantMenu.sub.left)
      }
    </div>
    <div className='small-9 columns'>
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
  <form onSubmit={props.submit} className='drawer-form'>
    <div className='row'>
      <input
        type='text'
        placeholder='YOUREMAIL@ADDRESS.COM'
        className='medium-8 columns'
      />
      <input
        type='submit'
        className='medium-6 columns btn'
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
        title={<img src='../img/lib_menu.png' />}
        style={APP_BAR_STYLE}
        iconElementRight={_buyTicketIcon()}
      />
      <div id='drawer'>
        <Drawer
          docked={false}
          open={props.open_drawer}
          overlayStyle={{ top: '64px', backgroundColor: '#040508' }}
          containerStyle={DRAWER_CONTAINER_STYLE}
          onRequestChange={props.onClickCloseDrawer}
        >
          <div className='row row-wrapper'>
            { Grid({zIndex: 0}) }
            <div className='green-radial'/>
            <div className='medium-6 columns'>
              { _renderMenuSection(props.onClickCloseDrawer) }
              { _renderMapSection() }
              { _renderGeneralInfo() }
              { _renderJoinParty(props.submit) }
              <p style={{color: 'white', fontSize: '0.5em'}}>
                <i className='fa fa-copyright' />
                2017 LIFE IS BEAUTIFUL. ALL RIGHTS RESERVED.
              </p>
            </div>
            <div className='medium-8 columns show-for-medium map-container'>
              <div className='map-bg'/>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  )
}

export default Header
