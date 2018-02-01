import { CHANGE_LIST } from './actionTypes'

const defaultState = {
  list: [],
  nav: {
    "standard": [],
    "special": [],
    "teach": []
  }
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_LIST:
      return action.data
    default:
      return state
  }
}