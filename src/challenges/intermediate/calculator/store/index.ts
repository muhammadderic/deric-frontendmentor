import { configureStore } from '@reduxjs/toolkit';
import calcThemeReducer from './calcThemeSlice';

export const store = configureStore({
  reducer: {
    calculatorTheme: calcThemeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;