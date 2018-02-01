import { CHANGE_LIST } from './actionTypes'

const defaultState = {
  listleft: [],
  listright: []
}

export default (state = defaultState, action) => {
  switch( action.type ) {
    case CHANGE_LIST:
      return {
        ...action.data
      }
    default: 
      return state
  }
}