import R from 'ramda'

import { Ticket } from '../actions/index.js'


const reducer = (state = [], action) => R.cond([
  [ R.equals(Ticket.TYPE.receive), () => action.payload ],
  [ R.T, R.always(state) ]
])(action.type)


export default reducer
