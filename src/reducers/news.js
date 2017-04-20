import R from 'ramda'
import { News } from '../actions/index'

const reducer = (state = [], action) => R.cond([
  [ R.equals(News.TYPE.receive), R.always(action.payload) ],
  [ R.T, R.always(state) ]
])(action.type)

export default reducer
