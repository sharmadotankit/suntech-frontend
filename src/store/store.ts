import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'; // Import session storage
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: storageSession, // Use session storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});


export default  store;

export const persistor = persistStore(store);
