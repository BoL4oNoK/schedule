import { actionTypes } from '../actions';

const initialState = {
  userModalWindowVisability: false, 
};

export default function userModalWindowReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_USER_MODAL_WINDOW_VISIBLE: {
      return {
        ...state,
        userModalWindowVisability: action.data,
      };
    }

    default: return state;
  }
}