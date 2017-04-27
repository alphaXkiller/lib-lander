import ApiRequest from '../lib/restful'

const SPONSORS = 'sponsor'
const TYPE = {
  request: 'REQUEST_SPONSORS',
  receive: 'RECEIVE_SPONSORS'
}

const request = () => ({ type: TYPE.request})
const receive = payload => ({ type: TYPE.receive, payload})

const fetchSponsors = () => (dispatch, getState) => {
  dispatch(request())

  return ApiRequest({
    method: 'get',
    path: SPONSORS
  })
    .then( sponsor => dispatch(receive(sponsor.data)))
}

export default {
  TYPE,
  fetchSponsors
}
