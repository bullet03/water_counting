import { nanoid } from "@reduxjs/toolkit";

import coffee from "../assets/images/coffee.png";
import soda from "../assets/images/soda.png";
import tea from "../assets/images/tea.png";
import DrinkItemModel from "../models/drinkItemModel";

export const cardsData: DrinkItemModel[] = [
  {
    ml: 300,
    id: nanoid(),
    drink: { imageHref: coffee, title: "coffee", id: nanoid() },
  },
  {
    ml: 300,
    id: nanoid(),
    drink: { imageHref: tea, title: "tea", id: nanoid() },
  },
  {
    ml: 300,
    id: nanoid(),
    drink: { imageHref: soda, title: "soda", id: nanoid() },
  },
];
