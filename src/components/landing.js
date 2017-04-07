import R from 'ramda'
import React, { Component } from 'react'
import { mapIndexed } from '../lib/helpers'

import Logo from '../containers/public/logo'


const _renderFirstPost = item => (
  <section key={item.ID} className='section-content'>
    <div className="columns large-8 medium-14">
      <div className="logo" id="logo">
        <div
          className="logobox"
          id="logobox"
          data-tilt data-tilt-reset="false"
          data-tilt-perspective="2000"
          >
          <Logo />
        </div>
      </div>
    </div>

    {/* <!-- CTA/FORM BLOCK --> */}
    <div className="columns large-6 medium-14">
      <div className="copy_form">
        <div className='row'>
          <div className='large-9 column'>
            <h1 className="pink_on yne-activated">{item.title}</h1>
          </div>
        </div>
        <div className="copy">
          {/*<p className="date bc-activated">September 22&ndash;24, 2017</p>*/}
          <p className="text bc-activated">{item.description}</p>
        </div>
      </div>
    </div>
  </section>
)
const _renderSecondPost = item => (
  <section key={item.ID} className='section-content large-14 column'>
    <div className='large-14 column'>
      <div className='large-2 column column-height' />
      <div className='large-10 column'>
        <div className='row ten-row'>
          <div className='large-4 column title-col'>
            <div className='vertical-centered-title'>
              <h1 className='section-title'> {item.title} </h1>
            </div>
          </div>
          <div className='large-8 column'>
            <div>
              <img src={item.image} />
            </div>
          </div>
        </div>
      </div>
      <div className='large-2 column column-height' />
    </div>
  </section>
)

const obj = {
  0: _renderFirstPost,
  1: _renderSecondPost
}

const landingData = mapIndexed( (item, index) => {
  if (obj[index])
    return obj[index](item)
})

const HomeContainer = (props) => {
  return(
    <div style={{color: 'white'}}>
      {landingData(props.data)}
    </div>
  )
}


export default HomeContainer
