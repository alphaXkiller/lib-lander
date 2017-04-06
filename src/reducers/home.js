import R from 'ramda'

import { Landing } from '../actions/index'

const reducer = ( state = [], action) => {
  switch (action.type) {
    case Landing.RECEIVE_LANDING:
      return R.concat(state, action.payload)

    default:
      return state

  }
}

export default reducer
