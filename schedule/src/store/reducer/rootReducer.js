  
import { combineReducers } from 'redux';

import eventsReducer from './eventsReducer';
import optionsReducer from './optionsReducer';
import modalWindowReducer from './modalWindowReducer';
import permanentEventReducer from './permanentEventReducer'
import hightlitedRowReducer from './hightlitedRowsReducer';
import visibleRowsReducer from './visibleRowsReducer';

const rootReducer = combineReducers({
  eventsReducer,
  optionsReducer,
  modalWindowReducer,
  permanentEventReducer,
  hightlitedRowReducer,
  visibleRowsReducer
});

export default rootReducer;