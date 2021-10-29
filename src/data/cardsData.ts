import { nanoid } from "@reduxjs/toolkit";

import coffee from "../assets/images/coffee.png";
import soda from "../assets/images/soda.png";
import tea from "../assets/images/tea.png";
import DrinkItemModel from "../models/drinkItemModel";

export const cardsData: DrinkItemModel[] = [
  {
    ml: 300,
    id: nanoid(),
    drink: { imageSrc: coffee, title: "coffee", id: nanoid() },
  },
  {
    ml: 300,
    id: nanoid(),
    drink: { imageSrc: tea, title: "tea", id: nanoid() },
  },
  {
    ml: 300,
    id: nanoid(),
    drink: { imageSrc: soda, title: "soda", id: nanoid() },
  },
];
