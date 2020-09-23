import { actionTypes } from '../actions';

const initialState = {
  comment: null
};

export default function commentReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_COMMENT: {
      return {
        ...state,
        comment: action.data,
      };
    }

    default: return state;
  }
}