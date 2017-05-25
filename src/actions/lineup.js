import ApiRequest from '../lib/restful'

const LINEUP = 'lineup'
const LINEUP_SINGULAR = 'lineup_by_slug'

const TYPE = {
  request: 'REQUEST_LINEUP',
  receive: 'RECEIVE_LINEUP'
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


const fetchLineupBySlug = slug => (dispatch, getState) =>
  ApiRequest({
    method: 'get',
    path: LINEUP_SINGULAR,
    key: { slug }
  })

  .then(console.log)



export default {
  TYPE,
  fetchLineup
}
