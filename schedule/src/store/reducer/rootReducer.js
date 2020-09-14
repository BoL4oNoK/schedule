  
import { combineReducers } from 'redux';

import eventsReducer from './eventsReducer';
import optionsReducer from './optionsReducer';
import timeZoneReducer from './timeZoneReducer';
import userReducer from './userReducer';
import viewReducer from './viewReducer';
import columnVisibleReducer from './columnVisibleReducer';
import userModalWindowReducer from './userModalWindowReducer';
import hightlitedRowReducer from './rowsVisibleReducer';

const rootReducer = combineReducers({
  eventsReducer,
  optionsReducer,
  timeZoneReducer,
  userReducer,
  viewReducer,
  columnVisibleReducer,
  userModalWindowReducer,
  hightlitedRowReducer,
});

export default rootReducer;