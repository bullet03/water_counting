import coffee from "../assets/images/coffee.png";
import soda from "../assets/images/soda.png";
import tea from "../assets/images/tea.png";
import { DrinkTypes } from "../consts/drinkTypes";

export const getDrinkNameFromType = (drinkType: DrinkTypes) => {
  switch (drinkType) {
    case DrinkTypes.COFFEE:
      return coffee;
    case DrinkTypes.TEA:
      return soda;
    case DrinkTypes.WATER:
      return tea;
    default:
      return coffee;
  }
};
