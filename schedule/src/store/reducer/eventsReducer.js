import { actionTypes } from '../actions';

const initialState = {
  events: null,
};

export default function eventsReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_EVENTS_SUCCESS: {
      return {
        ...state,
        events: action.data, 
      };
    }

    case actionTypes.GET_EVENTS_FAIL: {
      return {
        ...state,
        events: [],
      };
    }

    default: return state;
  }
}