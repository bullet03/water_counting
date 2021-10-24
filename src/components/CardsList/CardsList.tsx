import React, { useState } from "react";

import Grid from "@mui/material/Grid";

import { cardsData } from "../../data/cardsData";
import { Card } from "../Card";

import { StyledGridItem } from "./styles";

export const CardsList = () => {
  const [drinksData, setDrinksData] = useState(cardsData);

  const deleteDrinkItem = (id: number) => {
    const filtered = drinksData.filter((drinkItem) => drinkItem.id !== id);
    setDrinksData(filtered);
  };

  const editDrinkItem = () => {
    console.log("heeey");
  };

  return (
    <Grid container spacing={2}>
      {drinksData.map((drinksItem) => (
        <StyledGridItem item xs={12} key={drinksItem.id}>
          <Card
            drinksItem={drinksItem}
            deleteDrinkItem={deleteDrinkItem}
            editDrinkItem={editDrinkItem}
          />
        </StyledGridItem>
      ))}
    </Grid>
  );
};
