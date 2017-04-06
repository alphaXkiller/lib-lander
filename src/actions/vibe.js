import ApiRequest from '../lib/restful'

const REQUEST_VIBE = 'REQUEST_VIBE'
const RECEIVE_VIBE = 'RECEIVE_VIBE'
const VIBE         = 'vibe'

const requestVibe = () => ({type: REQUEST_VIBE})
const receiveVibe = payload => ({type: RECEIVE_VIBE, payload})

const fetchProfile = () => (dispatch, getState) => {
  dispatch(requestVibe())

  return ApiRequest({
    method: 'get',
    path: 'vibe'
  }).then( result => dispatch(receiveVibe(result.data)))

}

export default {
  REQUEST_VIBE,
  RECEIVE_VIBE,
  VIBE,
  requestVibe,
  receiveVibe,
  fetchProfile
}
