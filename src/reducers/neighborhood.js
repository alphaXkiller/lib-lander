import R from 'ramda'
import { Neighborhood } from '../actions/index'

const reducer = (state = [], action) => R.cond([
  [ R.equals(Neighborhood.TYPE.receive), R.always(action.payload) ],
  [ R.T, R.always(state) ]
])(action.type)

export default reducer
