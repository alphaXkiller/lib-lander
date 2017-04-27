import { Sponsors } from '../actions/index'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case Sponsors.TYPE.receive:
      return action.payload

    default:
      return state

  }
}

export default reducer
