import R from 'ramda'
import { PageActions } from '../actions/index'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case PageActions.RECEIVE_PAGE:
      return action.payload

    case PageActions.PAGE_NOT_FOUND:
      return { error: { status: 404 } }

    default:
      return state

  }
}

export default reducer
