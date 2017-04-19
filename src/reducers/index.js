import { combineReducers } from 'redux'

import vibe     from './vibe'
import landing  from './home'
import planning from './planning'
import ticket   from './ticket'
import page   from './page'

export default combineReducers({
  vibe,
  landing,
  planning,
  ticket,
  page
})
