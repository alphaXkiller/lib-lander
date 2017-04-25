import R          from 'ramda'
import ApiRequest from '../lib/restful'

const REQUEST_PAGE = 'REQUEST_PAGE'
const RECEIVE_PAGE = 'RECEIVE_PAGE'
const PAGE_NOT_FOUND = 'PAGE_NOT_FOUND'
const PAGE        = 'page'

const requestPage = () => ({type: REQUEST_PAGE})
const receivePage = payload => ({type: RECEIVE_PAGE, payload})
const pageNotFound = () => ({type: PAGE_NOT_FOUND})

const fetchPage = ({keys}) => (dispatch, getState) => {
  dispatch(requestPage())

  return ApiRequest({
    method: 'get',
    path: PAGE,
    keys
  })
    .then( response => {
      dispatch(receivePage(response.data))
    })

    .catch( err => {
      if (err.response.status === 404)
        dispatch(pageNotFound())
    })

}

export default {
  REQUEST_PAGE,
  RECEIVE_PAGE,
  PAGE_NOT_FOUND,
  PAGE,
  requestPage,
  receivePage,
  fetchPage
}
