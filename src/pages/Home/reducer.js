import { CHANGE_LIST } from './actionTypes'

const defaultState = {
  list: [],
  word: []
}

export default (state = defaultState, action) => {
  switch( action.type ) {
    case CHANGE_LIST:
      return {
        list: action.data.list,
        word: action.data.word
      }
    default: 
      return state
  }
}