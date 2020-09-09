  
import { combineReducers } from 'redux';

import eventsReducer from './eventsReducer';
import optionsReducer from './optionsReducer';
import timeZoneReducer from './timeZoneReducer'

const rootReducer = combineReducers({
  eventsReducer,
  optionsReducer,
  timeZoneReducer
});

export default rootReducer;