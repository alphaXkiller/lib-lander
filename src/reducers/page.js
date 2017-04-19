import R from 'ramda'
import { PageActions } from '../actions/index'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case PageActions.RECEIVE_PAGE:
      return R.merge(state, action.payload)

    default:
      return state

  }
}

export default reducer
