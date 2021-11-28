/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { cardsData } from "../../data/cardsData";
import DrinkItemModel from "../../models/drinkItemModel";

export interface DrinkItemsState {
  drinkItems: DrinkItemModel[];
}

const initialState: DrinkItemsState = {
  drinkItems: cardsData,
};

export const drinkItemsSlice = createSlice({
  name: "drinkItems",
  initialState,
  reducers: {
    addDrinkItem: (state, action: PayloadAction<DrinkItemModel>) => {
      // let { drinkItems } = state;
      state.drinkItems = [...state.drinkItems, action.payload];
      return state;
    },
    deleteDrinkItem: (state, action: PayloadAction<string>) => {
      const updatedDrinkItems = state.drinkItems.filter((drinkItem) => drinkItem.id !== action.payload);
      state.drinkItems = updatedDrinkItems;
      return state;
    },
    editDrinkItem: (state, action: PayloadAction<DrinkItemModel>) => {
      
      return state;
    },
  },
});

export const { addDrinkItem, deleteDrinkItem } = drinkItemsSlice.actions;

export default drinkItemsSlice.reducer;
