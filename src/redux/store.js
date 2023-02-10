import { configureStore, combineReducers } from "@reduxjs/toolkit";
import rapportReducer from './slice/rapportSlice'

const rootReducer = combineReducers({
  rapports: rapportReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;