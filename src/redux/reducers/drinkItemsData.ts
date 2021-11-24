import { createSlice } from "@reduxjs/toolkit";

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
    nothing: (state) => {
      return state;
    },
  },
});

export const { nothing } = drinkItemsSlice.actions;

export default drinkItemsSlice.reducer;
