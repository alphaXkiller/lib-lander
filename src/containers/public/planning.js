import R           from 'ramda'
import React       from 'react'
import { connect } from 'react-redux'

import { Planning } from '../../actions/index'

class PlanPage extends React.Component {
  componentDidMount() {
    this.props.getPlans()  
  }

  render() {
    return (
      <div className='content'>
        <h1 className='columns'>PLANNING</h1>
        <p>{R.map( plan => plan.description )(this.props.plans)}</p>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({
  plans: state.planning
})


const mapDispatchToProps = (dispatch, getState) => ({
  getPlans: () => dispatch(Planning.fetchPlans())
})


export default connect(mapStateToProps, mapDispatchToProps)(PlanPage)
