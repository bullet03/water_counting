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
    add: (state, action: PayloadAction<DrinkItemModel>) => {
      // let { drinkItems } = state;
      state.drinkItems = [...state.drinkItems, action.payload];
      return state;
    },
  },
});

export const { add } = drinkItemsSlice.actions;

export default drinkItemsSlice.reducer;
