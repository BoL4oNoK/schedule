import { actionTypes } from "../actions";
import {
  getEvents,
  postEvent,
  updateEventById,
  deleteEventById,
} from "../../services/services";
import updateEventDataObjects from "../../utils/updateEventDataObjects";

const middlewareEvents = (store) => (next) => async (action) => {
  switch (action.type) {
    case actionTypes.INIT_EVENTS:
      try {
        const { data: events } = await getEvents();
        store.dispatch({
          type: actionTypes.GET_EVENTS_SUCCESS,
          data: updateEventDataObjects(
            events,
            store.getState().optionsReducer.timeZone
          ),
        });
      } catch (e) {
        console.log(e);
        store.dispatch({ type: actionTypes.GET_EVENTS_FAIL });
      }
      break;
    case actionTypes.ADD_EVENT:
      try {
        await postEvent(action.data);
        const { data: events } = await getEvents();
        store.dispatch({
          type: actionTypes.GET_EVENTS_SUCCESS,
          data: updateEventDataObjects(
            events,
            store.getState().optionsReducer.timeZone
          ),
        });
      } catch (e) {
        console.log(e);
      }
      break;
    case actionTypes.UPDATE_EVENT:
      try {
        await updateEventById(...action.data);
        const { data: events } = await getEvents();
        store.dispatch({
          type: actionTypes.GET_EVENTS_SUCCESS,
          data: updateEventDataObjects(
            events,
            store.getState().optionsReducer.timeZone
          ),
        });
      } catch (e) {
        console.log(e);
      }
      break;
    case actionTypes.DELETE_EVENT:
      try {
        await deleteEventById(action.data);
        const { data: events } = await getEvents();
        store.dispatch({
          type: actionTypes.GET_EVENTS_SUCCESS,
          data: updateEventDataObjects(
            events,
            store.getState().optionsReducer.timeZone
          ),
        });
      } catch (e) {
        console.log(e);
      }
      break;
    default:
      next(action);
      break;
  }
};

export default middlewareEvents;
