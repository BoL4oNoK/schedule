import { actionTypes } from '../actions';
import { TABLE_COLUMNS } from '../../constants/constants';

const initialState = {
  tableColumnsVisible: TABLE_COLUMNS 
};

export default function columnVisibleReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TABLE_COLUMN_VISIBLE: {
      return {
        ...state,
        tableColumnsVisible: action.data,
      };
    }

    default: return state;
  }
} 