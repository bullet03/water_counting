import coffee from "../assets/images/coffee.png";
import soda from "../assets/images/soda.png";
import tea from "../assets/images/tea.png";
import { DrinkTypes } from "../consts/drinkTypes";

export const getDrinkImage = (drinkType: DrinkTypes) => {
  switch (drinkType) {
    case DrinkTypes.COFFEE:
      return coffee;
    case DrinkTypes.WATER:
      return soda;
    case DrinkTypes.TEA:
      return tea;
    default:
      return coffee;
  }
};
