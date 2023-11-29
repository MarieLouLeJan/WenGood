

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import authSlice from './slices/authSlice';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, authSlice)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
  })

export const persistor = persistStore(store)


