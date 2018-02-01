import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as commonReducer } from '../components/CommonWrapper/'
import { reducer as HomeReducer } from '../pages/Home/'
import { reducer as DetailReducer } from '../pages/Detail/'
import { reducer as ListReducer } from '../pages/List/'

export default combineReducers({
  common: commonReducer,
  home: HomeReducer,
  detail: DetailReducer,
  routing: routerReducer,
  list: ListReducer
})