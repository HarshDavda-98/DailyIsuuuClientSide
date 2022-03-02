import { combineReducers } from "redux";
import UseReduser from "./reducer";

const rootReducer = combineReducers({
  data: UseReduser,
});
export default rootReducer;
