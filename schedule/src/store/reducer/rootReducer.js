  
import { combineReducers } from 'redux';

import eventsReducer from './eventsReducer';
import optionsReducer from './optionsReducer';
import timeZoneReducer from './timeZoneReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  eventsReducer,
  optionsReducer,
  timeZoneReducer,
  userReducer
});

export default rootReducer;