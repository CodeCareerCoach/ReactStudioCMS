import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import viewReducer from "./viewReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    view: viewReducer
  });
