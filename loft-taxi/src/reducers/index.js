import { combineReducers } from "redux";
import auth from "./auth";
import mapReducer from "./mapReducer";
import profileReducer from "./profileReducer";
import addressListReducer from "./addressListReducer";
export default combineReducers({
  auth,
  mapReducer,
  profileReducer,
  addressListReducer,
});
