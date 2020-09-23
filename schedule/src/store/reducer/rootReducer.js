  
import { combineReducers } from 'redux';

import eventsReducer from './eventsReducer';
import optionsReducer from './optionsReducer';
import modalWindowReducer from './modalWindowReducer';
import permanentEventReducer from './permanentEventReducer';
import hightlitedRowReducer from './hightlitedRowsReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
  eventsReducer,
  optionsReducer,
  modalWindowReducer,
  permanentEventReducer,
  hightlitedRowReducer,
  commentReducer
});

export default rootReducer;