import { combineReducers } from 'redux'

import vibe     from './vibe'
import landing  from './home'
import planning from './planning'
import ticket   from './ticket'
import page     from './page'
import faq      from './faq'

export default combineReducers({
  faq,
  vibe,
  landing,
  planning,
  ticket,
  page
})
