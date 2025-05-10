import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserPlan } from "../types";

export interface UserPlanState {
  data: {
    arcade: UserPlan;
    advanced: UserPlan;
    pro: UserPlan;
  };
  selected: UserPlan;
  time: "monthly" | "yearly";
}

const initialState: UserPlanState = {
  data: {
    arcade: {
      userPlanTitle: "arcade",
      userPlanPrice: 9,
    },
    advanced: {
      userPlanTitle: "advanced",
      userPlanPrice: 12,
    },
    pro: {
      userPlanTitle: "pro",
      userPlanPrice: 15,
    },
  },
  selected: {
    userPlanTitle: "arcade",
    userPlanPrice: 9,
  },
  time: "monthly",
};

const userPlanSlice = createSlice({
  name: "userPlan",
  initialState,
  reducers: {
    updateUserPlan: (state, action: PayloadAction<{ userPlan: string }>) => {
      const { userPlan } = action.payload;
      const { arcade, advanced, pro } = state.data;
      
      if (arcade.userPlanTitle === userPlan) {
        state.selected = { ...arcade };
      } else if (advanced.userPlanTitle === userPlan) {
        state.selected = { ...advanced };
      } else if (pro.userPlanTitle === userPlan) {
        state.selected = { ...pro };
      }
    },
    updateUserPlanTime: (state, action: PayloadAction<{ time: "monthly" | "yearly" }>) => {
      const { time } = action.payload;
      state.time = time;
      
      // Update prices based on time selection
      // const multiplier = time === "yearly" ? 10 : 1;
      state.data.arcade.userPlanPrice = time === "yearly" ? 90 : 9;
      state.data.advanced.userPlanPrice = time === "yearly" ? 120 : 12;
      state.data.pro.userPlanPrice = time === "yearly" ? 150 : 15;
      
      // Update selected price
      const selectedTitle = state.selected.userPlanTitle;
      if (selectedTitle === "arcade") {
        state.selected.userPlanPrice = state.data.arcade.userPlanPrice;
      } else if (selectedTitle === "advanced") {
        state.selected.userPlanPrice = state.data.advanced.userPlanPrice;
      } else if (selectedTitle === "pro") {
        state.selected.userPlanPrice = state.data.pro.userPlanPrice;
      }
    },
    resetUserPlan: () => initialState,
  },
});

export const { 
  updateUserPlan, 
  updateUserPlanTime, 
  resetUserPlan 
} = userPlanSlice.actions;
export default userPlanSlice.reducer;