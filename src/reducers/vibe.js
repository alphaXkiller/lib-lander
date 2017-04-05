import R from 'ramda'

import { Vibe } from '../actions/index'

const reducer = ( state = [], action) => {
  switch (action.type) {
    case Vibe.RECEIVE_VIBE:
      return R.concat(state, action.payload)

    default:
      return state

  }
}

export default reducer
