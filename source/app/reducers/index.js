
import layout from './layout'
import componentMenu from './componentMenu'
import componentSettings from './componentSettings'
import { combineReducers } from 'redux'

const reducer = combineReducers({
  layout,
  componentMenu,
  componentSettings
})

export default reducer
