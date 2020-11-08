import { combineReducers } from 'redux'

import heroes from './heroes'
import filters from './filters'

export default combineReducers({
  heroes,
  filters,
})
