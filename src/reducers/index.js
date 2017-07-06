import { combineReducers } from 'redux'

import vibe     from './vibe'
import landing  from './home'
import planning from './planning'
import ticket   from './ticket'
import page     from './page'
import faq      from './faq'
import news     from './news'
import neighborhood     from './neighborhood'
import post     from './newsPost'
import lineup     from './lineup'
import sponsors     from './sponsors'

export default combineReducers({
  news,
  neighborhood,
  faq,
  vibe,
  landing,
  planning,
  ticket,
  page,
  post,
  lineup,
  sponsors
})
