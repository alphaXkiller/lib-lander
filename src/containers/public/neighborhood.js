import R           from 'ramda'
import React, { Component }       from 'react'
import { connect } from 'react-redux'
import { Link }    from 'react-router-dom'

import { Neighborhood }         from '../../actions/index.js'
import { createMarkup } from '../../lib/helpers.js'


const _renderNewRow = neighbors_list => {
  const neighbors_left = neighbors_list[0]
  const neighbors_right = neighbors_list[1]

  return (
    <div key={neighbors_left.ID} className='row news-row neighbors-row'>
      <div className='large-7 column'>
        <h2 className='planning-title left-title'>
          <a href={neighbors_left.external_link} target='_blank'>{neighbors_left.title}</a>
        </h2>
        <div className='planning-img'><img src={neighbors_left.image} /></div>
        <div className='large-12 column end'>
          <p
            dangerouslySetInnerHTML={createMarkup(neighbors_left.excerpt)}
          />
          <button className='btn-underline default'>
            <a href={neighbors_left.external_link} target='_blank'>
              {neighbors_left.link_text}
            </a>
            <hr/>
          </button>
        </div>
      </div>
      {
        neighbors_right ?
          <div key={neighbors_right.ID} className='large-7 column'>
            <h2 className='planning-title'>
              <a href={neighbors_right.external_link} target='_blank'>{neighbors_right.title}</a>
            </h2>
            <div className='planning-img'><img src={neighbors_right.image} /></div>
            <div className='large-12 column end'>
              <p
                dangerouslySetInnerHTML={createMarkup(neighbors_right.excerpt)}
              />
              <button className='btn-underline default'>
                <a href={neighbors_right.external_link} target='_blank'>
                  {neighbors_right.link_text}
                </a>
                <hr className='pink'/>
              </button>
            </div>
          </div>
        : null
      }

    </div>
  )
}

class neighborsPage extends Component {
  componentDidMount() {
    this.props.fetchneighbors()
  }


  render() {
    return (
      <div className='content'>
        <div className='row align-center'>
          <div className='large-2 column column-height' />
          <div className='small-14 large-12 large-pull-1 column align-center'>
            <div className='row page-title' style={{paddingBottom: 0}}>
              <div className='large-14 column'>
                <h1>neighborhood</h1>
                <p>The Downtown Area Neighborhood - Presented by DTLV</p>
              </div>
            </div>
            { R.map(_renderNewRow)(this.props.neighbors) }
          </div>
          <div className='large-2 column column-height' />
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({
  neighbors: R.splitEvery(2, state.neighborhood)
})


const mapDispatchToProps = (dispatch, getState) => ({
  fetchneighbors: () => dispatch(Neighborhood.fetchNeighbors())
})


export default connect(mapStateToProps, mapDispatchToProps)(neighborsPage)
