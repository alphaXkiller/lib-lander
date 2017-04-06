import ApiRequest from '../lib/restful'

const REQUEST_LANDING = 'REQUEST_LANDING'
const RECEIVE_LANDING = 'RECEIVE_LANDING'
const LANDING         = 'landing'

const requestLanding = () => ({type: REQUEST_LANDING})
const receiveLanding = payload => ({type: RECEIVE_LANDING, payload})

const fetchLanding = () => (dispatch, getState) => {
  dispatch(requestLanding())

  return ApiRequest({
    method: 'get',
    path: 'landing'
  }).then( result => dispatch(receiveLanding(result.data)))

}

export default {
  REQUEST_LANDING,
  RECEIVE_LANDING,
  LANDING,
  requestLanding,
  receiveLanding,
  fetchLanding
}
