import { actionTypes } from '../actions';
import { USERS } from '../../constants/constants';

const initialState = {
  user: USERS.student
};

export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_USER: {
      return {
        ...state,
        user: action.data,
      };
    }

    default: return state;
  }
}