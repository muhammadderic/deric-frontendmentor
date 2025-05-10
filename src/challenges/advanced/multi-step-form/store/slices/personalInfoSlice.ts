import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { PersonalInfoData, Errors } from "../types";

export interface PersonalInfoState {
  data: PersonalInfoData;
  errors: Errors;
}

const initialState: PersonalInfoState = {
  data: {
    name: "",
    email: "",
    phone: "",
  },
  errors: {
    errorName: false,
    errorEmail: false,
    errorPhone: false,
  },
};

const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    updatePersonalInfo: (state, action: PayloadAction<{ 
      name: keyof PersonalInfoData; 
      value: string 
    }>) => {
      const { name, value } = action.payload;
      state.data[name] = value;
    },
    validatePersonalInfo: (state) => {
      const { name, email, phone } = state.data;
      state.errors.errorName = !name;
      state.errors.errorEmail = !email;
      state.errors.errorPhone = !phone;
    },
    resetPersonalInfo: () => initialState,
  },
});

export const { 
  updatePersonalInfo, 
  validatePersonalInfo, 
  resetPersonalInfo 
} = personalInfoSlice.actions;
export default personalInfoSlice.reducer;