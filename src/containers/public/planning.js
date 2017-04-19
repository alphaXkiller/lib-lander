import R           from 'ramda'
import React       from 'react'
import { connect } from 'react-redux'

import Accordion         from '../../components/accordion.js'
import { Planning, Faq } from '../../actions/index'
import { createMarkup } from '../../lib/helpers'

const FAQ = 'frequently asked questions'



class PlanPage extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    this.props.fetchPlans()
    this.props.fetchFaqs()
  }

  render() {
    return (
      <div className='content'>
        <div className='row align-center'>
          <div className='large-2 column column-height' />
          <div className='small-10 column align-center'>
            <div className='row page-title'>
              <div className='large-7 column'>
                <h1>PLANNING</h1>
              </div>
            </div>
            <div className='row'>
              {
                R.map( plan =>
                  <div key={plan.ID} className='large-7 column'>
                    <h2>{plan.title}</h2>
                    <div dangerouslySetInnerHTML={createMarkup(plan.description)}></div>
                  </div>
                )(this.props.plans)
              }
            </div>
            <div className='ten-row row'>
              <h3>{FAQ.toUpperCase()}</h3>
              {
                R.map( faq =>
                  <Accordion
                    key={faq.ID}
                    title={faq.question}
                    content={faq.answer}
                  />
                )(this.props.faqs)
              }
            </div>
          </div>
          <div className='large-2 column column-height' />
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({
  plans : state.planning,
  faqs  : state.faq
})


const mapDispatchToProps = (dispatch, getState) => ({
  fetchPlans : () => dispatch(Planning.fetchPlans()),
  fetchFaqs  : () => dispatch(Faq.fetchFaq())
})


export default connect(mapStateToProps, mapDispatchToProps)(PlanPage)
