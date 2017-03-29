import R from 'ramda'
import React from 'react'

const Grid = ({zIndex} = {}) => (
  <div 
    className='large-up-7 gridSet' 
    style={ R.isNil(zIndex )? {} : {zIndex}}
  >
    {
      R.times( id => (
        <div key={id} className='columns'><div className='hrv'/></div>
      ), 7 )
    }
  </div>
)


export default Grid
