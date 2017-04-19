import ApiRequest from '../lib/restful'

const REQEUST = 'REQUEST_FAQ'
const RECEIVE = 'RECEIVE_FAQ'

const requestFaq = () => ({ type: REQEUST })
const receiveFaq = payload => ({ type: RECEIVE, payload })

const fetchFaq = () => (dispatch, getState) => {
  dispatch(requestFaq())

  return ApiRequest({
    method: 'get',
    path: 'faq'
  }).then( faq => dispatch(receiveFaq(faq.data)) )
}

export default {
  REQEUST,
  RECEIVE,
  fetchFaq
}
