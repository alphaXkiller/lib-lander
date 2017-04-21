import R from 'ramda'

import { Lineup } from '../actions/index'

const reducer = ( state = [], action) => {
  switch (action.type) {
    case Lineup.TYPE.receive:
      return R.concat(state, action.payload)

    default:
      return state

  }
}

export default reducer
