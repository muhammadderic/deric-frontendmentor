import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface StepState {
  value: number;
}

const initialState: StepState = {
  value: 0,
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    changeStep: (state, action: PayloadAction<{ direction: string }>) => {
      const { direction } = action.payload;
      if (direction === "next") {
        if (state.value <= 4) {
          state.value += 1;
        }
      } else if (direction === "prev") {
        if (state.value > 0) {
          state.value -= 1;
        }
      } else {
        state.value = 4;
      }
    },
    changeStepFromStepOne: (state, action: PayloadAction<{ 
      personalInfoValid: boolean; 
      direction: string 
    }>) => {
      const { personalInfoValid, direction } = action.payload;
      if (direction === "next" && state.value === 0 && personalInfoValid) {
        state.value += 1;
      }
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { changeStep, changeStepFromStepOne, setStep } = stepSlice.actions;
export default stepSlice.reducer;