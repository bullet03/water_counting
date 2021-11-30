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
    addDrinkItemAction: (state, action: PayloadAction<DrinkItemModel>) => {
      // let { drinkItems } = state;
      // state.drinkItems = [...state.drinkItems, action.payload];
      state.drinkItems.push(action.payload);
      return state;
    },
    deleteDrinkItemAction: (state, action: PayloadAction<string>) => {
      const updatedDrinkItems = state.drinkItems.filter(
        (drinkItem) => drinkItem.id !== action.payload
      );
      const stateCopy = state;
      stateCopy.drinkItems = updatedDrinkItems;
      return state;
    },
    editDrinkItem: (state, action: PayloadAction<DrinkItemModel>) => {
      return state;
    },
  },
});

export const { addDrinkItemAction, deleteDrinkItemAction } =
  drinkItemsSlice.actions;

export default drinkItemsSlice.reducer;
