import ApiRequest from '../lib/restful'

const NEIGHBORHOOD = 'neighborhood'
const TYPE = {
  request: 'REQUEST_NEIGHBORHOOD',
  receive: 'RECEIVE_NEIGHBORHOOD'
}

const request = () => ({ type: TYPE.request })
const receive = payload => ({ type: TYPE.receive, payload })

const fetchNeighbors = () => (dispatch, getState) => {
  dispatch(request())

  return ApiRequest({
    method: 'get',
    path: NEIGHBORHOOD
  })

  .then( neighbors => { dispatch(receive(neighbors.data)) })
}


export default {
  TYPE,
  fetchNeighbors
}
