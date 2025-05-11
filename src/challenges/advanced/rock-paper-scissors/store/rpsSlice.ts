import { 
  createSlice, 
  type PayloadAction 
} from '@reduxjs/toolkit';

interface Choice {
  name: string;
  borderColor: string;
  shadowColor: string;
  img: string;
}

interface RPSState {
  score: number;
  rulesIsOpen: boolean;
  choice: Choice | null;
}

const initialState: RPSState = {
  score: 0,
  rulesIsOpen: false,
  choice: null,
};

export const rpsSlice = createSlice({
  name: 'rps',
  initialState,
  reducers: {
    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    incrementScore: (state) => {
      state.score += 1;
    },
    setRulesIsOpen: (state, action: PayloadAction<boolean>) => {
      state.rulesIsOpen = action.payload;
    },
    setChoice: (state, action: PayloadAction<Choice | null>) => {
      state.choice = action.payload;
    },
    // Useful for clearing the selection
    resetChoice: (state) => {
      state.choice = null;
    }
  },
});

export const { 
  setScore, 
  incrementScore, 
  setRulesIsOpen, 
  setChoice,
  resetChoice
} = rpsSlice.actions;

export default rpsSlice.reducer;