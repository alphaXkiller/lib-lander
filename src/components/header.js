import R from 'ramda'
import React from 'react'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'

const Header = props => {
  return (
    <div>
      <AppBar
        title={ 'Life is Beautiful' }

        onTouchTap={props.onClickOpenDrawer}
      />
      <Drawer
        docked={false}
        width={320}
        open={props.open_drawer}
        onRequestChange={props.onClickCloseDrawer}
      />
    </div>
  )
}

export default Header
