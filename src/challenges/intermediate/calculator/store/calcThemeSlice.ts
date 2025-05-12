import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CalculatorThemeState {
  theme: 'calc-theme-1' | 'calc-theme-2' | 'calc-theme-3';
}

const initialState: CalculatorThemeState = {
  theme: 'calc-theme-1', // default
};

const calcThemeSlice = createSlice({
  name: 'calculatorTheme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<CalculatorThemeState['theme']>) {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = calcThemeSlice.actions;
export default calcThemeSlice.reducer;