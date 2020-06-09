import CakeReducer from "./reducers";
import IceReducer from "./icecreamReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cake: CakeReducer,
  ice: IceReducer,
});

export default rootReducer;
