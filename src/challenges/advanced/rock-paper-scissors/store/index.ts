import { configureStore } from '@reduxjs/toolkit';
import { 
  useDispatch, 
  useSelector, 
  type TypedUseSelectorHook 
} from 'react-redux';

import rpsReducer from './rpsSlice';

export const store = configureStore({
  reducer: {
    rps: rpsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type RPSDispatch = typeof store.dispatch;

// These hooks used throughout the app instead of plain `useDispatch` and `useSelector`
export const useRPSDispatch: () => RPSDispatch = useDispatch;
export const useRPSSelector: TypedUseSelectorHook<RootState> = useSelector;