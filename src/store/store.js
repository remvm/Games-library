import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/userSlice';
import { gamesApi } from '../api/games'; 

const store = configureStore({
  reducer: {
    user: rootReducer, 
    [gamesApi.reducerPath]: gamesApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(gamesApi.middleware),
});

export default store;
