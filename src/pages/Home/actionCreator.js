import { CHANGE_LIST } from './actionTypes'

export const getChangeListAction = (data) => ({
  type: CHANGE_LIST,
  data: data
})
export const getActionList = () => {
  return (dispatch) => {
        fetch('/api/home.json')
          .then((res) => res.json())
          .then((res) => {
            dispatch(getChangeListAction(res.data))
          })
  }
  
}
