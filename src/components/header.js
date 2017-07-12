import R from 'ramda'
import React from 'react'
import { Link } from 'react-router-dom'

import AppBar   from 'material-ui/AppBar'
import Drawer   from 'material-ui/Drawer'
import Menu     from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'

import ConstantMenu from '../constants/menu.js'
import Grid         from './shared-components/grid.js'
import TitleImg     from '../img/lib_menu.png'

import Logo         from '../containers/public/logo'

const MAP_IMG = 'https://s3.amazonaws.com/lib-wp-library-assets/wp-content/uploads/2017/04/24110247/libmap_v1.jpg'

const DRAWER_CONTAINER_STYLE = {
  width: '100%',
  top: '64px',
  transform: 'translate(-100%, 0px)',
  paddingBottom: '64px',
  backgroundColor: 'transparent'
}

const MENU_STYLE = {
  fontSize   : '30px',
  fontWeight : 'bold',
  color      : 'white',
  minHeight  : '60px',
  lineHeight : '58px',
  fontFamily : 'AN-Bold'
}

const SUB_MENU_STYLE = {
  fontSize: '12px',
  lineHeight: '24px',
  minHeight: '0',
  color: 'white',
  padding: 0,
  fontFamily : 'AN-Reg'
}


const APP_BAR_STYLE = {
  position: 'fixed',
  top: '0',
  backgroundColor: 'rgba(4,5,8,0.5)'
}

const _buyTicketIcon = onClickFn => (
  <div className="_button-wrapper" onClick={onClickFn}>
    <Link to='/ticket/' className='btn'>TICKETS</Link>
  </div>
)


const _renderMenuSection = onClickCloseDrawer => (
  <section className='row row-wrapper'>
    <div style={{zIndex: '10', paddingTop: '50px'}}>
      <div className='small-14  medium-12 columns'>
        {
          R.map( item => item.path ?
            (
              <Link
                key={item.text}
                to={item.path}
                onTouchTap={onClickCloseDrawer}
              >
                <MenuItem
                  innerDivStyle={{padding: '0'}}
                  style={MENU_STYLE}
                  primaryText={item.text}
                />
              </Link>
            )
          : (
              <a key={item.text} href={item.url} target={item.newTab === false ? '' : '_blank'}>
                <MenuItem
                  innerDivStyle={{padding: '0'}}
                  style={MENU_STYLE}
                  primaryText={item.text}
                />
              </a>
            )
          )(ConstantMenu.main)
        }
      </div>
    </div>
  </section>
)


const _renderMapSection = () => (
  <img
    className='hide-for-medium'
    src={MAP_IMG}
  />
)


const _renderGeneralInfoMenu = onClickFn => item => item.path ? (
  <Link
    key={item.text}
    to={item.path}
    onTouchTap={onClickFn}
  >
    <MenuItem
      innerDivStyle={{padding: '0'}}
      style={SUB_MENU_STYLE}
      primaryText={item.text}
    />
  </Link>
  )
: (
  <a
    key={item.text}
    href={item.url ? item.url : item.mail}
    target={item.url ? '_blank' : null}
  >
      <MenuItem
        innerDivStyle={{padding: '0'}}
        style={SUB_MENU_STYLE}
        primaryText={item.text}
      />
    </a>
  )

const _renderGeneralInfo = onClickCloseDrawer => (
  <section className='row'>
    <div className='small-5 columns'>
      {
        R.map(
          _renderGeneralInfoMenu(onClickCloseDrawer)
        )(ConstantMenu.sub.left)
      }
    </div>
    <div className='small-9 columns'>
      {
        R.map(
          _renderGeneralInfoMenu(onClickCloseDrawer)
        )(ConstantMenu.sub.right)
      }
    </div>
  </section>
)


const _renderJoinParty = props => (
  <form onSubmit={props.submit} className='drawer-form'>
    <div className='row'>
      <input
        type='text'
        style={{fontFamily: 'AN-Reg'}}
        placeholder='YOUREMAIL@ADDRESS.COM'
        className='medium-7 columns'
      />
      <div className='medium-1 columns column-height'/>
      <input
        type='submit'
        className='medium-5 columns btn'
        value='JOIN THE PARTY'
      />
      <div className='medium-1 columns column-height'/>
    </div>
  </form>
)


const _renderTitle = (onClickFn, img) => (
  <Link to='/' onClick={onClickFn}><img src={'/assets/' + img}/></Link>
)

const Header = props => {
  return (
    <div>
      <AppBar
        onLeftIconButtonTouchTap={props.onClickToggleDrawer}
        title={_renderTitle(props.onClickCloseDrawer, TitleImg)}
        style={APP_BAR_STYLE}
        iconElementRight={_buyTicketIcon(props.onClickCloseDrawer)}
        className='header-wrapper'
      />
      {/*
      <div className='header-logo flex-center hide-for-small-only'>
        <Logo />
      </div>
      */}
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
              { _renderGeneralInfo(props.onClickCloseDrawer) }
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
