import { actionTypes } from '../actions';

const initialState = {
  options: null
};

export default function optionsReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_OPTIONS_SUCCESS: {
      return {
        ...state,
        options: action.data,
      };
    }

    case actionTypes.GET_OPTIONS_FAIL: {
      return {
        ...state,
        options: {},
      };
    }

    default: return state;
  }
}