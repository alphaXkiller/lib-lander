import React from 'react'
import { connect } from 'react-redux'

import { Ticket } from '../../actions/index.js'
import { createMarkup } from '../../lib/helpers'


const _renderTicketLg = ticket => (
  <div className='row'>
    <section className='large-14 column ticket-lg'>
      <div className='small-14 large-14 column'>
        <div className='hide-for-small-only large-2 column column-height'/>
        <div className='small-14 large-10 column'>
          <div className='row ten-row'>
            <div className='small-full large-7 column title-col'>
              <div className='vertical-centered-title'>
                <div>
                  <span className='ticket-price'>${ticket.price}</span>
                  <h1 className='ticket-name'>{ticket.name}</h1>
                  <div className='_button-wrapper'>
                    <a className='btn' href={ticket.ticket_link}>BUY TICKETS</a>
                  </div>
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
  <div className='small-full large-7 column pl-2 pr-2'>
    <div className='row ten-row'>
      <div className='small-full large-14 column title-col'>
        <div className='vertical-centered-title align-self-bottom'>
          <div>
            <span className='ticket-price'>${ticket.price}</span>
            <h1 className='ticket-name'>{ticket.name}</h1>
            <div className='_button-wrapper'>
              <a className='btn' href={ticket.ticket_link}>BUY TICKETS</a>
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
  }

  </div>
)


class TicketPage extends React.Component {
  componentDidMount() {
    this.props.getTickets()
  }


  render() {
    const tickets = this.props.tickets

    return (
      <div className='content'>
        <div className='row page-title'>
          <div className='large-2 columns column-height' />
          <h1 className='large-12 columns'>Ticket Packages</h1>
          <div className='large-2 columns column-height' />
        </div>
        { tickets[0] ? _renderTicketLg(tickets[0]) : null }
        { tickets[1] ? _renderTicketLg(tickets[1]) : null }
        <div className='row'>
          <section className='large-14 column ticket-sm'>
            <div className='small-14 large-14 column'>
              <div className='hide-for-small-only large-2 column column-height'/>
              <div className='small-14 large-10 column'>
                  { tickets[2] ? _renderTicketSm(tickets[2]) : null }
                  { tickets[3] ? _renderTicketSm(tickets[3]) : null }
              </div>
              <div className='hide-for-small-only large-2 column column-height'/>
            </div>
          </section>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({
  tickets: state.ticket
})


const mapDispatchToProps = (dispatch, getState) => ({
  getTickets: () => dispatch(Ticket.fetchTickets())
})


export default connect(mapStateToProps, mapDispatchToProps)(TicketPage)
