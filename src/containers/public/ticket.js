import R           from 'ramda'
import React       from 'react'
import { connect } from 'react-redux'
import { Link }    from 'react-router-dom'

import Accordion        from '../../components/accordion.js'
import { Ticket }       from '../../actions/index.js'
import { createMarkup, loadingLogo } from '../../lib/helpers'

require('smoothscroll-polyfill').polyfill()

import allInRegular        from '../../img/all-in_regular.png'
import allInRegularSoldout from '../../img/all-in_regular_soldout.png'
import gaAdvanceSoldout    from '../../img/ga_advance_soldout.png'
import gaAdvance           from '../../img/ga_advance.png'
import gaEarlySoldout      from '../../img/ga_early_soldout.png'
import gaRegular           from '../../img/ga_regular.png'
import gaRegularSoldout    from '../../img/ga_regular_soldout.png'
import vipAdvanceSoldout   from '../../img/vip_advance_soldout.png'
import vipAdvance          from '../../img/vip_advance.png'
import vipEarlySoldout     from '../../img/vip_early_soldout.png'
import vipRegular          from '../../img/vip_regular.png'
import vipRegularSoldout   from '../../img/vip_regular_soldout.png'
import vvipRegular         from '../../img/vvip_regular.png'
import vvipRegularSoldout  from '../../img/vvip_regular_soldout.png'

import friGA  from '../../img/ga_pink_friday.png'
import satGA  from '../../img/ga_pink_saturday.png'
import sunGA  from '../../img/ga_pink_sunday.png'

import friVIP  from '../../img/vip_blue_friday.png'
import satVIP  from '../../img/vip_blue_saturday.png'
import sunVIP  from '../../img/vip_blue_sunday.png'

import friGA_SO  from '../../img/ga_pink_friday_soldout.png'
import satGA_SO  from '../../img/ga_pink_saturday_soldout.png'
import sunGA_SO  from '../../img/ga_pink_sunday_soldout.png'

import friVIP_SO  from '../../img/vip_blue_friday_soldout.png'
import satVIP_SO  from '../../img/vip_blue_saturday_soldout.png'
import sunVIP_SO  from '../../img/vip_blue_sunday_soldout.png'

const goTo = itemId => {
  let item = document.querySelector('.' + itemId)
  item.scrollIntoView({ behavior: 'smooth' })
}


const _renderSoldOut = () => (
  <div
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: '2',
      backgroundColor: 'rgba(0,0,0,0.4)',
      color: '#fff',
      fontSize: '4rem',
      textAlign: 'center',
      fontFamily: "'AN-Bold'",
      paddingTop: '200px'
    }}
  >
    SOLD OUT
  </div>
)


const _renderTicketLg = ticket => (
  <div className='row'>
    <section className={`large-14 column ticket-lg ${ticket.slug}`}>
      <div className='small-14 large-14 column'>
        <div className='hide-for-small-only large-2 column column-height'/>
        <div className='small-14 large-10 column' style={{position: 'relative'}}>
          { _renderSoldOut() }
          <div className='row ten-row'>
            <div className='small-full large-14 column title-col'>
              <div className='vertical-centered-title'>
                <div>
                  {/* <h2 className='ticket-price yellow_on'>${ticket.price}</h2> */}
                  <h1 className='ticket-name'>{ticket.name}</h1>
                  {
                    ticket.ticket_link != 'null' ?
                      <div className='_button-wrapper'>
                        <a className='btn' href={ticket.ticket_link} target='_blank'>BUY TICKETS</a>
                      </div>
                    : null
                  }
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
  <div className='small-full large-6 column' style={{position: 'relative'}}>
    {
      ticket.sold_out ?
        <div className='sold-out' style={ticket.style}>SOLD OUT</div> : null
    }
    <div className='row ten-row'>
      <div className='small-full large-14 column title-col'>
        <div className='vertical-centered-title align-self-bottom'>
          <div>
            <h1 className='ticket-name'>{ticket.name}</h1>
            <div className='_button-wrapper'>
              <a className='btn' href={ticket.ticket_link} target='_blank'>BUY TICKETS</a>
            </div>
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
  </div>
)


const _renderPaymentPlan = plan => (
  <section className='row'>
    <div className={`large-14 column ticket-lg ${plan.slug}`} style={{position: 'relative'}}>
      {_renderSoldOut()}
      <div className='hide-for-small-only large-2 column column-height'/>
      <div className='large-10 small-14 column'>
        <div className='row ten-row'>
          <h1>PAYMENT PLAN</h1>
          {/* <div className='_button-wrapper'>
            <a className='btn' href={plan.ticket_link} target='_blank'>BUY TICKETS</a>
          </div> */}
          <div className='row twelve-row'>
            <h2>$335 +Taxes & Fees</h2>
            <div className='large-3 small-6 columm payment-plans'>
              <div className='payment-content'>
                <p><strong>Payment 1</strong></p>
                <p>$128.79</p>
              </div>
            </div>
            <div className='large-3 small-6 columm payment-plans'>
              <div className='payment-content'>
                <p><strong>Payment 2</strong></p>
                <p>$91.29</p>
              </div>

            </div>
            <div className='large-3 small-6 columm payment-plans'>
              <div className='payment-content'>
                <p><strong>Payment 3</strong></p>
                <p>$91.29</p>
              </div>

            </div>
            <div className='large-3 small-6 columm payment-plans'>
              <div className='payment-content'>
                <p><strong>Payment 4</strong></p>
                <p>$91.29</p>
              </div>

            </div>
          </div>
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
    <div className='tix-comparsion-table animated fadeIn'>
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
            <td>Festival Reentry</td>
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
            <td>Private Bars w/ Specialty VIP-only Cocktails</td>
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
      <div>
        {
          R.isEmpty(tickets && hotel) ?
            loadingLogo
          :
            <div className='content'>
              {/* HIDDEN CONTENT */}
              <img src='https://lifeisbeautiful.com/img/lifeisbeautiful_lineup2017.jpg' style={{display: 'none'}} />

              {/* TITLE AND COPY BLOCK */}
              <div className='row page-title' style={{paddingBottom: '2vw'}}>
                <div className='large-10 large-push-2 columns'>
                  <h1>Tickets</h1>
                  <p>This is your access to beautiful music, art, food and culture. Whether you want to mix and mingle and discover new artists and friends as you stroll the 18 blocks in Downtown Las Vegas, or if you crave exclusivity and want to take in your favorite artist from a private lounge, you&apos;ll find the perfect Life Is Beautiful tickets for you.</p>
                </div>
              </div>

              {/* MULTI-DAY TICKET BLOCK */}
              <div className='row'>
                <div className='large-10 column large-push-2'>

                  <div className='row'>

                    <div className='large-7 small-7 column text-center'>
                      <h3>3-DAY GA</h3>
                      <img src={`/assets/${gaRegularSoldout}`} />

                      <h3>V+VIP</h3>
                      <img src={`/assets/${vvipRegularSoldout}`} />
                    </div>

                    <div className='large-7 small-7 column text-center'>
                      <h3>3-DAY VIP</h3>
                      <img src={`/assets/${vipRegularSoldout}`} />

                      <h3>ALL-IN</h3>
                      <img src={`/assets/${allInRegularSoldout}`} />
                    </div>

                    <div className='large-14 small-14 column text-center neon-btns'>
                      <div className="_button-wrapper">
                        <a href='#tix-packages' className='btn cta2-activated' onClick={() => goTo('tix-packages')}>HOTEL + TICKET PACKAGES</a>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
              {/* END MULTI-DAY TICKET BLOCK */}

              {/* SINGLE-DAY TICKET BLOCK */}
              <div className='row'>
                <div className='large-10 large-push-2 small-7 column text-center'>
                  <h3>1-DAY GA</h3>
                  <div className='row'>

                    <div className='large-4 small-14 column large-push-1 text-center'>
                      <img src={`/assets/${friGA_SO}`} />
                    </div>

                    <div className='large-4 small-14 column large-push-1 text-center'>
                      <img src={`/assets/${satGA_SO}`} />
                    </div>

                    <div className='large-4 small-14 column large-push-1 text-center end'>
                      <img src={`/assets/${sunGA_SO}`} />
                    </div>

                  </div>
                </div>

                <div className='large-10 large-push-2 small-7 column end text-center'>
                  <h3>1-DAY VIP</h3>
                  <div className='row'>

                    <div className='large-4 small-14 large-push-1 column text-center'>
                      <img src={`/assets/${friVIP_SO}`} />
                    </div>

                    <div className='large-4 small-14 large-push-1 column text-center'>
                      <img src={`/assets/${satVIP_SO}`} />
                    </div>

                    <div className='large-4 small-14 large-push-1 column text-center end'>
                      <img src={`/assets/${sunVIP_SO}`} />
                    </div>

                  </div>
                </div>
              </div>

              {/*
              <div className='row'>
                <div className='large-10 small-14 column large-push-2'>
                  <div className='row medium-up-2 small-up-1 tix-links-w-arrow'>
                    <div className='column flex-center'>
                      <button className='btn-underline default'>
                        <a href='#payment-plan' onClick={() => goTo('payment-plan')}>
                          PAYMENT PLANS
                          <i className='fa fa-long-arrow-right fa-md' />
                        </a>
                        <hr className='green' />
                      </button>
                    </div>
                    <div className='column flex-center'>
                      <button className='btn-underline default'>
                        <a href='#tix-comparsion' onClick={() => goTo('tix-comparsion')}>
                          TICKET COMPARISON
                          <i className='fa fa-long-arrow-right fa-md' />
                        </a>
                        <hr className='blue' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              */}

              <div className='row neon-btns'>
                <div className='large-10 small-14 column large-push-2'>
                  <div className='large-7 column flex-center'>
                    <div className="_button-wrapper">
                      <a href='http://events.hotelsforhope.com/group-event?id=21938' className='btn cta2-activated' target='_blank'>HOTELS</a>
                    </div>
                  </div>
                  <div className='large-7 column flex-center end'>
                    <div className="_button-wrapper">
                      <a href='https://www.ticketfly.com/purchase/event/1467533' target='_blank' className='btn cta2-actiaved'>PARK + RIDE</a>
                    </div>
                  </div>
                </div>
              </div>

              { tickets[1] ? _renderTicketLg(tickets[1]) : null }
              { tickets[0] ? _renderPaymentPlan(tickets[0]) : null }
              { tickets[2] ? _renderTicketLg(tickets[2]) : null }
              { tickets[3] ? _renderTicketLg(tickets[3]) : null }
              { tickets[4] ? _renderTicketLg(tickets[4]) : null }

              <section className="tix-comparsion" style={{paddingTop: 65}}>
                <div className='row'>
                  <div className='large-2 columns column-height' />
                  <div className='small-14 large-10 column'>
                    <div className='ten-row row'>
                      <Accordion
                        title='TICKET COMPARISON'
                        content={this.tableComparison}
                        disabled
                      />
                    </div>
                  </div>
                  <div className='large-2 columns column-height' />
                </div>
              </section>

              <section className='large-14 column'>
                <div className='row tix-packages ticket-lg'>
                  <div className='large-2 columns column-height' />
                  <h1 className='large-10 columns'>HOTEL + TICKETS PACKAGES</h1>
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
                          { hotel[1] ? _renderTicketSm(
                            R.merge(hotel[1], {
                              sold_out: true, style: {paddingTop: '450px'}
                            })) : null
                          }
                          {
                            hotel[2] ?
                              _renderTicketSm(
                                R.merge(hotel[2], {sold_out: true})
                              ) : null
                          }
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
                            { hotel[3] ? _renderTicketSm(R.merge(hotel[3], { sold_out: true })) : null }
                            { hotel[4] ? _renderTicketSm(R.merge(hotel[4], { sold_out: true })) : null }
                        </div>
                        <div className='hide-for-small-only large-2 column column-height'/>
                      </div>
                    </section>
                  </div>
                }
                <div className='row ticket-lg hotels-only'>
                  <div className='large-2 columns column-height' />
                  <h1 className='large-10 columns'>HAVE A TICKET BUT NEED A HOTEL?</h1>
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
                    <div className='row'>
                      <div className='large-14 small-14 column' style={{textAlign: 'center'}}>
                        <img src={hotel[5].image} />
                      </div>
                    </div>
                  </div>
                  <div className='large-2 columns column-height' />
                </div>

              </section>
            </div>
        }
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
