import ApiRequest from '../lib/restful'

const NEWS = 'news'
const TYPE = {
  request: 'REQUEST_NEWS',
  receive: 'RECEIVE_NEWS'
}

const request = () => ({ type: TYPE.request })
const receive = payload => ({ type: TYPE.receive, payload })

const fetchNews = () => (dispatch, getState) => {
  dispatch(request())

  return ApiRequest({
    method: 'get',
    path: NEWS
  })

  .then( news => { dispatch(receive(news.data)) })
}


export default {
  TYPE,
  fetchNews
}
