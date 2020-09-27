import { applyMiddleware, createStore, compose } from "redux";
import middlewareEvents from "./middlewares/middlewareEvents";
import middlewareOptions from "./middlewares/middlewareOptions";
import rootReducer from "./reducer/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(middlewareEvents, middlewareOptions))
);

export default store;
