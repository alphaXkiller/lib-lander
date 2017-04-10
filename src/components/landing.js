import R from 'ramda'
import React, { Component } from 'react'
import { mapIndexed, notEmpty } from '../lib/helpers'

import Logo from '../containers/public/logo'


const _renderFirstRow = item => (
  <div key={item.ID} className='row'>
    <section className='section-content'>
      <div className="columns large-8 medium-14 small-14">
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
      <div className="columns large-6 medium-14 small-14">
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
    <div className='music-note large-push-8' />
  </div>
)
const _renderSecondRow = item => {
  if (item) {
    return(
      <div key={item.ID} className='row featured'>
        <section className='section-content large-14 column'>
          <div className='small-14 large-14 column'>
            <div className='hide-for-small-only large-2 column column-height' />
            <div className='small-14 large-10 column'>
              <div className='row ten-row'>
                <div className='small-full large-4 column title-col'>
                  <div className='vertical-centered-title'>
                    <h1 className='section-title'> {item.title} </h1>
                  </div>
                </div>
                <div className='small-full large-8 column'>
                  <div>
                    <img src={item.image} />
                  </div>
                </div>
              </div>
            </div>
            <div className='large-2 column column-height' />
          </div>
        </section>
        {/* <div className='brush-icon large-push-8' /> */}
      </div>
    )
  } else { return null }
}

const _renderLeftPost = item => {
  if (item) {
    return(
      <div key={item.ID} className='large-6 column large-push-1 left-col six-row'>
        <div className='small-full large-4 column title-left-col'>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
        <div className='image'>
          <img src={item.image} />
        </div>
      </div>
    )
  }
}
const _renderRightPost = item => {
  if (item) {
    return(
      <div key={item.ID} className='large-6 column six-row'>
        <div className='right-col'>
          <div className='small-full large-4 column title-right-col'>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
          <div className='small-full large-4 column image-right-col'>
            <img src={item.image} />
          </div>
        </div>
      </div>
    )
  }
}

const _renderTwoColumns = is_last_row => list => {
  if (!is_last_row) {
    return(
      <div className='row'>
        <div className='section-content'>
          <div className='row'>
            {_renderLeftPost(list[0])}
            {_renderRightPost(list[1])}
          </div>
        </div>
      </div>
    )
  } else {
    return(
      <div className='row'>
        <div className='section-content'>
          <div className='row last-row'>
            {_renderLeftPost(list[0])}
            {_renderRightPost(list[1])}
          </div>
        </div>
      </div>
    )

  }
}

const HomeContainer = (props) => {

  return notEmpty(props.data) ?
   (
      <div style={{color: 'white'}}>
        {_renderFirstRow(props.data[0])}
        {_renderSecondRow(props.data[1])}
        {_renderTwoColumns()([props.data[2], props.data[3]])}
        {_renderTwoColumns(true)([props.data[4], props.data[5]])}
        <div style={{height: 500}}></div>
      </div>
    )

    : null
}


export default HomeContainer
