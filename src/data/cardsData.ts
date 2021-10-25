import { nanoid } from "@reduxjs/toolkit";

import coffee from "../assets/images/coffee.png";
import soda from "../assets/images/soda.png";
import tea from "../assets/images/tea.png";

export const cardsData = [
  { title: "coffee", id: nanoid(), ml: 300, imageHref: coffee },
  { title: "tea", id: nanoid(), ml: 300, imageHref: tea },
  { title: "water", id: nanoid(), ml: 300, imageHref: soda },
];
