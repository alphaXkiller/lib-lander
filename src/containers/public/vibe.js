import R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
var Packery = require('react-packery-component')(React)

import { Vibe } from '../../actions/index'
import { mapIndexed } from '../../lib/helpers'

const packeryOptions = {
    transitionDuration: '0.8s'
}

const _mapData = mapIndexed( (item, index) =>
  <div key={index} className={'column ' + item.box_size}>
    <div className={'column-' + item.box_size}>
      <div className='column image'>
        <span className='name'>{item.name}</span>
        <img className={'gutter-' + item.box_gutter} src={item.profile_image} />
      </div>
    </div>
  </div>
)

class Lineup extends React.Component {
  componentDidMount() {
    if (R.isEmpty(this.props.vibe)) {
      this.props.onMount()
    }
  }

  render() {
    const data = this.props.vibe

    return (
      <div className='content'>
        <div className='large-1 columns column-height'></div>
        {data ?
          <div className='large-12 columns'>
            <div className='vibe-row row'>
              <Packery
                className={'vibe-list'} // default ''
                elementType={'div'} // default 'div'
                options={packeryOptions} // default {}
                disableImagesLoaded={false} // default false
                >
                {_mapData(data)}
            </Packery>
            </div>
          </div>
        :null}
        <div className='large-1 columns column-height'></div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  vibe: R.path(['vibe'])(state)
})

const dispatchPropsToState = dispatch => ({
  onMount: () => dispatch(Vibe.fetchProfile())
})


export default connect(mapStateToProps, dispatchPropsToState)(Lineup)
