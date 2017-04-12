import R from 'ramda'

import { Planning } from '../actions/index.js'

const reducer = (state = [], action) => R.cond([
  [
    R.equals(Planning.TYPE.receive), () => action.payload
  ]
  ,
  [ R.T, R.always(state) ]
])(action.type)

export default reducer
