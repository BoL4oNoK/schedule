import { actionTypes } from "../actions";

const initialState = {
  userModalWindowVisability: false,
  editModalWindowVisability: false,
  AddNewEventModalVisability: false,
};

export default function modalWindowReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_USER_MODAL_WINDOW_VISIBLE: {
      return {
        ...state,
        userModalWindowVisability: action.data,
      };
    }
    case actionTypes.CHANGE_EDIT_MODAL_WINDOW_VISIBLE: {
      return {
        ...state,
        editModalWindowVisability: action.data,
      };
    }
    case actionTypes.ADD_NEW_EVENT_MODAL_WINDOW_VISIBLE: {
      return {
        ...state,
        AddNewEventModalVisability: action.data,
      };
    }
    default:
      return state;
  }
}
