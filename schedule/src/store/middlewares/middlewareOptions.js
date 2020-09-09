import { actionTypes } from '../actions';

const localName = 'scheduleOptions';

const middlewareOptions = (store) => (next) => async (action) => {
  if (action.type === actionTypes.INIT_OPTIONS) {
    try {
      const options = JSON.parse(localStorage.getItem(localName)) || {};
      store.dispatch({ type: actionTypes.GET_OPTIONS_SUCCESS, data: options });
    } catch (e) {
      store.dispatch({ type: actionTypes.GET_OPTIONS_FAIL });
    }
  } else if (action.type === actionTypes.SET_OPTIONS) {
    localStorage.setItem(localName, JSON.stringify(action.data));
    store.dispatch({ type: actionTypes.GET_OPTIONS_SUCCESS, data: action.data});
  } else {
    next(action);
  }
};

export default middlewareOptions;