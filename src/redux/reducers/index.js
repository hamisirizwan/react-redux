import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  user: userReducer,
});

export default reducers;
