import R from 'ramda'
import React from 'react'

const Grid = (style_props) => (
  <div
    className='large-up-7 gridSet'
    style={ R.isNil(style_props)? {} : style_props}
  >
    {
      R.times( id => (
        <div key={id} className='columns'><div className='hrv'/></div>
      ), 7 )
    }
  </div>
)


export default Grid
