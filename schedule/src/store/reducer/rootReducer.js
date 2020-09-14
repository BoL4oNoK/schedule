  
import { combineReducers } from 'redux';

import eventsReducer from './eventsReducer';
import optionsReducer from './optionsReducer';
import timeZoneReducer from './timeZoneReducer';
import userReducer from './userReducer';
import viewReducer from './viewReducer';
import columnVisibleReducer from './columnVisibleReducer';
import modalWindowReducer from './modalWindowReducer';
import permanentEventReducer from './permanentEventReducer'

const rootReducer = combineReducers({
  eventsReducer,
  optionsReducer,
  timeZoneReducer,
  userReducer,
  viewReducer,
  columnVisibleReducer,
  modalWindowReducer,
  permanentEventReducer
});

export default rootReducer;