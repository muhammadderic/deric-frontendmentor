import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AddOn } from "../types";

export interface AddOnsState {
  data: {
    onlineService: AddOn;
    largeStorage: AddOn;
    customizableProfile: AddOn;
  };
  selectedAddOns: AddOn[];
  totalPrice: number;
}

const initialState: AddOnsState = {
  data: {
    onlineService: {
      addOnTitle: "Online service",
      addOnText: "Access to multiplayer games",
      addOnPrice: 1,
      addOnStatus: false,
    },
    largeStorage: {
      addOnTitle: "Larger storage",
      addOnText: "Extra 1TB of cloud save",
      addOnPrice: 2,
      addOnStatus: false,
    },
    customizableProfile: {
      addOnTitle: "Customizable Profile",
      addOnText: "Custom theme on your profile",
      addOnPrice: 1,
      addOnStatus: false,
    },
  },
  selectedAddOns: [],
  totalPrice: 0,
};

const addOnsSlice = createSlice({
  name: "addOns",
  initialState,
  reducers: {
    updateAddOn: (state, action: PayloadAction<{ 
      title: string; 
      status: boolean 
    }>) => {
      const { title, status } = action.payload;
      const { onlineService, largeStorage, customizableProfile } = state.data;
      
      if (onlineService.addOnTitle === title) {
        state.data.onlineService = {
          ...onlineService,
          addOnStatus: !status,
        };
      } else if (largeStorage.addOnTitle === title) {
        state.data.largeStorage = {
          ...largeStorage,
          addOnStatus: !status,
        };
      } else if (customizableProfile.addOnTitle === title) {
        state.data.customizableProfile = {
          ...customizableProfile,
          addOnStatus: !status,
        };
      }
      
      // Update selectedAddOns add-ons
      const selectedAddOns: AddOn[] = [];
      if (state.data.onlineService.addOnStatus) {
        selectedAddOns.push(state.data.onlineService);
      }
      if (state.data.largeStorage.addOnStatus) {
        selectedAddOns.push(state.data.largeStorage);
      }
      if (state.data.customizableProfile.addOnStatus) {
        selectedAddOns.push(state.data.customizableProfile);
      }
      
      state.selectedAddOns = selectedAddOns;
      
      // Update total price
      let total = 0;
      state.selectedAddOns.forEach(addOn => {
        total += addOn.addOnPrice;
      });
      state.totalPrice = total;
    },
    
    // New reducer: Calculate total price from selectedAddOns
    priceAddOnsSelected: (state) => {
      let price = 0;
      state.selectedAddOns.forEach(data => {
        price += data.addOnPrice;
      });
      state.totalPrice = price;
    },
    
    // Optional: Separated reducer to just update selectedAddOns without recalculating price
    addOnsSelected: (state) => {
      const { onlineService, largeStorage, customizableProfile } = state.data;
      const selectedAddOns: AddOn[] = [];
      
      if (onlineService.addOnStatus) {
        selectedAddOns.push(onlineService);
      }
      if (largeStorage.addOnStatus) {
        selectedAddOns.push(largeStorage);
      }
      if (customizableProfile.addOnStatus) {
        selectedAddOns.push(customizableProfile);
      }
      
      state.selectedAddOns = selectedAddOns;
    },
    resetAddOns: () => initialState,
  },
});

export const { 
  updateAddOn, 
  priceAddOnsSelected,
  addOnsSelected,
  resetAddOns 
} = addOnsSlice.actions;
export default addOnsSlice.reducer;