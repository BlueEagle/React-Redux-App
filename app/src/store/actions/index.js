import axios from 'axios'

export const FETCH_ACTIVITY_IDEA_START = "FETCH_ACTIVITY_IDEA"
export const FETCH_ACTIVITY_IDEA_SUCCESS = "FETCH_ACTIVITY_SUCCESS"
export const FETCH_ACTIVITY_IDEA_ERROR = "FETCH_ACTIVITY_ERROR"

export const generateActivity = () => {
  return dispatch => {
    dispatch({ type: FETCH_ACTIVITY_IDEA_START })

    axios
      .get('http://www.boredapi.com/api/activity/')
      .then(res => {
        dispatch({ type: FETCH_ACTIVITY_IDEA_SUCCESS, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: FETCH_ACTIVITY_IDEA_ERROR, payload: err })
      })
  }
}