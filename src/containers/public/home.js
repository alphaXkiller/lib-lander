import R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'

import { Landing } from '../../actions/index'
import HomeContainer from '../../components/landing'

class Home extends React.Component {
  componentDidMount(){
    this.props.onMount()
  }

  render() {
    return (
      <div className='content'>
				{/* <!-- CONTENT --> */}
        <HomeContainer data={this.props.landing} />
        {/* <!-- CONTENT --> */}


        {/* <!-- FOOTER --> */}
        {/*<div className="libfooter desktop">
    			<ul>
    				<li><a href="mailto:LIBPress@rrpartners.com?subject=Life%20Is%20Beautiful%20Press%20Inquiry">Press</a></li>
    				<li>|</li>
    				<li><a href="mailto:sponsorships@lifeisbeautiful.com?subject=Life%20Is%20Beautiful%202017%20Sponsorship%20Inquiry">Sponsors</a></li>
    				<li>|</li>
    				<li><a href="legal.html">Legal</a></li>
    			</ul>
    			<span className="copyright">&copy; 2017 Life Is Beautiful. All Rights Reserved.</span>
    		</div> */}
        {/* <!-- FOOTER --> */}
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
