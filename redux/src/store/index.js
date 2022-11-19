import { applyMiddleware, combineReducers, createStore } from "redux";
import { customerReducer } from "./customerReducer";
import cashReducer from "./cashReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({
//   cash: cashReducer,
//   customers: customerReducer,
// });

const store = configureStore({
  reducer: {
    cash: cashReducer,
    customers: customerReducer,
  },
});

export default store;
