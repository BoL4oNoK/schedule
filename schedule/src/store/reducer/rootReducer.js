  
import { combineReducers } from 'redux';

import eventsReducer from './eventsReducer';
import optionsReducer from './optionsReducer';
import modalWindowReducer from './modalWindowReducer';
import permanentEventReducer from './permanentEventReducer'
import hightlitedRowReducer from './hightlitedRowsReducer';

const rootReducer = combineReducers({
  eventsReducer,
  optionsReducer,
  modalWindowReducer,
  permanentEventReducer,
  hightlitedRowReducer
});

export default rootReducer;