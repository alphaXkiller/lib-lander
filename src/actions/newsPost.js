import ApiRequest from '../lib/restful'

const TYPE = {
  request: 'REQUEST_POST',
  receive: 'RECEIVE_POST'
}
const POST        = 'post'

const requestPost = () => ({type: TYPE.request})
const receivePost = payload => ({type: TYPE.receive, payload})

const fetchPost = ({keys}) => (dispatch, getState) => {
  dispatch(requestPost())

  return ApiRequest({
    method: 'get',
    path: POST,
    keys
  })
    .then( response => dispatch(receivePost(response.data)) )
}

export default {
  TYPE,
  fetchPost
}
