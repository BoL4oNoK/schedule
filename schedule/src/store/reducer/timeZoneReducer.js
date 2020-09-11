import { actionTypes } from '../actions';

const initialState = {
  timeZone: 0
};

export default function timeZoneReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_TIME_ZONE: {
      return {
        ...state,
        timeZone: action.data,
      };
    }

    default: return state;
  }
}