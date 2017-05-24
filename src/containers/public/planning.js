import R           from 'ramda'
import React       from 'react'
import { connect } from 'react-redux'

import Accordion         from '../../components/accordion.js'
import { Planning, Faq } from '../../actions/index'
import { createMarkup, mapIndexed } from '../../lib/helpers'

const FAQ = 'frequently asked questions'


const _renderPlanRow = plan_list => {
  const plan_left = plan_list[0]
  const plan_right = plan_list[1]

  return (
    <div key={plan_left.ID} className='row planning-row'>
      <div className='large-7 small-14 column'>
        <h2 className='planning-title'>{plan_left.title}</h2>
        <div className='planning-img'><img src={plan_left.image} /></div>
        <div
          className='large-12 column end'
          dangerouslySetInnerHTML={createMarkup(plan_left.description)}
        />
      </div>
      {
        plan_right ?
          <div
            id={plan_right.title}
            key={plan_right.ID}
            className='large-7 small-14 column'
          >
            <h2 className='planning-title'>{plan_right.title}</h2>
            <div className='planning-img'><img src={plan_right.image} /></div>
            <div
              className='large-12 column end'
              dangerouslySetInnerHTML={createMarkup(plan_right.description)}
            />
          </div>
        : null
      }

    </div>
  )
}


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
          <div className='small-14 large-10 column align-center'>
            <div className='row page-title' style={{paddingBottom: 0}}>
              <div className='large-14 column'>
                <h1>PLANNING</h1>
                <p>
                  The ultimate guide to the Life is Beautiful experience:
                  What you need to know before, during and when you are out
                  and about. General information, dos and don&apos;ts, hotels,
                  ticketing, parking&mdash;all the beautiful resources.
                </p>
              </div>
            </div>
              { R.map( _renderPlanRow )(this.props.plans)}
              {
                R.not(R.isEmpty(this.props.faqs)) ?
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
                  : null
              }
          </div>
          <div className='large-2 column column-height' />
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({
  plans : R.splitEvery(2, state.planning),
  faqs  : state.faq
})


const mapDispatchToProps = (dispatch, getState) => ({
  fetchPlans : () => dispatch(Planning.fetchPlans()),
  fetchFaqs  : () => dispatch(Faq.fetchFaq())
})


export default connect(mapStateToProps, mapDispatchToProps)(PlanPage)
