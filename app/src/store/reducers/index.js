import { FETCH_ACTIVITY_IDEA_START, FETCH_ACTIVITY_IDEA_SUCCESS, FETCH_ACTIVITY_IDEA_ERROR } from '../actions'

const initialState = {
  isLoading: false,
  data: null,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ACTIVITY_IDEA_START:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_ACTIVITY_IDEA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: ''
      }
    case FETCH_ACTIVITY_IDEA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}