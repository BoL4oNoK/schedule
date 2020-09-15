import { actionTypes } from '../actions';

const initialState = {
  hightlitedRowStatus: false,
  hightlitedRows: null,
};

export default function hightlitedRowReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ROWS_HIGTHLITED_STATUS: {
      return {
        ...state,
        hightlitedRowStatus: action.data,
      };
    }
    case actionTypes.CHANGE_HIGHTLITED_ROWS: {
      return {
        ...state,
        hightlitedRows: action.data,
      };
    }

    default: return state;
  }
} 