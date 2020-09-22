export const actionTypes = {
  INIT_EVENTS: 'INIT_EVENTS',
  GET_EVENTS_SUCCESS: 'GET_EVENTS_SUCCESS',
  GET_EVENTS_FAIL: 'GET_EVENTS_FAIL',
  ADD_EVENT: 'ADD_EVENT',
  UPDATE_EVENT: 'UPDATE_EVENT',
  DELETE_EVENT: 'DELETE_EVENT',
  INIT_OPTIONS: 'INIT_OPTIONS',
  GET_OPTIONS_SUCCESS: 'GET_OPTIONS_SUCCESS',
  GET_OPTIONS_FAIL: 'GET_OPTIONS_FAIL',
  SAVE_OPTIONS: 'SAVE_OPTIONS',
  SET_TIME_ZONE: 'SET_TIME_ZONE',
  CHANGE_USER: 'CHANGE_USER',
  CHANGE_VIEW: 'CHANGE_VIEW',
  CHANGE_TABLE_COLUMN_VISIBLE: 'CHANGE_ONE_TABLE_COLUMN',
  CHANGE_USER_MODAL_WINDOW_VISIBLE: 'CHANGE_USER_MODAL_WINDOW_VISIBLE',
  CHANGE_VERSION: 'CHANGE_VERSION', 
  CHANGE_COLOR: 'CHANGE_COLOR',
  CHANGE_EDIT_MODAL_WINDOW_VISIBLE: 'CHANGE_EDIT_MODAL_WINDOW_VISIBLE',
  CHANGE_PERMANENT_EVENT: 'CHANGE_PERMANENT_EVENT',
  CHANGE_ROWS_HIGTHLITED_STATUS: 'CHANGE_ROWS_HIGTHLITED_STATUS',
  CHANGE_HIGHTLITED_ROWS: 'CHANGE_HIGHTLITED_ROWS',
  CHANGE_VISIBLE_ROWS: 'CHANGE_VISIBLE_ROWS',
}

export const actionCreator = {
  initEvents: () => ({ type: actionTypes.INIT_EVENTS }),
  addEvent: (data) => ({ type: actionTypes.ADD_EVENT, data }), //data - объект event
  updateEvent: (data) => ({ type: actionTypes.UPDATE_EVENT, data }),//data - массив, где первое значение event id, второе новый объект event
  deleteEvent: (data) => ({ type: actionTypes.DELETE_EVENT, data }),//data - event id
  setTimeZone: (data) => ({ type: actionTypes.SET_TIME_ZONE, data }),//data - таймзона в часах со знаком (например для рб +3)
  initOptions: () => ({ type: actionTypes.INIT_OPTIONS }),
  saveOptions: (data) => ({ type: actionTypes.SAVE_OPTIONS }),
  changeUser: (data) => ({ type: actionTypes.CHANGE_USER, data }),
  changeView: (data) => ({ type: actionTypes.CHANGE_VIEW, data }),
  changeColumnsVisible: (data) => ({ type: actionTypes.CHANGE_TABLE_COLUMN_VISIBLE, data }),
  changeUserModalWindowVisible: (data) => ({ type: actionTypes.CHANGE_USER_MODAL_WINDOW_VISIBLE, data }),
  changeVersion: (data) => ({ type: actionTypes.CHANGE_VERSION, data }),
  changeColor: (data) => ({ type: actionTypes.CHANGE_COLOR, data }),//data - объект с данными по цветам
  changeEditModalWindowVisible: (data) => ({ type: actionTypes.CHANGE_EDIT_MODAL_WINDOW_VISIBLE, data }),
  changePermanentEvent: (data) => ({ type: actionTypes.CHANGE_PERMANENT_EVENT, data }),
  changeHightlitedRowStatus: (data) => ({ type: actionTypes.CHANGE_ROWS_HIGTHLITED_STATUS, data }),
  changeHightlitedRows: (data) => ({ type: actionTypes.CHANGE_HIGHTLITED_ROWS, data }),
  changeVisibleRows: (data) => ({ type: actionTypes.CHANGE_VISIBLE_ROWS, data }),
}