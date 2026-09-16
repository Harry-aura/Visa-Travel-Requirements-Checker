import { configureStore } from '@reduxjs/toolkit';
import visaReducer from './visaSlice';

export const store = configureStore({
  reducer: {
    visa: visaReducer,
  },
});
