import { combineReducers } from "redux";
import { fetchReducer } from "./dataReducer";

export default combineReducers({
  fetch: fetchReducer,
  // state
});
