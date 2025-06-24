import { configureStore } from '@reduxjs/toolkit';
import lanReducer from './slices/lanSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    lan: lanReducer,
    auth: authReducer,
  },
});

export default store;
