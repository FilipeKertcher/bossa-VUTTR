import { combineReducers } from "redux";
import toolsReducer from "./ducks/tools";

export default combineReducers({
  tools: toolsReducer,
});
