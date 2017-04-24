import R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'

import { Landing } from '../../actions/index'
import HomeContainer from '../../components/landing'

import { loadingLogo } from '../../lib/helpers'

class Home extends React.Component {
  componentDidMount(){
    if (R.isEmpty(this.props.landing)) {
      this.props.onMount()
    }
  }

  render() {
    return (
      <div className='content'>
        {
          R.isEmpty(this.props.landing) ?
            loadingLogo
          : <HomeContainer data={this.props.landing} />

        }
	    </div>

    )
  }
}

const mapStateToProps = state => ({
  landing: R.path(['landing'])(state)
})

const dispatchPropsToState = dispatch => ({
  onMount: () => dispatch(Landing.fetchLanding())
})

export default connect(mapStateToProps, dispatchPropsToState)(Home)
