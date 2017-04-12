import { combineReducers } from 'redux'

import vibe     from './vibe'
import landing  from './home'
import planning from './planning.js'
import ticket   from './ticket.js'

export default combineReducers({
  vibe,
  landing,
  planning,
  ticket
})
