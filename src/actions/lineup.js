import ApiRequest from '../lib/restful'

const LINEUP = 'lineup'
const TYPE = {
  request: 'request',
  receive: 'receive'
}

const request = () => ({ type: TYPE.request })
const receive = payload => ({ type: TYPE.receive, payload })

const fetchLineup = () => (dispatch, getState) => {
  dispatch(request())

  return ApiRequest({
    method : 'get',
    path   : LINEUP
  })

    .then( lineup => dispatch(receive(lineup.data)) )
}

export default {
  TYPE,
  fetchLineup 
}
