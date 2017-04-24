import R           from 'ramda'
import React       from 'react'
import { connect } from 'react-redux'

import Accordion        from '../../components/accordion.js'
import { Ticket }       from '../../actions/index.js'
import { createMarkup } from '../../lib/helpers'

require('smoothscroll-polyfill').polyfill()

const goTo = itemId => {
  let item = document.querySelector('.' + itemId)
  item.scrollIntoView({ behavior: 'smooth' })
}

const _renderTicketLg = ticket => (
  <div className='row'>
    <section className={`large-14 column ticket-lg ${ticket.slug}`}>
      <div className='small-14 large-14 column'>
        <div className='hide-for-small-only large-2 column column-height'/>
        <div className='small-14 large-10 column'>
          <div className='row ten-row'>
            <div className='small-full large-14 column title-col'>
              <div className='vertical-centered-title'>
                <div>
                  <h2 className='ticket-price yellow_on'>${ticket.price}</h2>
                  <h1 className='ticket-name'>{ticket.name}</h1>
                  {/* <div className='_button-wrapper'>
                    <a className='btn' href={ticket.ticket_link}>BUY TICKETS</a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className='small-full large-8 column'>
              <div>
                <img src={ticket.image}/>
              </div>
            </div>
          </div>
          <div className='row ten-row ticket-description'>
            <div
              className='column-two'
              style={{color: 'white'}}
              dangerouslySetInnerHTML={createMarkup(ticket.description)} />
          </div>
        </div>
        <div className='large-2 column column-height'/>
      </div>
    </section>
  </div>
)


const _renderTicketSm = ticket => (
  <div className='small-full large-6 column'>
    <div className='row ten-row'>
      <div className='small-full large-14 column title-col'>
        <div className='vertical-centered-title align-self-bottom'>
          <div>
            <h1 className='ticket-name'>{ticket.name}</h1>
            {
              // <div className='_button-wrapper'>
              //   <a className='btn' href={ticket.ticket_link}>BUY TICKETS</a>
              // </div>
            }
          </div>
        </div>
      </div>
      <img className='small-full large-8 column' src={ticket.image}/>
    </div>
    <div className='small-full large-8 column'>
    </div>
    <div className='ticket-description'>
      <div
        style={{color: 'white'}}
        dangerouslySetInnerHTML={createMarkup(ticket.description)} />
    </div>
  }

  </div>
)


const _renderPaymentPlan = plan => (
  <section className='row'>
    <div className='large-14 column ticket-lg'>
      <div className='hide-for-small-only large-2 column column-height'/>
      <div className='large-10 small-14 column'>
        <div className='row ten-row'>
          <h1>PAYMENT PLAN</h1>
          <div
            className='column-two ticket-description'
            dangerouslySetInnerHTML={createMarkup(plan.description)}
          />
        </div>
      </div>
      <div className='large-2 column column-height' />
    </div>
  </section>
)


class TicketPage extends React.Component {
  componentDidMount() {
    this.props.getTickets()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tickets !== this.props.tickets) {
      const strClass = this.props.location.hash.split('#')[1]
      const is_ready = R.allPass(
          [R.path(['location', 'hash'])],
          [R.not(R.empty(R.path(['tickets'])))]
        )(this.props)

      is_ready ? (goTo(strClass)) : null
    }
  }

  tableComparison = (
    <div className='tix-comparasion-table animated fadeIn'>
      <table>
        <tbody>
          <tr>
            <th><strong>ACCESS</strong></th>
            <th>ALL IN</th>
            <th>V+VIP</th>
            <th>VIP</th>
          </tr>
          <tr>
            <td>Three-day Festival Admission</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
          </tr>
          <tr>
            <td>Festival Re-entry</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
          </tr>
          <tr>
            <td>Lounges at Downtown and Ambassador Stages</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
          </tr>
          <tr>
            <td>Elevated Viewing at Downtown Stage</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
            <td></td>
          </tr>
          <tr>
            <td>Side-Stage Viewing Platform at Downtown Stage</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Side-Stage Viewing Platform at Ambassador Stage</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Air-Conditioned Artist Hospitality Lounge</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Saturday and Sunday Brunch</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <th><strong>FEATURES</strong></th>
            <th>ALL IN</th>
            <th>V+VIP</th>
            <th>VIP</th>
          </tr>

          <tr>
            <td>Shaded, Luxe Lounge Seating</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
          </tr>
          <tr>
            <td>On-site Concierge</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
          </tr>
          <tr>
            <td>Air-conditioned Restrooms</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
          </tr>
          <tr>
            <td>Mobile Charging Stations</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
          </tr>
          <tr>
            <td>Private Bars w/ Specialty VIP only Cocktails</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
          </tr>
          <tr>
            <td>Complimentary Drinks</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
            <td></td>
          </tr>
          <tr>
            <td>Daily Mixology Demos</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
            <td></td>
          </tr>
          <tr>
            <td>Daily Culinary Experience</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
            <td></td>
          </tr>
          <tr>
            <td>Restroom Attendants</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <th><i className='fa fa-times fa-lg' /></th>
            <td></td>
          </tr>
          <tr>
            <td>Artist Hospitality Lounge Culinary Tasting Hour</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Two Daily Food Vouchers for Any Food Vendor</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Las Vegas Credential Delivery</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Five-year Commemorative Festival Gift Bag</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>First Right to Purchase 2018 ALL-IN Pass</td>
            <th><i className='fa fa-times fa-lg' /></th>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )

  render() {
    const tickets = this.props.tickets
    const hotel   = this.props.hotel

    return (
      <div className='content'>
        <div className='row page-title'>
          <div className='large-2 columns column-height' />
          <h1 className='large-12 columns'>Ticket Packages</h1>
          <div className='large-2 columns column-height' />
        </div>
        <div className='row twelve-row'>
          <div className='large-12 column large-push'>
            <div className='large-4 column text-center'>
              <h1>GA</h1>
              <a href={`#${tickets[1] ? tickets[1].slug : null}`} onClick={() => goTo(tickets[1].slug)}><p>Go to Ticket</p></a>
            </div>
            <div className='large-4 column text-center'>
              <h1>GA</h1>
              <a href={`#${tickets[2] ? tickets[2].slug : null}`} onClick={() => goTo(tickets[2].slug)}><p>Go to Ticket</p></a>
            </div>
            <div className='large-4 column text-center end'>
              <h1>GA</h1>
              <a href={`#${tickets[3] ? tickets[3].slug : null}`} onClick={() => goTo(tickets[3].slug)}><p>Go to Ticket</p></a>
            </div>
          </div>
        </div>
        { tickets[1] ? _renderTicketLg(tickets[1]) : null }
        { tickets[0] ? _renderPaymentPlan(tickets[0]) : null }
        { tickets[2] ? _renderTicketLg(tickets[2]) : null }
        { tickets[3] ? _renderTicketLg(tickets[3]) : null }
        { tickets[4] ? _renderTicketLg(tickets[4]) : null }

        <section>
          <div className='row'>
            <div className='large-2 columns column-height' />
            <div className='small-14 large-10 column'>
              <div className='ten-row row'>
                <Accordion title='TICKETS COMPARISON' content={this.tableComparison} />
              </div>
            </div>
            <div className='large-2 columns column-height' />
          </div>
        </section>

        <section className='large-14 column'>
          <div className='row'>
            <div className='large-2 columns column-height' />
            <h1 className='large-10 columns'>TICKETS + HOTEL PACKAGES</h1>
            <div className='large-2 columns column-height' />
          </div>
          <div className='row' style={{paddingBottom: '30px'}}>
            <div className='large-2 columns column-height' />
            <div className='large-10 columns'>
              <div
                className='column-two'
                style={{color: 'white'}}
                dangerouslySetInnerHTML={
                  createMarkup(R.path(['description'])(hotel[0]))
                }
              />
            </div>
            <div className='large-2 columns column-height' />
          </div>
          {
            <div className='row'>
              <section className='large-14 column ticket-sm'>
                <div className='small-14 large-14 column'>
                  <div className='hide-for-small-only large-2 column column-height'/>
                  <div className='small-14 large-10 column'>
                      { hotel[1] ? _renderTicketSm(hotel[1]) : null }
                      { hotel[2] ? _renderTicketSm(hotel[2]) : null }
                  </div>
                  <div className='hide-for-small-only large-2 column column-height'/>
                </div>
              </section>
            </div>
          }
          {
            <div className='row'>
              <section className='large-14 column ticket-sm'>
                <div className='small-14 large-14 column'>
                  <div className='hide-for-small-only large-2 column column-height'/>
                  <div className='small-14 large-10 column'>
                      { hotel[3] ? _renderTicketSm(hotel[3]) : null }
                      { hotel[4] ? _renderTicketSm(hotel[4]) : null }
                  </div>
                  <div className='hide-for-small-only large-2 column column-height'/>
                </div>
              </section>
            </div>
          }
          <div className='row'>
            <div className='large-2 columns column-height' />
            <h1 className='large-10 columns'>Hotels Only</h1>
            <div className='large-2 columns column-height' />
          </div>
          <div className='row' style={{paddingBottom: '30px'}}>
            <div className='large-2 columns column-height' />
            <div className='large-10 columns'>
              <div
                className='column-two'
                style={{color: 'white'}}
                dangerouslySetInnerHTML={
                  createMarkup(R.path(['description'])(hotel[5]))
                }
              />
            </div>
            <div className='large-2 columns column-height' />
          </div>

        </section>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({
  tickets: state.ticket,
  hotel: R.filter(R.propEq('is_package', true))(state.ticket)
})


const mapDispatchToProps = (dispatch, getState) => ({
  getTickets: () => dispatch(Ticket.fetchTickets())
})


export default connect(mapStateToProps, mapDispatchToProps)(TicketPage)
