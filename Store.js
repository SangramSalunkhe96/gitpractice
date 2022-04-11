import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {
  addPropertyReducer,
  addFacilityReducer,
} from "./Reducers/FarmerOrSellerReducer";
import {
  userSignupReducer,
  userSigninReducer,
  fetchUserReducer,
  fetchPropertyReducer,
  userEditReducer,
  fetchFarmerOrSellerReducer,
} from "./Reducers/UserReducer";

const reducer = combineReducers({
  userSignup: userSignupReducer,
  userSignin: userSigninReducer,
  fetchUser: fetchUserReducer,
  propertyAdd: addPropertyReducer,
  fetchProperty: fetchPropertyReducer,
  userEditProfile: userEditReducer,
  getContact: fetchFarmerOrSellerReducer,
  addFacility: addFacilityReducer,
});

let store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
