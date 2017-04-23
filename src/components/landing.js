import R                        from 'ramda'
import React, { Component }     from 'react'
import { connect }              from 'react-redux'
import { Link }                 from 'react-router-dom'
import {
  mapIndexed,
  notEmpty,
  isSafari,
  getRandomIntInclusive
} from '../lib/helpers'
var Packery = require('react-packery-component')(React)

import Logo from '../containers/public/logo'
import cssColors from '../constants/cssColors'

import { Lineup } from '../actions/index'

const packeryOptions = {
  transitionDuration: '0.8s'
}

const _renderFirstRow = item => (
  <div key={item.ID} className=''>
    <section className=''>
      <div className='row'>
        <div className="columns section-header large-6 large-push-4 medium-14 small-14">
          <div className="logo" id="logo">
            <div
              className="logobox animated fadeIn"
              id="logobox"
              data-tilt data-tilt-reset="false"
              data-tilt-perspective="2000"
              >
              <Logo />
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className="section-main columns small-12 large-push-1">
          <Packery
            className={'lineup-list'} // default ''
            elementType={'div'} // default 'div'
            options={packeryOptions} // default {}
            disableImagesLoaded={false} // default false
            >
              {
                R.map( lineupItem => {
                  return(
                    <div key={lineupItem.ID} className={'artist-name '}>
                      <span className={
                        R.join( ' ', [
                          'name',
                          isSafari ? cssColors.colors[getRandomIntInclusive()] + '_safari' : cssColors.colors[getRandomIntInclusive()]]
                        )
                      }>{lineupItem.name}</span>
                      {
                        lineupItem.link.post_name ?
                          <Link className='bio-link animated fadeIn' to={'/vibe?artist=' + lineupItem.link.post_name}>
                            <span><i className='fa fa-drivers-license-o fa-md' /> BIO</span>
                          </Link>
                        : null
                      }
                      <span className='separator'>/</span>
                    </div>
                  )
                })(item)
              }
            </Packery>
        </div>
      </div>
      <div className='row parallax show-for-large'>
        <div className='music-icon large-push-8' />
      </div>

      {/* <!-- CTA/FORM BLOCK --> */}
      {/* <div className="columns large-5 medium-14 small-14">
        <div className="copy-hero">
          <div className='row'>
            <div className='large-9 column'>
              <h1 className="pink_on yne-activated">{item.title}</h1>
            </div>
          </div>
          <div className="copy">
            <p className="text bc-activated">{item.description}</p>
            <div>
              <button className='btn-underline default'>
                <Link to='/ticket' >{item.link_text}</Link>
                <hr/>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </section>

  </div>
)

const _renderSecondRow = item => {
  if (item) {
    return(
      <div key={item.ID} className='row featured'>
        <section className='section-content section-main large-14 column'>
          <div className='small-14 large-14 column'>
            <div className='hide-for-small-only large-2 column column-height' />
            <div className='small-14 large-10 column'>
              <div className='row ten-row'>
                <div className='small-full large-4 column title-col'>
                  <div className='vertical-centered-title'>
                    <h1 className='section-title'> {item.title} </h1>
                  </div>
                  <button className='btn-underline default'>
                    <Link to='/lineup' >{item.link_text}</Link>
                    <hr/>
                  </button>
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
          <button className='btn-underline default'>
            <a href={item.link}>{item.link_text}</a>
            <hr/>
          </button>
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
            <button className='btn-underline default'>
              <a
                href={item.link}
                target={item.title === 'MERCH' ? '_blank' : ''}
              >
                {item.link_text}
              </a>
              <hr className='pink'/>
            </button>
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
        <div className='section-main'>
          <div className='row parallax show-for-large'>
            <div className='art-icon large-push-12 column' />
          </div>
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
            <div className='row parallax show-for-large'>
              <div className='ideas-icon large-push-9 column' />
            </div>
            {_renderLeftPost(list[0])}
            {_renderRightPost(list[1])}
          </div>
        </div>
      </div>
    )

  }
}

// const HomeSections = (props) => {
class HomeContainer extends Component {

  componentDidMount() {
    if (R.isEmpty(this.props.lineup)) {
      this.props.fetchLineup()
    }
  }

  render(){
    const data    = this.props.data
    const lineup  = this.props.lineup
    return notEmpty(data) ?
    (
      <div style={{color: 'white'}}>
        {_renderFirstRow(lineup)}
        {_renderTwoColumns()([data[2], data[3]])}
        {_renderTwoColumns(true)([data[4], data[5]])}
      </div>
    )

    : null

  }
}

const mapStateToProps = (state, props) => ({
  lineup: state.lineup
})

const mapDispatchToProps = (dispatch, getState) => ({
  fetchLineup: () => dispatch(Lineup.fetchLineup())
})


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
