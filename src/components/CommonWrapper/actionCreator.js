import { CHANGE_LIST } from './actionTypes'

export const getChangeListAction = (data) => ({
  type: CHANGE_LIST,
  data
})

// export const getChangeNavAction = (nav) => ({
//   type: CHANGE_NAV,
//   nav: nav
// })

// export const getCommonList = () => {
//   return (dispatch) => {
//     fetch('/api/common.json')
//       .then((res) => res.json())
//       .then((res) => {
//         dispatch(getChangeListAction(res.data.list))
//       })
//   }
// }

// export const getCommonNav = () => {
//   return (dispatch) => {
//     fetch('/api/common.json')
//       .then((res) => res.json())
//       .then((res) => {
//         dispatch(getChangeNavAction(res.data.nav))
//       })
//   }
// }