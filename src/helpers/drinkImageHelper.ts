import coffee from "../assets/images/coffee.png";
import soda from "../assets/images/soda.png";
import tea from "../assets/images/tea.png";

export const getDrinkImage = (drinkType: string) => {
  switch (drinkType) {
    case "coffee":
      return coffee;
    case "soda":
      return soda;
    case "tea":
      return tea;
    default:
      return coffee;
  }
};
