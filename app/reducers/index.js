import { combineReducers } from 'redux'

import contact from './contact';
import list from './list'

export default combineReducers({
  contact,
  list,
})