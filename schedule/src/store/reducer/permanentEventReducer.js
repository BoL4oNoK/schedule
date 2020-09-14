import { actionTypes } from '../actions';

const initialState = {
  permanentEvent: null
};

export default function permanentEventReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_PERMANENT_EVENT: {
      return {
        ...state,
        permanentEvent: action.data,
      };
    }

    default: return state;
  }
}