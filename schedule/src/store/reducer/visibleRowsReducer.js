import { actionTypes } from '../actions';

const initialState = {
  visibleRows: null,
};

export default function visibleRowsReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_VISIBLE_ROWS: {
      return {
        ...state,
        visibleRows: action.data, 
      };
    }

    default: return state;
  }
}