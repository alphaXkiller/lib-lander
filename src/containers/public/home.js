import R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'

import { Landing } from '../../actions/index'
import HomeContainer from '../../components/landing'

class Home extends React.Component {
  componentDidMount(){
    if (R.isEmpty(this.props.landing)) {
      this.props.onMount()
    }
    window.addEventListener('scroll', this.parallaxFn)
  }

  parallaxFn = () => {
    let parallax = document.querySelectorAll(".parallax"),
        footer = document.querySelector('.dj'),
        speed = 0.15,
        scrollY = window.scrollY,
        innerHeight = window.innerHeight,
        docHeight = document.body.clientHeight,
        scrolling = (scrollY) / ( docHeight - (innerHeight) );

    [].slice.call(parallax).map( (el,i) => {
      let windowYOffset = window.pageYOffset,
        elBackgrounPos = (windowYOffset * speed) + "px";
      el.style.marginTop = '-' + elBackgrounPos;
      el.style.marginBottom = elBackgrounPos;
    })

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      footer.style.marginBottom = '0'
    } else {
      footer.style.marginBottom = '-200px'
    }

  }

  render() {
    return (
      <div className='content'>
				{/* <!-- CONTENT --> */}
        <HomeContainer data={this.props.landing} />
        {/* <!-- CONTENT --> */}
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
