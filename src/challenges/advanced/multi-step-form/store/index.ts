import { configureStore } from '@reduxjs/toolkit';
import stepReducer from './slices/stepSlice';
import personalInfoReducer from './slices/personalInfoSlice';
import userPlanReducer from './slices/userPlanSlice';
import addOnsReducer from './slices/addOnsSlice';

export const store = configureStore({
  reducer: {
    step: stepReducer,
    personalInfo: personalInfoReducer,
    userPlan: userPlanReducer,
    addOns: addOnsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;