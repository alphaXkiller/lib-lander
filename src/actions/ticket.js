import ApiRequest from '../lib/restful.js'

const TYPE = {
  request: 'REQUEST_TICKET',
  receive: 'RECEIVE_TICKET'
}

const request = () => ({ type: TYPE.request })
const receive = payload => ({ type: TYPE.receive, payload })

const fetchTickets = () => (dispatch, getState) => {
  dispatch(request())

  return ApiRequest({
    method: 'get',
    path: 'ticket'
  })

  .then( tickets => dispatch(receive(tickets.data)) )
}


export default {
  TYPE,
  fetchTickets
}
