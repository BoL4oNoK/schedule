import { actionTypes } from '../actions';
import { getEvents, postEvent, updateEventById, deleteEventById } from '../../services/services';
import addCurrentTimeToEvents from '../addCurrentTimeToEvents';

const middlewareEvents = (store) => (next) => async (action) => {
  switch (action.type) {
    case actionTypes.INIT_EVENTS:
      try {
        const { data: events } = await getEvents();
        store.dispatch({ type: actionTypes.GET_EVENTS_SUCCESS, data: addCurrentTimeToEvents(events, 
          store.getState().timeZoneReducer.timeZone) });
        console.log(addCurrentTimeToEvents(events))
      } catch (e) {
        console.log(e);
        store.dispatch({ type: actionTypes.GET_EVENTS_FAIL });
      }
      break;
    case actionTypes.ADD_EVENT:
      try {
        postEvent(action.data);
        const { data: events } = await getEvents();
        store.dispatch({ type: actionTypes.GET_EVENTS_SUCCESS, data: addCurrentTimeToEvents(events, 
          store.getState().timeZoneReducer.timeZone) });
      } catch (e) {
        console.log(e)
      }
      break;
    case actionTypes.UPDATE_EVENT:
      try {
        updateEventById(action.data);
        const { data: events } = await getEvents();
        store.dispatch({ type: actionTypes.GET_EVENTS_SUCCESS, data: addCurrentTimeToEvents(events, 
          store.getState().timeZoneReducer.timeZone) });
      } catch (e) {
        console.log(e)
      }
      break;
    case actionTypes.DELETE_EVENT:
      try {
        deleteEventById(action.data);
        const { data: events } = await getEvents();
        store.dispatch({ type: actionTypes.GET_EVENTS_SUCCESS, data: events });
      } catch (e) {
        console.log(e)
      } 
      break;
    default:
      next(action);
      break;
  };
}

export default middlewareEvents;