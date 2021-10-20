import React, { useState } from "react";

import { CardsList } from "../../components/CardsList";
import { Data } from "../../components/Data";
import { ProgressBar } from "../../components/ProgressBar";
import { Button } from "../../components/UI/Button";
import { cardsData } from "../../data/cardsData";

import { StyledContainer } from "./styles";

export const Homepage = () => {
  const [drinksData, setDrinksData] = useState(cardsData);

  const deleteDrinkItem = () => {
    console.log("heeey");
  };

  const editDrinkItem = () => {
    console.log("heeey");
  };

  return (
    <StyledContainer maxWidth="sm" sx={{ backgroundColor: "#99C48E" }}>
      <Data />
      {/* <ProgressBar /> */}
      <CardsList
        deleteDrinkItem={deleteDrinkItem}
        editDrinkItem={editDrinkItem}
        drinksData={drinksData}
      />
      <Button />
    </StyledContainer>
  );
};
