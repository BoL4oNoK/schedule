import { actionTypes } from '../actions';
import { TABLE_COLUMNS, VIEWS_FOR_SCHEDULE, USERS, TIME_ZONES } from '../../constants/constants';

const initialState = {
  viewStatus: VIEWS_FOR_SCHEDULE.table,
  user: USERS.student,
  timeZone: TIME_ZONES[3].name,
  tableColumnsVisible: TABLE_COLUMNS,
  color: {},
  impairedVersion: false
};

export default function optionsReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_OPTIONS_SUCCESS: {
      const options = action.data;
      return {
        ...state,
        ...options
      };
    }

    case actionTypes.CHANGE_TABLE_COLUMN_VISIBLE: {
      return {
        ...state,
        tableColumnsVisible: action.data,
      };
    }

    case actionTypes.CHANGE_USER: {
      return {
        ...state,
        user: action.data,
      };
    }

    case actionTypes.SET_TIME_ZONE: {
      return {
        ...state,
        timeZone: action.data,
      };
    }

    case actionTypes.CHANGE_VIEW: {
      return {
        ...state,
        viewStatus: action.data,
      };
    }

    case actionTypes.CHANGE_VERSION: {
      return {
        ...state,
        impairedVersion: !state.impairedVersion,
      };
    }

    case actionTypes.CHANGE_COLOR: {
      return {
        ...state,
        color: action.data,
      };
    }

    case actionTypes.GET_OPTIONS_FAIL: {
      return state;
    }

    default: return state;
  }
}