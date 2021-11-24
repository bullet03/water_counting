import { configureStore } from "@reduxjs/toolkit";

import drinkItemsReducer from "./reducers/drinkItemsData";

export const store = configureStore({
  reducer: {
    drinkItems: drinkItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
