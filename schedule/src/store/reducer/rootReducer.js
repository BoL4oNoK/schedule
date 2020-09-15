  
import { combineReducers } from 'redux';

import eventsReducer from './eventsReducer';
import optionsReducer from './optionsReducer';
import userModalWindowReducer from './userModalWindowReducer';

const rootReducer = combineReducers({
  eventsReducer,
  optionsReducer,
  userModalWindowReducer
});

export default rootReducer;