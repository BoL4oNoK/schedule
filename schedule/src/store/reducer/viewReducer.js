import { actionTypes } from '../actions';
import { VIEWS_FOR_SCHEDULE } from '../../constants/constants';

const initialState = {
  viewStatus: VIEWS_FOR_SCHEDULE.table
};

export default function viewReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_VIEW: {
      return {
        ...state,
        viewStatus: action.data,
      };
    }

    default: return state;
  }
} 