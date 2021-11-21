import { DrinkTypes } from "../consts/drinkTypes";

export const getDrinkNameFromType = (drinkType: DrinkTypes) => {
  switch (drinkType) {
    case DrinkTypes.COFFEE:
      return "кофе";
    case DrinkTypes.TEA:
      return "чай";
    case DrinkTypes.WATER:
      return "вода";
    default:
      return "выберите одно из значений";
  }
};
