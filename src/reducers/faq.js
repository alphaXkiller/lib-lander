import R from 'ramda'

import { Faq } from '../actions/index'

const reducer = ( state = [], action ) => R.cond([
  [ R.equals(Faq.RECEIVE), R.always(action.payload) ],
  [ R.T, R.always(state) ]
])(action.type)

export default reducer
