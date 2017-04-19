import ApiRequest from '../lib/restful'

const REQUEST_PAGE = 'REQUEST_PAGE'
const RECEIVE_PAGE = 'RECEIVE_PAGE'
const PAGE        = 'page'

const requestPage = () => ({type: REQUEST_PAGE})
const receivePage = payload => ({type: RECEIVE_PAGE, payload})

const fetchPage = ({keys}) => (dispatch, getState) => {
  dispatch(requestPage())

  return ApiRequest({
    method: 'get',
    path: PAGE,
    keys
  }).then( response => {
    dispatch(receivePage(response.data))
  })

}

export default {
  REQUEST_PAGE,
  RECEIVE_PAGE,
  PAGE,
  requestPage,
  receivePage,
  fetchPage
}
