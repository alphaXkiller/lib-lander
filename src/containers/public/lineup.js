import R           from 'ramda'
import React       from 'react'
import { connect } from 'react-redux'

import { Lineup } from '../../actions/index'

class LineupPage extends React.Component {
  componentDidMount() {
    this.props.fetchLineup()
  }


  render() {
    return (
       <div className='content'>
        <div className='row align-center'>
          <div className='large-2 column column-height' />
          <div className='small-10 column align-center'>
            <div className='row page-title' style={{paddingBottom: 0}}>
              <div className='large-14 column'>
                <h1>LINEUP</h1>
              </div>
            </div>
          </div>
          <div className='large-2 column column-height' />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  lineup: state.lineup
})


const mapDispatchToProps = (dispatch, getState) => ({
  fetchLineup : () => dispatch(Lineup.fetchLineup())
})


export default connect(mapStateToProps, mapDispatchToProps)(LineupPage)
