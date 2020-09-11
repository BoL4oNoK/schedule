import { actionTypes } from '../actions';

const localName = 'scheduleOptions';

const middlewareOptions = (store) => (next) => async (action) => {
  switch (action.type) {
    case actionTypes.INIT_OPTIONS:
      try {
        const options = JSON.parse(localStorage.getItem(localName)) || {};
        store.dispatch({ type: actionTypes.GET_OPTIONS_SUCCESS, data: options });
      } catch (e) {
        store.dispatch({ type: actionTypes.GET_OPTIONS_FAIL });
      }
      break;
    case actionTypes.SET_OPTIONS:
      localStorage.setItem(localName, JSON.stringify(action.data));
      store.dispatch({ type: actionTypes.GET_OPTIONS_SUCCESS, data: action.data});
      break;
    default:
      next(action);
      break;
  }
};

export default middlewareOptions;