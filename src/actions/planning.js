import ApiRequest from '../lib/restful'

const PLANNING = 'planning'
const TYPE = {
  request: 'request',
  receive: 'receive'
}

const request = () => ({ type: TYPE.request })
const receive = payload => ({ type: TYPE.receive, payload })

const fetchPlans = () => (dispatch, getState) => {
  dispatch(request())

  return ApiRequest({
    method : 'get',
    path   : PLANNING
  })

    .then( plans => dispatch(receive(plans.data)) )
}

export default {
  TYPE,
  fetchPlans
}
